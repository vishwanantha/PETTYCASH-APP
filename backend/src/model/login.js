import mongoose from "./index.js";


const categoriesSchema =new mongoose.Schema({
    type: { type : String, default: "Investment"},
    color : {type: String, default: '#FCBE44'}
})




const Categories = mongoose.model('catea',categoriesSchema );

export default  Categories
   
