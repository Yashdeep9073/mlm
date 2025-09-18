const { userLogs } = require("../../../services/logger/contextLogger");
const { PrismaClient } = require("../../../generated/prisma/client");

const prisma = new PrismaClient();

/**
 * @param {import("fastify").FastifyInstance} fastify
 */

async function userLoginRoutes(fastify, options) {
  fastify.post("/", async (request, reply) => {
    try {
      userLogs.info("User login attempt");

      reply.status(200).send({
        success: true,
        message: "User Login successfully",
      });
    } catch (error) {
      userLogs.error(`User login failed`, { error: error });

      return reply.status(500).send({
        success: false,
        message: "Server error during login. Please try again later.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  });
}

module.exports = userLoginRoutes;
