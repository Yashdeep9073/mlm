// routes/common/index.js
const {
  adminLogs,
  userLogs,
  commonLogs,
  kafkaLogs,
} = require("../../services/logger/contextLogger");

async function commonRoutes(fastify, options) {
  fastify.register(require("./subscribe"), { prefix: "/subscribe" });
}

module.exports = commonRoutes;
