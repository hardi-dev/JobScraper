const axios = require('axios');
const cheerio = require('cheerio');

const URL = 'https://www.loker.id/cari-lowongan-kerja/page';

const loadHTMLFromURL = async url => {
  const response = await axios.get(url);
  return cheerio.load(response.data);
}

const parseHTMLtoJSON = async page => {
  const $ = await loadHTMLFromURL(`${URL}/${page}`);
  const jobs = $('.job-box');
  let jobsData = [];

  jobs.map((idx, el) => {
    const jobTitle = $('.media-heading.h4', el).text();
    const companyName = $('.col-md-4 .table tbody tr:first-child td:last-child ', el).text();
    const jobLocation = $('.col-md-4 .table tbody tr:nth-child(2) td:last-child ', el).text();
    const jobType = $('.col-md-4 .table tbody tr:nth-child(3) td:last-child ', el).text();
    const jobLink = $('.media-heading.h4 a', el).attr('href');
    const jobID = $(el).attr('id').replace('post-', '');
    jobsData.push({ jobTitle, companyName, jobLocation, jobType, jobLink, jobID });
  })
  return jobsData;
}

module.exports = { parseHTMLtoJSON }