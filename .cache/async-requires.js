// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-cat-2-js": () => import("./../../../src/pages/cat2.js" /* webpackChunkName: "component---src-pages-cat-2-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-single-page-js": () => import("./../../../src/pages/single-page.js" /* webpackChunkName: "component---src-pages-single-page-js" */),
  "component---src-templates-2-ndcat-post-js": () => import("./../../../src/templates/2ndcat-post.js" /* webpackChunkName: "component---src-templates-2-ndcat-post-js" */),
  "component---src-templates-blog-post-js": () => import("./../../../src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */)
}

