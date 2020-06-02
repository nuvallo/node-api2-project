const server = require("./api/server");

const hostName = "127.0.0.1";
const port = 4000;

server.listen(port, () => {
  console.log(`Server listening on ${hostName}:${port}`);
});
