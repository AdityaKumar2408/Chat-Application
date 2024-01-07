const express = require("express")
const cors = require("cors");
const { default: axios } = require("axios");
// "test": "echo \"Error: no test specified\" && exit 1"
const app = express()
app.use(express.json());
app.use(cors({origin:true}));

app.post("/authenticate",async(req,res)=>{
    const { username } = req.body;
    try{
        const r= await axios.put(
            "https://api.chatengine.io/users/",
            {username: username, secret: username, first_name: username},
            {headers: {"private-key": "baf9a8ef-0b71-4a21-95e7-ba1d47314e8c"}}
        );
        return res.status(r.status).json(r.data);
    }catch(e){
        return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(3001);

