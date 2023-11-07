const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post('/api/table', (req, res) => {
  const { data } = req.body;
  // Handle data (add/update/delete) as needed
  console.log(data);
  res.json({ success: true, message: 'Data received successfully' });
});