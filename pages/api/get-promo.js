import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('1LjxaI0h9p1LqWM6la6ZZzQfLgum5ITocu388yq4_Bns')

export default async (req, res) => {

  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A2:B2')

    const showPromoCell = sheet.getCell(1, 0)
    const textCell = sheet.getCell(1, 1)

    res.end(JSON.stringify({
      showCoupon: showPromoCell.value === true,
      message: textCell.value
    }))
  } catch (err) {
    console.log(err)
    res.end(JSON.stringify({
      showCoupon: false,
      message: err
    }))
  }





}