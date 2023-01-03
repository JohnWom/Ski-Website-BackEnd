const axios = require('axios');
const cheerio = require('cheerio');
const { response, json } = require('express');
console.log("Scraping ...");

const toBeScraped = require('./config/resorts.json');

const resorts = Object.keys(toBeScraped);
resorts.forEach((resort) => {
    axios(toBeScraped[resort])
        .then(response => {
            const html = response.data;
            const $ = cheerio.load(html);

            let Conditions = [];

            $(".terrain_summary__circle").each((idx, ref) => {
                const elem = $(ref);
                
                const package = {
                    type: elem.parent().attr("data-terrain-status-id"),
                    num: elem.attr("data-open"),
                    dom: elem.attr("data-total")
                };

                Conditions.push(package);
            });
            console.log(`------${resort}-----`);
            console.log(Conditions);
        } )
        .catch(console.error);
})
