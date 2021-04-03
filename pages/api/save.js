import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'
import { format } from 'date-fns'

const doc = new GoogleSpreadsheet('1LjxaI0h9p1LqWM6la6ZZzQfLgum5ITocu388yq4_Bns')

const cupomGenerator = (date) => {
  const code = parseInt(format(date, 'mmSSSMMyyDDDssHH')).toString(16).toUpperCase()
  return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}

export default async (req, res) => {

  try {
    console.log(JSON.parse(req.body))
    await doc.useServiceAccountAuth(credentials)
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