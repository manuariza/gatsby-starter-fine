const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-cat-2-js": hot(preferDefault(require("/Users/mga/Sites/gatsby-starter-fine/src/pages/cat2.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/mga/Sites/gatsby-starter-fine/src/pages/index.js"))),
  "component---src-pages-single-page-js": hot(preferDefault(require("/Users/mga/Sites/gatsby-starter-fine/src/pages/single-page.js"))),
  "component---src-templates-2-ndcat-post-js": hot(preferDefault(require("/Users/mga/Sites/gatsby-starter-fine/src/templates/2ndcat-post.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/mga/Sites/gatsby-starter-fine/src/templates/blog-post.js")))
}

