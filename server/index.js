import express from 'express';
import producsRouter from './Routes/Products.route.js'


const app = express();

app.use(express.json()); 
app.use("/", producsRouter) 


app.listen(4148, () => {
  console.log('server running');
});