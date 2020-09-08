const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\Documents\\GitHub\\alyssaplan.com\\.cache\\dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("D:\\Documents\\GitHub\\alyssaplan.com\\src\\pages\\about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("D:\\Documents\\GitHub\\alyssaplan.com\\src\\pages\\blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("D:\\Documents\\GitHub\\alyssaplan.com\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\Documents\\GitHub\\alyssaplan.com\\src\\pages\\index.js")))
}

