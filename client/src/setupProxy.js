const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
      createProxyMiddleware(["/city", , "/weather", "/forecast"], { target: "http://localhost:8080" })
    );
  };