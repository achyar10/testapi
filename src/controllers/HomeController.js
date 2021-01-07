
class HomeController {

    index = (req, res) => {
        try {
            return res.json({ status: true, message: 'OK', data: {} })
        } catch (error) {
            console.log(error)
            res.status(500).json({ status: false, message: 'Internal server error!' })
        }
    }

}
export default new HomeController()
