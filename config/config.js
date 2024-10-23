require("dotenv").config()

const dev={

    // here app is for local connect

    app:{
        port:process.env.PORT || 4000,
    },

    // here db for mongo Atlas DB connect
    db:{
        url:process.env.DB_URL || "mongodb://localhost:27017/userDemoDB",
    },
}

module.exports=dev;