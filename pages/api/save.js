import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('1LjxaI0h9p1LqWM6la6ZZzQfLgum5ITocu388yq4_Bns')

export default async (req, res) => {

  try {
    console.log(JSON.parse(req.body))
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)

    await sheet.addRow({
      name: data.name,
      email: data.email,
      whatsapp: data.whatsapp,
      cupom: data.cupom,
      promo: data.promo
    })

    res.end(req.body)

  } catch (err) {
    console.log(err)
    res.end('error ' + err)
  }


}