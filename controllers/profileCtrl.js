const profile = require('../profile').profiles;
const users = require('../user').users;

const getFriendsProfiles = (req,res,next) =>{
    if (req.session.currentUser){
        let profileFind = profile.filter(profile => req.session.currentUser.friends.includes(profile.name));
        res.send({ 
            currentUser: req.session.currentUser,
            friends:profileFind})
    } 
}


module.exports ={
    getFriendsProfiles
}