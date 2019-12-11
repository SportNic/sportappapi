const express = require('express')
const router = express.Router()
const User = require('../model/User')

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post('/', async (req, res) => {
    try {
        var user = new User(req.body)
        const newUser = await user.save()
        res.send(newUser)
    } catch (error) {
        res.status(500).send(error);
    }
})

router.get('/:id', async (req, res) => {
    try {
        var user = await User.findById(req.params.id)
        res.send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        var user = await User.findById(req.params.id)
        user.set(req.body)
        var newUser = await user.save()
        res.send(newUser)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        var user = await User.findByIdAndDelete(req.params.id)
        res.send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router