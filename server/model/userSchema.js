const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    userId:{
        type: String,
    },
    fullname : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    phone : {
        type: Number,
    },
    work : {
        type: String,
    },
    password : {
        type: String,
        required: true
    },
    cpassword : {
        type: String,
        required: true
    },
    Tokens: [{
        token: {
            type: String,
            required: true
        }
    }
    ]
})

userSchema.pre('save', async function(next) {
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12)
        this.cpassword = await bcrypt.hash(this.cpassword, 12)
    }
    next();
})

userSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY)
        this.Tokens = this.Tokens.concat({token: token})
        // console.log('auth token  ' + this.Tokens)
        await this.save();
        return token;
    } catch (error) {
        console.log(error)
    }
}

const User = mongoose.model('USER', userSchema)

module.exports = User ;