/**
 * @param {import("fastify").FastifyInstance} fastify
 */

async function subscribeRoutes(fastify, options) {
  fastify.register(require("./create"), { prefix: "/create" });
}

module.exports = subscribeRoutes;
