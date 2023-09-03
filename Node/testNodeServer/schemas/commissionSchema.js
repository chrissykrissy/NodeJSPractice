const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commissionSchema =  new Schema({
    commissioner: { type: String, required: true },
    description: { type: String, required: true},
    dateCommissioned: { type: Date, required: true},
    contactType: { type: String, require: true},
    contactValue: { type: String, require: true},
    dueDate: { type:  String, required: false },
    paid: { type: Boolean, required: true}
});

module.exports = mongoose.model('Commission', commissionSchema);