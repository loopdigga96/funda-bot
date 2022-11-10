const fs = require('fs');
const cheerio = require('cheerio');
const {exec} = require('child_process');
const TelegramBot = require('node-telegram-bot-api');

const BOT_TOKEN = '...';
const bot = new TelegramBot(BOT_TOKEN, {polling: true});
const CHAT_ID = '-1001526217427';
const EVERY_MIN = 3;

const FUNDA_FILE = './last-funda.txt';
const PARARIUS_FILE = './last-pararius.txt';

bot.on('Bot error', console.error)
bot.sendMessage(CHAT_ID, `Bot Started`);

run();

function fmtDate(date) {
  return date.toLocaleString('en-uk')
}

function run() {
  runFunda();
  runPararius();
  const nextRunMs = EVERY_MIN * 60 * 1000 + ((Math.random() - 0.5) * 20000);
  console.log(`Next run in ${fmtDate(new Date(Date.now() + nextRunMs))} ms`);
  setTimeout(run, nextRunMs);
}

function runFunda() {
  exec('./curl-funda.sh', (err, stdout, stderr) => {
    if (err) {
      console.error(err)
    } else {
      processFunda(stdout);
    }
  });
}

function runPararius() {
  exec('./curl-pararius.sh', (err, stdout, stderr) => {
    if (err) {
      console.error(err)
    } else {
      processPararius(stdout);
    }
  });
}

function processFunda(html) {
  const $ = cheerio.load(html);

  const linkEl = $('.search-results a').first();
  const link = 'https://funda.nl' + linkEl.attr('href');
  checkLast(FUNDA_FILE, link);
}

function processPararius(html) {
  const $ = cheerio.load(html);

  const linkEl = $('.search-list a').first();
  const link = 'https://www.pararius.com' + linkEl.attr('href');
  checkLast(PARARIUS_FILE, link);
}

function checkLast(fileName, newText) {
  const lastLink = fs.readFileSync(fileName, 'utf-8');
  if (lastLink !== newText) {
    fs.writeFileSync(fileName, newText);
    console.log(`NEW [${fmtDate(Date.now())}]: ${newText}`);
    bot.sendMessage(CHAT_ID, `New: ${newText}`);
  }
}
