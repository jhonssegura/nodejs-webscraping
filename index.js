const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request');

request("https://www.reddit.com", (err, res, body) => {
  if (!err && res.statusCode == 200) {
    let $ = cheerio.load(body);
    $('a.title', '#siteTable').each(function() {
      var urlImg = $(this).attr('href');
      console.log(urlImg);
    });
  }
});