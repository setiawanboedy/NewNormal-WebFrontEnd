const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
app.get('./src/', (req, res) => res.send(index.html));
app.listen(PORT, () => console.log(`app listening on port ${PORT}`))