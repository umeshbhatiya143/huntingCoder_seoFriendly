import * as fs from 'fs'

export default async function handler(req, res){
    if(req.method == 'POST'){
        let data = await fs.promises.readdir("contactData")
        fs.promises.writeFile(`contactData/${data.length+1}.json`, JSON.stringify(req.body))
        res.status(200).send("data is saved succesfully");
    }
    else{
        res.status(500).send("Internal server error")
    }
}