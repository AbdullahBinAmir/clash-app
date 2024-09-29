import express,{Application,Request,Response} from 'express'
import "dotenv/config"
const app:Application = express()
const PORT = process.env.PORT || 7000
import path from 'path'
import { fileURLToPath } from 'url'
import ejs from "ejs"
import { sendEmail } from './config/config.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set("view engine","ejs")
app.set("views",path.resolve(__dirname,"./views"))

app.get("/",async(req:Request,res:Response)=>{
    const html = await ejs.renderFile(__dirname+`/views/emails/welcome.ejs`,{name:"ok"})
    await sendEmail("ok@gmail.com","test mail",html)
    res.json({msg:"welcome"})
})

app.listen(PORT,()=>console.log(`Server is running on PORT ${PORT}`))
