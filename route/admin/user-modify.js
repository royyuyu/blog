const { User } = require('../../model/user');
const bcrypt = require('bcrypt');
module.exports = async (req, res, next) => {
    //接收客户端传递过来的请求参数
    const body = req.body;
    //即将要修改的用户id
    const id = req.query.id;

    let user = await User.findOne({ _id: id });
    //密码比对
    //(明文密码，密文密码) 返回布尔值
    const isValid = await bcrypt.compare(req.body.password, user.password);
    //密码比对成功
    if (isValid) {

    } else {
        //密码比对失败
        let obj = { path: '/admin/user-edit', message: '密码比对失败，不能进行用户信息修改', id: id }
        next(JSON.stringify(obj));
    }


}