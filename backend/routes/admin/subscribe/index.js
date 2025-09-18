/**
 * @param {import("fastify").FastifyInstance} fastify
 */

async function subscribeRoutes(fastify, options) {
  fastify.register(require("./read"), { prefix: "/read" });
}

module.exports = subscribeRoutes;
