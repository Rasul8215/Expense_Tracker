const mongoose=require("mongoose")

const expenseSchema=new mongoose.Schema({
    amount:{type:Number, required:true},
    title:{type:String, required:true,minLength:3, maxLength:20},
    description:{type:String, maxLength:100},
    date:{type:Date, default: ()=> new Date() },
    user:{type:mongoose.Types.ObjectId, ref: "User",required:true,},
    categories:[{type:mongoose.Types.ObjectId, ref: "Category"}],
    status:{type:String, enum:["paid","unpaid","partially paid","unknown"]},
    created_at:{type:Date, default: ()=> new Date(), immutable: true},
    updated_at:{type:Date, default: ()=> new Date()}
    
})

const Expense=new mongoose.model("Expense", expenseSchema)

module.exports=Expense;