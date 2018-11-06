const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const proxy = require("http-proxy-middleware");
const compression = require("compression");
const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(compression());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.redirect('movies/1');
})

app.get('/movies/:id',  (req, res) => {
  const reactPath = path.join(__dirname, "./public/index.html");
  res.sendFile(reactPath);
});

app.use('/api/movies/:genre/relatedmovies', 
  proxy({
    target: 'http://localhost:3003',
    changeOrigin: true
  })
)

app.use('/api/movies/:movieid/rating',
  proxy({
    target: 'http://localhost:3013',
    changeOrigin: true
  })
)

app.use('/api/movies/:movieid/reviews',
  proxy({
    target: 'http://localhost:3013',
    changeOrigin: true
  })
)

app.use('/api/movies/:movieid/summary', 
  proxy({
    target: 'http://localhost:3007',
    changeOrigin: true
  })
)

app.use('/api/moviesbyid/:movieid/:date/:location',
  proxy({
    target: 'http://localhost:3002',
    changeOrigin: true
  })
)

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});