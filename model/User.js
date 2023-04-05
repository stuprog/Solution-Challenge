const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({ // mongo works with schema (entity) 

  name: {
    type: String,
  },
  email: {
    type: String, 
  },
  phone: {
    type: String, 
  },
  password: {
    type: String, 
  },
  role: {
    type: String,
    default:'user'
  }
}, {
    collection: 'user'
  })

  const User = mongoose.model('User', userSchema)
module.exports = User