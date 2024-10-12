const mongoose = require('mongoose');
const JobSchema = new mongoose.Schema({
    title : String,
    description : String,
    applicationLink : String,
    postedDate : {
      type : Date,
      default : Date.now
    }
    }
);

module.exports = mongoose.model( 'Job' , JobSchema);