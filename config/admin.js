module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6ee6167e930f2bd75c1e6a5249ec1480'),
  },
});
