// routes/admin/auth/login.js
const { adminLogs } = require("../../../services/logger/contextLogger");
const { PrismaClient } = require("../../../generated/prisma/client");

const prisma = new PrismaClient();

/**
 * @param {import("fastify").FastifyInstance} fastify
 */

async function adminLoginRoutes(fastify, options) {
  // Login POST handler
  fastify.post("/", async (request, reply) => {
    try {
      adminLogs.info("Admin login attempt");

      reply.status(200).send({
        success: true,
        message: "Login successfully",
      });
    } catch (error) {
      adminLogs.error(`Admin login failed`, { error: error });

      return reply.status(500).send({
        success: false,
        message: "Server error during login. Please try again later.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  });
}

module.exports = adminLoginRoutes;
