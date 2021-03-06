// Pre-render the app into static HTML.
// run `npm run generate` and then `dist/static` can be served as a static site.

const fs = require('fs')
const path = require('path')

const toAbsolute = (p) => path.resolve(__dirname, p)

const manifest = require('../dist/static/ssr-manifest.json')
const template = fs.readFileSync(toAbsolute('../dist/client/index.html'), 'utf-8')
const { render } = require('../dist/server/entry-server.js')

const routes = require('../src/router/routes.json')

;(async() => {
    // pre-render each route...
    for (const route of routes) {
        const url = route.path
        const html = await render(url, manifest, template)

        const filePath = `../dist/static${url === '/' ? '/index' : url}.html`
        fs.writeFileSync(toAbsolute(filePath), html)
        console.log('pre-rendered:', filePath)
    }

})()