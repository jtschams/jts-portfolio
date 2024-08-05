require('dotenv').config();

module.exports = async function(req, res) {
  try {
    const data = {
      service_id: process.env.SERVICE_ID,
      template_id: process.env.TEMPLATE_ID,
      user_id: process.env.PUBLIC_KEY,
      accessToken: process.env.PRIVATE_KEY,
      template_params: req.body
    }
    const result = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
    if (result.ok) {
      return res.status(200).json('Thank you for your message.  It has been sent to my email.')
    }
    throw result;
  } catch (err) {
    console.error(err)
    res.status(500).json('A server error occurred.')
  }
}