const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


// Route qui retourne un 200 OK classique
app.get('/ok', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

res.status(200).send('OK');
});

// Route qui exit l'application
app.get('/exit', (req, res) => {
res.status(200).send('Exiting...');
process.exit(0);
});

// Route qui utilise le CPU au maximum (pour tester le scaling horizontal)
app.get('/cpu-intensive', (req, res) => {
const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const result = fibonacci(40).toString();
res.status(200).send(result);
});


app.listen(3000, () => {
  console.log('Server listening at http://localhost:3000');
});