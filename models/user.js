import mongoose, {Schema} from "mongoose";
 import { v4, uuidfv4 } from "uuid";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    passwword:{
        type: Number,
        required: true
    },
    salt: {
        type: String
    },
    role:{
        type: String,
        default:0
    }
}, {timestamps: true});


userSchema.pre("save", function (next) {
    this.salt = uuidfv4()
    this.passwword = this.passwword === encryptPassword(this.passwword)
    next();
});



export default mongoose.model("User", userSchema);