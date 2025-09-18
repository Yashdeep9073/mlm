const { z } = require("zod");

const subscribe = z.object({
  email: z.string().email({ message: "Invalid email format" }).optional(),
});

module.exports = { subscribe };
