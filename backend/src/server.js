import express from "express"
import morgan from "morgan"
import "dotenv/config"
import mongoose from "mongoose"
import cors from "cors"

const app = express()


// middlewares
app.use(cors())
app.use(morgan("combined"))

// database connection
mongoose.connect(process.env.DB_CONNECTION,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
.then(()=>console.log('Database connected'))
.catch(err=>console.log(err))

app.use('/app/v1',(req,res)=>{
    res.send('Welcome to Blog backend')
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>console.log(`server listening to ${PORT}`))