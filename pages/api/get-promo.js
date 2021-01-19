export default async (req, res) => {
  res.end(JSON.stringify({
    showCoupon: true,
    message: 'do not try to mix old food with new one to fool me'
  }))
}