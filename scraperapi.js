const axios = require('axios');
const cheerio = require('cheerio');
const { response, json } = require('express');
const db = require('./database.js')

console.log("Scraping ...");

// json of all resorts to be scraped
const toBeScraped = require('./config/resorts.json');
const resorts = Object.keys(toBeScraped);

// scrape the websites
resorts.forEach((resort) => {
    axios(toBeScraped[resort][0])
        .then(response => {
            const html = response.data;
            const $ = cheerio.load(html);
            console.log(toBeScraped[resort][1])
            let info = {ResortID: toBeScraped[resort][1]};

            $(".terrain_summary__tab_main__text").each((idx, ref) => {
                const elem = $(ref);
                
                const package = {
                    type: elem.parent().attr("data-terrain-status-id"),
                    num: parseInt(elem.children("div").children(".c118__number1--v1").text()),
                    dom: parseInt(elem.children().children(".c118__number2--v1").text().slice(1))
                };
                if (package.type == 'lifts') {
                    info.LiftsOpen = package.num;
                    info.LiftsTotal = package.dom;
                }

                else if (package.type == 'runs') {
                    info.TrailsOpen = package.num;
                    info.TrailsTotal = package.dom;
                }

                else {
                    console.log(package.num)
                    info.TerrainOpen = package.num || 0;
                }

            });
            console.log(info)
            db.writeCondition(info);


        } )
        .catch(console.error);
});
