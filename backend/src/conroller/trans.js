import userModel from "../model/user.js";



const trans=(req,res)=>{
    userModel.create({
    
    name:req.body.name,
    type:req.body.type,
    amount:req.body.amount,
    date: req.body.date 

    }).then(result=>{
        return res.json(result)

    }).catch(err=>console.log(err))

}
const gettran=(req,res)=>{
    userModel.find({})
    .then(r=>{
        return res.json(r)
    }).catch(err=>res.json(err))
}
const delettran=(req,res)=>{
    userModel.deleteOne({})
    .then(re=>{
        return res.json(re)
    }).catch(err=>res.json(err))
}
const total=(req, res)=>{

    userModel.aggregate([
        {
            $lookup : {
                from: "categories",
                localField: 'type',
                foreignField: "type",
                as: "categories_info"
            }
        }
       
    ]).then(result => {
        let data = result.map(v => Object.assign({}, { _id: v._id, name: v.name, type: v.type, amount: v.amount, color: v.categories_info['color']}));
        res.json(data);
    }).catch(error => {
        res.status(400).json("Looup Collection Error");
    })

}

export default {trans,gettran,delettran,total}