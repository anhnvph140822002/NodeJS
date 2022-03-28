import req from 'express/lib/request';
import User from '../models/user';


export const register = async (req, res) => {
    const {mane, meial, password} = req.body;
    try {
        const exisUser = await User.findOne({email}). exec();
        if (exisUser) {
            res.status(400).json({
                message: "tk đá có"
            })
        }
        const user = await new User({email, name, password}).save();

        res.json({
            user: {
                id: user.id,
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
export const login = async (req, res) => {
    
}