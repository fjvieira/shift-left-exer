const app = require('express')();

app.post('/pm-params', (req, res) => {
  res.json({storedStatus: 'ok'});
});

app.get('/pm-stats', (req, res) => {
  res.json({
    spo2: {
      min: null,
      max: null,
    },
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
