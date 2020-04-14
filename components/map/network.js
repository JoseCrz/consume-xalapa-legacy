const express = require('express')
const response = require('../../network/response')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('map.ejs')
})

module.exports = router