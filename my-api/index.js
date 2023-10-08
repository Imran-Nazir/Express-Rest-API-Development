const app = require("./app");
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})
let port = process.env.RUNNING_PORT || 5000;

app.listen(port, ()=> {
    console.log("This is from env "+ port)
});


