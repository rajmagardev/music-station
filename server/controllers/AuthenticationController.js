const User = require('../model/User')

// async function add(req, res) {
//     let addUser = new User({
//         email: req.body.email,
//         password: req.body.password
//     })
//     await addUser.save((err, result) => {
//         if(err) {
//             res.send({
//                 message: 'Error...',
//                 data: err
//             })
//         } else {
//             res.send({
//                 message: 'Added Successfully',
//                 data: result
//             })
//         }
//     })
// }

function get(req, res) {
    User.find({},(err, result) => {
        if(err) {
            res.send({
                message: 'Error...',
                data: err
            })
        } else {
            res.send({
                message: 'All users',
                data: result
            })
        }
    })
}

function update(req, res) {
    User.findOneAndUpdate({'_id': req.body._id}, {
        email: req.body.email,
        password: req.body.password
    },
    {
        new: true
    }).exec((err, result) => {
        if(err) {
            res.send({
                message: 'Error...',
                data: err
            })
        } else {
            res.send({
                message: 'All users',
                data: result
            })
        }
    })
}

function deleteUser(req, res) {
    User.find({'_id': req.body._id}).remove().exec((err, result) => {
        if(err) {
            res.send({
                message: 'Error...',
                data: err
            })
        } else {
            res.send({
                message: 'User deleted'
            })
        }
    })
}

module.exports = {
    async add (req, res) {
        try {
            let addUser = new User({
                email: req.body.email,
                password: req.body.password
            })
            let userAdd = await addUser.save() 
            console.log('add', userAdd)
            res.send({
                message: 'User Added',
                data: userAdd
            })
        } catch (error) {
            res.status(400).send({
                message: 'This email is already exist.',
                data: error
            })
        }
        
        
    },
    async get(req, res) {
        try {
            let get = await User.find({})
            res.send({
                message: 'All users list',
                data: get
            })
        } catch (error) {
            res.status(400).send({
                message: 'User not found...',
                data: error
            })
        }
    },
    update,
    deleteUser
}