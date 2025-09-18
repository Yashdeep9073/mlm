async function adminAuthRoutes(fastify, options) {
  fastify.register(require("./login"), { prefix: "/login" });
  fastify.register(require("./register"), { prefix: "/register" });
}

module.exports = adminAuthRoutes;
