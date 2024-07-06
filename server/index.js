import express from 'express';
import producsRouter from './Routes/Products.route.js'
import users from "./Routes/usersroute.js"
import cors from 'cors'


const app = express();
app.use(cors({
  origin:"*",
  methods:['POST','GET','DELETE','PATCH','PUT']
}))
app.use(express.urlencoded({extended:true}))
app.use(express.json()); 
app.use("/", producsRouter)
app.use("/api/users",users) 


app.listen(4148, () => {
  console.log('server running');
});