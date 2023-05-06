const express = require('express');
const app = express();
const port = 3000
const connectToMongo = require('./db');
connectToMongo()

app.use(express.json())
// app.get('/', (req, res) => {
//   res.send('Hello !')
// })


app.use('/api/auth',require('./routes/auth'))
// app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
