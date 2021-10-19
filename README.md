# Installing
```
npm install
```
# Usage
## Development
```
npm run watch
```
## Production
```
npm run build
```
## Tampermonkey
Paste it into new tampermonkey script.
```js
// ==UserScript==
// @name         margo(addon_name): si/ni
// @version      0.1
// @description  Default template
// @author       Patix0331
// @match        https://*.margonem.pl/
// @require      file:/// absolue path to generated dist/main.js
// @grant        unsafeWindow
// @grant        GM_log
// ==/UserScript==
```
## New user script
Create new dir in `addons` folder. Then export main function. Import it and run inner `source` folder `./addons/main.ts`.