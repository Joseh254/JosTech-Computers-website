import express from 'express';
import producsRouter from './Routes/Products.route.js'
import users from "./Routes/usersroute.js"


const app = express();

app.use(express.json()); 
app.use("/", producsRouter)
app.use("/api/users",users) 


app.listen(4148, () => {
  console.log('server running');
});