const axios = require('axios');
const cheerio = require('cheerio');

const URL = 'https://www.loker.id/cari-lowongan-kerja/page';

const loadHTMLFromURL = async url => {

}

const parseHTMLtoJSON = async page => {
  // 1. Title
  // 2. Company Name
  // 3. Location
  // 4. Job Type
  // 5. Link
  // 6. Id
}

module.exports = { parseHTMLtoJSON }