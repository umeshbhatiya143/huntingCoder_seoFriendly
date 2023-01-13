// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'

export default async function handler(req, res) {
  //for reading files inside the directory
  
// for work properly we use async 
let data = await fs.promises.readdir("blogData")
data = data.slice(0,parseInt(req.query.count))
let myfile;
let allBlogs = [];
for(let index=0; index<data.length;index++){
  const item = data[index];
  // console.log(item)
  myfile = await fs.promises.readFile(('blogData/' + item), 'utf-8')
  // console.log(myfile)
  allBlogs.push(JSON.parse(myfile))
}
res.status(200).json(allBlogs)

//this wil not work here because jaldi load hone se push nahi huaa

  // fs.readdir("blogData","utf-8", (err,data)=>{
  //   console.log(data)
  //   let allBlogs = [];
  //   data.forEach((item)=>{
  //     console.log(item)
  //     fs.readFile(('blogData/' + item), (d)=>{
  //       allBlogs.push(d)
  //     })
  //   })
  //   res.status(200).json(allBlogs);
  // })
}
