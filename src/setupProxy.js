const { createProxyMiddleware: proxy } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    proxy({
      target: "https://api.openai.com/v1/completions",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
