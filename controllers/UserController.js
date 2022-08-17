module.exports = {
    //get all user
    index(req, res) {
        res.send("Get all users");
    },
    // create user
    create(req, res) {
        res.send(`Create user: ${JSON.stringify(req.body)}`)
    },
    // edit user, susspend active
    put(req, res) {
        res.send(`Update user ${req.params.userId} : ${JSON.stringify(req.body)}`)
    },
    // delete user
    remove(req,res){
        res.send(`Delete user : ${req.params.userId}`)
    },
    // show user
    show(req,res){
        res.send(`Show user: ${req.params.userId}`)
    }

}