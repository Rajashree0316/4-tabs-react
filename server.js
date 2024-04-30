const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Define a proxy route to forward requests to the API server
app.use('/api', createProxyMiddleware({
  target: 'https://www.course-api.com/',
  changeOrigin: true,
  // Additional options, if needed
}));

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Proxy server is running.'); // Send a response for the root path
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
