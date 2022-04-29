import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        },

    }, {
    timestamps: true
})

userSchema.methods.matchPassword = async function (enteredPassword) {   //use a regular function (this binding)
    return await bcrypt.compare(enteredPassword, this.password)        // use 'this' to point to that specific user object
}

//hash the password ( you can do this also in the registerUser controller )
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {    // if there is no password added or modified then move on and hash the given password
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User