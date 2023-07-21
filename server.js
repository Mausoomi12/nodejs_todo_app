import { app } from "./app.js";
import { connectDB } from "./data/database.js";


connectDB();
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST','PUT','DEELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

app.listen(process.env.PORT,()=>{
    console.log(`Server is Working on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`
    );
});