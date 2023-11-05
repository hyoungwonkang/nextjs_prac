const fastify = require("fastify")();

fastify.register(require("@fastify/nextjs")).after(() => {
  fastify.next("/");
  fastify.next("/about");
  fastify.next("/greet/:user");
  fastify.getDefaultRoute("contacts", (req, reply) => {
    reply.type("html").send("<h1>Contacts page</h1>");
  });
});

fastify.listen({ port: 3000 }, () => {
  console.log("Server listening on http://localhost:3000");
});
// fastify가 문제가 있는 듯 함. 에러 없는데도 local3000에서 화면 안나 옴
