const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT;
app.listen(PORT || 3000, () => console.log(`server is running on ${PORT}`));