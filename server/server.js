const express = require('express');
const path = require('path');
const sendEmail = require('./utils/sendEmail')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/message', sendEmail)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
