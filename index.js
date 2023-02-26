const stun = require("stun");

// Create a STUN server
const server = stun.createServer();
const PORT_ = process.env.PORT;
// Listen for requests
server.on("request", (req, rinfo) => {
  // Respond with the client's IP address and port number
  server.send(
    Buffer.from(rinfo.address + ":" + rinfo.port),
    rinfo.port,
    rinfo.address,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
});

// Start the server
server.listen(PORT_, () => {
  console.log("STUN server listening on port: " + PORT_);
});
