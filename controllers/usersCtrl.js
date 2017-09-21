
const users = require('../user').users;


const login = (req,res,next) => {
    let userFind = users.filter(user => user.name === req.body.name)[0];
    if(userFind && req.body.password == userFind.password){
    req.session.currentUser = userFind;
    res.send({userFound: true})
    }
    else{
        res.send({ userFound: false })
    }    
}



module.exports = {
    login
}
