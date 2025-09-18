async function userRoutes(fastify, options) {
  fastify.register(require("./auth/index"), { prefix: "/auth" });
}

module.exports = userRoutes;
