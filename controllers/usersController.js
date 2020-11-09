const datas = require('../users.json')

exports.getUsers = (req,res) => {
    console.log('user route');
    res.send(datas)
}

exports.addUser = (req,res) => {
    const data = req.body
    datas.users.push(data)
    console.log('new data added');
    res.send('data added success')
}