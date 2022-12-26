const express = require('express')
const isAuth = require('../middleware/auth')
const { login, register, logout } = require('../controllers/controller')
const router = express.Router()


//login
router.get('/login', (req, res) => {
    const user = req.session.isAuth
    user && res.redirect('/dashboard')
    !user && res.render('login')
})
router.post('/login', login)

//register
router.get('/register', (req, res) => {
    const user = req.session.isAuth
    user && res.redirect('/dashboard')
    !user && res.render('register')
})
router.post('/register', register)

//dashboard
router.get('/dashboard', isAuth, (req, res) => {
    res.render('dashboard')
})

//logout
router.post('/logout', logout)

module.exports = router;