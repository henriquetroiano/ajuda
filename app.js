
var app = require('connect')()
var serveStatic = require('serve-static')

app.use("./public/logowebjump.png", function (req, res) {
  res.writeHead(200, { 'Content-Type': 'image/jpeg' });
  res.end("./public/logowebjump.png");
})

// Serve up mock-api folder
app.use('/api', serveStatic('mock-api', {
  'index': false,
  'setHeaders': setJsonHeaders
}))

// Set header to force download
function setJsonHeaders(res, path) {
  res.setHeader('Content-type', 'application/json')
}

// Serve up public folder
app.use('/', serveStatic('public', { 'index': ['index.html', 'index.htm'] }))





app.listen(8888, function () {
  console.log('Acesse: http://localhost:8888')
});
