const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = mongoose.Schema(
    {
        name:{
            type : String,
            required :true,
        },
        email: {
            type: String,
            required: true,
            unique : true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin:{
            type:Boolean,
            required:true,
            default:false,
        },
        pic: {
            type: String,
            required: true,
            default:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQaw2U3FSUXPcBKMXaZUmfxo8G79gC4vh13A&usqp=CAU"
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10);
    if(this.isModified('password')){
        this.password = bcrypt.hashSync(this.password,salt); 
    }
    next();
});


const user = mongoose.model('User',userSchema);
module.exports = user;