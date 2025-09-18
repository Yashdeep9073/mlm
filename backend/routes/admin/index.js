// routes/admin/index.js

async function adminRoutes(fastify, options) {
  fastify.register(require("./auth/index"), { prefix: "/auth" });
  fastify.register(require("./subscribe/index"), { prefix: "/subscribe" });
}

module.exports = adminRoutes;
