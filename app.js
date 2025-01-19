const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./html/index.html");
const aboutPage = readFileSync("./html/about.html");
const contactPage = readFileSync("./html/contact.html");
const styles = readFileSync("./html/styles/index.css");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  // home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // styles
  else if (url === "/styles/index.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(styles);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(aboutPage);
    res.end();
  } else if (url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(contactPage);
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

server.listen(port, () => console.log("Server is listening on port" + port));
