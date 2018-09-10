/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-24c01ea49512daeec5e6.js"
  },
  {
    "url": "app-a4503738fb78f9a638b4.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-70cb2917e3f2572a3b4c.js"
  },
  {
    "url": "index.html",
    "revision": "18d4e7c82738c32b223fe05c1f3770fc"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b6be92048907bdd82f96153e4e97b8f8"
  },
  {
    "url": "component---src-pages-index-js.afbc44c10a08709a47ec.css"
  },
  {
    "url": "1.6c6110562241f735a55c.css"
  },
  {
    "url": "0.351ae5cccabd1477ca5c.css"
  },
  {
    "url": "2-e2d27e4cbb87af0f9acc.js"
  },
  {
    "url": "0-aed771288c4a11df35b1.js"
  },
  {
    "url": "component---src-pages-index-js-328233f5c01157c7ecdf.js"
  },
  {
    "url": "1-48eb9b4e04dd33fad145.js"
  },
  {
    "url": "static/d/197/path---index-6a9-N49wPOCbcwsfzhdppXszIIYZgM.json",
    "revision": "e04cad8eb4d8388ab83ee96813caa8cf"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.json",
    "revision": "b773e901ef06ac93343dc05e67540787"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "87d1f82e193a35d7b785e4cc4bbb2509"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
