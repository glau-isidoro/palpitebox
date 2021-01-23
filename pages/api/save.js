export default async (req, res) => {
  console.log(JSON.parse(req.body))
  res.end(JSON.stringify({
    showCoupon: true,
    message: 'Stare at wall turn and meow stare at wall some more meow again'
  }))
}