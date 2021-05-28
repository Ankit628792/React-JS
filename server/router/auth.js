const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('../db/conn')

router.get('/', (req, res) => {
    res.send('hellooooo')
})
const User = require('../model/userSchema');
const Authenticate = require('../middleware/authenticate');
const Comment = require('../model/userComment');

router.post('/signup', async (req, res) => {
    const { fullname, email, password, cpassword } = req.body;
    
    if (!fullname || !email || !password || !cpassword) {
        return res.status(422).json({ error: "Fill all the fields" })
    }
    
    try{
        const userExist = await User.findOne({ email: email });
        if(userExist){
            return res.status(422).json({ error: "Email already exist" })
        }else if(password !== cpassword){
            return res.status(422).json({ error: "Password doesn't matched" })
        }else{
            const userId = new Date().getTime().toString();
            const user = new User({userId, fullname, email, password, cpassword});
            try {
                const userRegister = await user.save()
                res.status(201).json({ message: "user registered successfully" });
            } catch (error) {
                res.status(500).json({ error: 'failed to register' })
            }
        }
    }
    catch (error) {
        console.log(error)
    }
})

router.post('/signin', async (req, res) => {
    const {email,password } = req.body;
    
    if (!email || !password) {
        return res.status(422).json({ error: "Fill all the fields" })
    }

    try {
        const userLogin = await User.findOne({email: email})
        // console.log('user login' + userLogin)
        if(userLogin){
        const isMatch = await bcrypt.compare(password, userLogin.password)

        const token = await userLogin.generateAuthToken();
        // console.log('login token ' + token)

        res.cookie('jwtoken', token, {
            expires: new Date(Date.now() + 1000*60*10),
            httpOnly: true
        })

        if(!isMatch){
            res.status(400).json({error : 'signin error'})
        }else{
        res.json({message: 'User sign in successfully'})
        }
    }
    } catch (error) {
        console.log(error)
    }
    
})


router.get('/about', Authenticate, (req,res) => {
    res.send(req.rootUser)
})

router.get('/contact', Authenticate, (req,res) => {
    res.send(req.rootUser)
})

router.post('/comments', async (req,res) => {
    const {userId, fullname, email ,comment} = req.body;
    try{    
            const userComment = new Comment({userId, fullname, email, comment});
            const commentRegistered = await userComment.save();        
            res.status(200).send('Message sent')
    }
    catch (error) {
        console.log(error)
    }
})



module.exports = router