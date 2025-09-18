const { commonLogs } = require("../../../services/logger/contextLogger");
const { subscribe } = require("../../../schemas/common/subscribe/add.schema");
// const { PrismaClient } = require("../../../generated/prisma/client");

// const prisma = new PrismaClient();

/**
 * @param {import("fastify").FastifyInstance} fastify
 */

async function createRoutes(fastify) {
  fastify.post("/", async (request, reply) => {
    try {
      const validData = subscribe.safeParse(request.body);

      if (validData.error) {
        commonLogs.error("Subscribe validation failed", {
          error: validData.error.message,
        });

        return reply.status(400).send({
          success: false,
          message: "Invalid input. Please check the provided data.",
          details: validData.error.issues, // more helpful than just message
        });
      }
      // Example DB insert (you can uncomment when ready)
      // const newSubscriber = await prisma.subscriber.create({
      //   data: validData.data,
      // });

      // commonLogs.info("New subscription created", {
      //   email: validData.data?.email,
      // });

      return reply.status(201).send({
        success: true,
        message: "Subscribed successfully",
      });
    } catch (error) {
      commonLogs.error("Database error during subscription", { error: error });

      return reply.status(500).send({
        success: false,
        message:
          "An unexpected error occurred while saving your subscription. Please try again later.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  });
}

module.exports = createRoutes;
