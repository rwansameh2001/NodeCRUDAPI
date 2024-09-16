import express from 'express';
import bodyParses from 'body-parser';
import usersRouter from './routes/users.js'

const app=express();
const PORT=5001;

app.use(bodyParses.json());
app.use('/users',usersRouter)
app.get('/',(req,res)=>{
res.send("hello from homepage");
})
app.listen(PORT,()=>{console.log(`server running on port: http://localhost:${PORT}`)})