import MemberModel from "../models/MemberModel"
import md5 from 'md5'
import jwt from 'jsonwebtoken'

class AuthController {

    login = async (req, res) => {
        const { member_email, member_password } = req.body
        try {
            if (!member_email) return res.status(401).json({ status: false, message: 'Email required!' })
            if (!member_password) return res.status(401).json({ status: false, message: 'Password required!' })
            const check = await MemberModel.findOne({
                member_email,
                member_password: md5(member_password)
            })
            if (check) {
                const payload = {
                    member_email: check.member_email,
                    member_no: check.member_no,
                    member_name: check.member_name
                }
                const token = await jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1d' })
                return res.json({ status: true, message: 'OK', data: { ...payload, token } })
            }
            return res.status(400).json({ status: false, message: 'Email or Password Wrong!' })
        } catch (error) {
            console.log(error)
            res.status(500).json({ status: false, message: 'Internal server error!' })
        }
    }

}
export default new AuthController()