import { GoogleSpreadsheet } from 'google-spreadsheet'
import { format } from 'date-fns'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const cupomGenerator = (date) => {
  const code = parseInt(format(date, 'mmSSSMMyyDDDssHH')).toString(16).toUpperCase()
  return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}

export default async (req, res) => {

  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo()

    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A2:B2')

    const showPromoCell = sheetConfig.getCell(1, 0)
    const textCell = sheetConfig.getCell(1, 1)

    let cupom = ''
    let promo = ''
    const today = new Date()
    const data = JSON.parse(req.body)

    if (showPromoCell.value) {
      cupom = cupomGenerator(today)
      promo = textCell.value
    }

    const sheet = doc.sheetsByIndex[1]

    await sheet.addRow({
      name: data.name,
      email: data.email,
      whatsapp: data.whatsapp,
      date: format(today, 'dd/MM/yyyy HH:mm'),
      rate: data.rate,
      opinion: data.opinion,
      cupom,
      promo,
      active: true,
    })

    res.end(JSON.stringify({
      showCoupon: cupom !== '',
      cupom,
      promo
    }))

  } catch (err) {
    console.log(err)
    res.end('error ' + err)
  }


}