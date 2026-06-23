const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/order") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(JSON.stringify({ message: "Hello from pure node Server" }));
  }

  if (req.method === "POST" && req.url === "/order") {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => {
      const order = JSON.parse(data);

      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          status: "received",
          order,
        }),
      );
    });
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
