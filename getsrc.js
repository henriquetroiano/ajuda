app.get("/salah.jpg", function (req, res) {
  res.writeHead(200, { 'Content-Type': 'image/jpeg' });
  res.end("salah.jpg");
})