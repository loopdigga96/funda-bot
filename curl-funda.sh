#!/bin/zsh

curl 'https://www.funda.nl/en/huur/amsterdam/1000-2000/sorteer-datum-af/' \
  -H 'authority: www.funda.nl' \
  -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' \
  -H 'accept-language: en-US,en;q=0.9,ru;q=0.8,lt;q=0.7,nl;q=0.6,zh-CN;q=0.5,zh;q=0.4' \
  -H 'cache-control: no-cache' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.funda.nl/en/huur/' \
  -H 'sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: document' \
  -H 'sec-fetch-mode: navigate' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sec-fetch-user: ?1' \
  -H 'upgrade-insecure-requests: 1' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36' \
  --compressed