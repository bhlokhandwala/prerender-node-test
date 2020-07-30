const prerender = require('prerender');
const prerender_memory_cache = require('prerender-memory-cache')
const server = prerender();
server.use(prerender_memory_cache);
server.use(prerender.sendPrerenderHeader());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());
server.start();