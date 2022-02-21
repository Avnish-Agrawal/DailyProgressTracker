const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    day:{
        type: Number,
        default:0
    },
    description:{
        type: String,
        required: true, 
    },
    theme:{
        type: String,
        ref:'user'
    },
    date:{
        type: Date,
        default: Date.now
    },
    resource:{
        type:String
    }
  });

  module.exports = mongoose.model('newnotes', NotesSchema);