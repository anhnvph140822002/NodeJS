import User from '../models/user';
import jwt from 'jsonwebtoken'

export const signup = async (req, res) => {
    const {name, email, password} = req.body;
    // console.log(req.body)
    try {
        const exisUser = await User.findOne({email}).exec();
        if (exisUser) {
            return res.status(400).json({
                message: "tk đá có"
            })
        }
        const user = await new User({name, email, password}).save();
        console.log(user)
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        });
    } catch (error) {
        res.status(400).json({
            message: "đky thất bại"
        })
    }
}
export const signin = async (req, res) => {
    const {email,password} = req.body
    //console.log(req.body)
    try {
        const user = await User.findOne({email}).exec()
        if(!user){
            console.log(user);
            return res.status(400).json({
                
                message:"User khong ton tai"
            })
        }
        if(!user.authenticate(password)){
            return res.status(400).json({
                message:"Mat khau khong dung"
            })
        }
        const token = jwt.sign({_id: user._id}, "123456", { expiresIn: '1h'})
        res.json({
            user:{
                token,
                _id:user._id,
                email:user.email,
                name:user.name
            }
            
        })
    } catch (error) {
        res.status(400).json({
            message: "Đăng nhập thất bại"
        })
    }
}