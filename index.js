const express = require('express');
const app = express();
const { parseHTMLtoJSON } = require('./scraper');

app.listen(5000, () => {
  console.log('Listening on port 5000...')
})

app.get('/', (req, res) => {
  res.send('ok');
})

app.get('/scraper', async (req, res) => {
  const jobs = await parseHTMLtoJSON(1);
  res.json(jobs);
})

app.get('/scraper/:page', async (req, res) => {
  const jobs = await parseHTMLtoJSON(req.params.page);
  res.json(jobs);
})