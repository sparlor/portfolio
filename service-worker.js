"use strict";var precacheConfig=[["/portfolio/index.html","0ce765bda2b20d00a61c7103d01b0599"],["/portfolio/static/css/main.15c8330a.css","b56978d9713b9b4848683e6a3dd7e44e"],["/portfolio/static/js/main.d1c10fce.js","0700c2a0386a3f93b29ecc8b7c30ffb0"],["/portfolio/static/media/apple.6427d8ce.svg","6427d8cedd50963fe7ffcfa725d75ca9"],["/portfolio/static/media/budget.c9b52428.jpg","c9b52428e77a9ae7dd08da5618fa8172"],["/portfolio/static/media/css3.62ff7e6b.svg","62ff7e6b61e8fdbfff7473140afe04a6"],["/portfolio/static/media/html5.b7dd696a.svg","b7dd696acdcdffbe0f5c45847fcbbf42"],["/portfolio/static/media/java.27e864da.svg","27e864da5e6e58b6b326bab47bf13b29"],["/portfolio/static/media/jenkins.ab6a1751.svg","ab6a1751c1ff4779f699265a0d8748d1"],["/portfolio/static/media/js.6fba3f04.svg","6fba3f041c3f37c613bffe8758cfbfee"],["/portfolio/static/media/linux.683fd64c.svg","683fd64c73e6ccedb1018c43bfa8eba4"],["/portfolio/static/media/microsoft.c1492dc8.svg","c1492dc86c1fa55c962ffcd3e9c011db"],["/portfolio/static/media/node.bae3f091.svg","bae3f091c712722637c7a9484ecdb365"],["/portfolio/static/media/profile.eb8bde01.png","eb8bde01b85b7a4331e946a1ca948006"],["/portfolio/static/media/python.5af59229.svg","5af5922920dc09718891fffa3e150b5d"],["/portfolio/static/media/react.c1f41317.svg","c1f4131746d19e4e3bef07114941b5cf"],["/portfolio/static/media/s_wall.569248bf.jpg","569248bf9f09da9c8c099ed4e8178fc0"],["/portfolio/static/media/shopping.f37daafb.jpg","f37daafbbe1301a715e25b4657db516a"],["/portfolio/static/media/vue.748cf839.svg","748cf839af6ba08d55d0735225a4e74d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});