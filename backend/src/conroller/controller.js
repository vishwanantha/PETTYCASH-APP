import Categories from "../model/login.js";

const create = (req,res)=>{
    Categories.create({
        type: "Investment",
        color: "#FCBE44"

    }).then(result=>{
        return res.json(result)

    }).catch(err=>console.log(err))

}
const  get=async(req, res)=>{
    let data = await Categories.find({})

    let filter =data.map(v => Object.assign({}, { type: v.type, color: v.color}));
    return res.json(filter);
}





//(req,res)=>{
   // Categories.find({})
  
   //.then(result=>{
   //     return res.json(result)
   // }).catch(err=>res.json(err))

export default {create,get}


    
