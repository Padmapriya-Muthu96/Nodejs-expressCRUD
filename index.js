let express=require('express')
let app=express()
const indexRouter=require('./routes/index')
const userRouter=require('./routes/users')
const dashboardRouter=require('./routes/dashboard')
const PORT = process.env.PORT || 8000



app.use(express.json())
app.use('/',indexRouter)
app.use('/users',userRouter)
app.use('/dashboard',dashboardRouter)

app.listen(8000,()=>console.log('App was listening in port 8000'))