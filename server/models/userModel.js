import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    username:{
        type:String,
    },
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true, 
        required:true
    },
    password:{
        type:String,
        required:true,
        default:"password"
    },
    phone:{
        type:String,
    },
    isSuperAdmin:{
        type:Boolean,
        required:true,
        default:false
    },
    isOrganizer:{
        type:Boolean,
        required:true,
        default:false
    },
    // isEmployee:{
    //     type:Boolean,
    //     required:true,
    //     default:false
    // },
},{
    timestamps: true
})

userSchema.methods.passwordVerification = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre(
    'save', 
    async function (next) {
        if(!this.isModified('password')){
            next()
        }

        const salt = await bcrypt.genSalt(7)
        this.password = await bcrypt.hash(this.password, salt)
    }
)

const User = mongoose.model('User', userSchema)

export default User