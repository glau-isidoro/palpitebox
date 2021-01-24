import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'
import { format } from 'date-fns'

const doc = new GoogleSpreadsheet('1LjxaI0h9p1LqWM6la6ZZzQfLgum5ITocu388yq4_Bns')

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

    if (showPromoCell.value) {
      // TODO: gerar cupom
      cupom = 'temp-5678'
      promo = textCell.value
    }

    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)

    await sheet.addRow({
      name: data.name,
      email: data.email,
      whatsapp: data.whatsapp,
      date: format(new Date(), 'dd/MM/yyyy HH:mm'),
      rate: 5,
      cupom,
      promo,
      active: true,
    })

    res.end(req.body)

  } catch (err) {
    console.log(err)
    res.end('error ' + err)
  }


}