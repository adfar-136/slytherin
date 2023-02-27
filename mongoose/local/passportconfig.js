const Localstrategy  = require("passport-local").Strategy
const {Users} = require("./database")

exports.initializePassport =(passport)=>{
    passport.use(
        new Localstrategy(async (username,password,done)=>{
            try {
                const user = await Users.findOne({username})
                if(!user) return done(null,false)
                if(user.password !== password) return done(null,false)
                return done(null,user)
            }
            catch(error){
                return done(error,false)
            }
           
        })
    )

}