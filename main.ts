import * as express from 'express'
import * as bodyParser from 'body-parser';
import 'reflect-metadata'
import {
  AppDataSource
} from './data-source'
import {Tblpost} from './entities/Post.entities';

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.get("/",(req,res)=>{
  res.send("run success")
})
app.post("/add",async(req,res)=>{
      let {id,nama,umur} = req.body
      const newPost = new Tblpost()
      newPost.nama = nama
      newPost.umur = umur
      newPost.id =  id
      try{
        await AppDataSource.manager.save(newPost)
        res.send({"status":"tersimpan","data":newPost})
      }catch(err){
        console.log(err)
      }
})

app.listen(3000,()=>console.log("server run :3000"))
