const { adminLogs } = require("../../../services/logger/contextLogger");
// const { PrismaClient } = require("../../../generated/prisma/client");

// const prisma = new PrismaClient();

/**
 * @param {import("fastify").FastifyInstance} fastify
 */

async function readRoutes(fastify) {
  fastify.get("/", async (request, reply) => {

    // const subscribe = await prisma.user

    return reply.status(200).send({
      message: "Subscribe data fetched",
      data: request.body,
    });
  });
}

module.exports = readRoutes;
