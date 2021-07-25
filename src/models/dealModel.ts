import mongoose from "mongoose";

const Schema = mongoose.Schema;

const schema = new Schema({
    name:{
        type:String,
        require:true,
    },
    title:{
        type:String,
        require:true,
    },
    person_name:{
        type:String,
        require:true,
    },
    org_name:{
        type:String,
        require:true,
    },
    value:{
        type:Number,
        require:true
    },
    add_time:{
        type:String,
        require:true,
    },
    active:{
        type:Boolean,
        require:true,
    },
    status:{
        type:String,
        require:true,
    },
    cc_email:{
        type:String,
        require:true,
    }
})

const DealSchema = mongoose.model('deal',schema);
export {DealSchema};