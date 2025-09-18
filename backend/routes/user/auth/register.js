const { userLogs } = require("../../../services/logger/contextLogger");
const { PrismaClient } = require("../../../generated/prisma/client");

const prisma = new PrismaClient();

/**
 * @param {import("fastify").FastifyInstance} fastify
 */

async function userRegisterRoutes(fastify, options) {
  fastify.post("/", async (request, reply) => {
    try {
      userLogs.info("User Register attempt");

      reply.status(201).send({
        success: true,
        message: "User Register successfully",
      });
    } catch (error) {
      userLogs.error(`User Registration failed`, { error: error });

      return reply.status(500).send({
        success: false,
        message: "Server error during registration. Please try again later.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  });
}

module.exports = userRegisterRoutes;
