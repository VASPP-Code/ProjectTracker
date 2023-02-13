module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6ee6167e930f2bd75c1e6a5249ec1480'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'd9b0d435829343205432729834502735980e7'),
  },
});
