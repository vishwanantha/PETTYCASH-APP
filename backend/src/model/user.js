import mongoose from "./index.js"
const transactionSchema = new mongoose.Schema({
    name: { type : String, default:"Anonymous"},
    type: { type : String, default:"Investment"},
    amount: { type : Number},
    date: { type : Date, default : Date.now}
})

const userModel = mongoose.model('trans', transactionSchema)



export default userModel