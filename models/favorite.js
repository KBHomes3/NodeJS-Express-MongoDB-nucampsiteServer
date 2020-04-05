const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');
const Campsite = require('./campsite')

// require('mongoose-currency').loadType(mongoose);
// const Currency = mongoose.Types.Currency;


const favoriteSchema = new Schema({
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    campsites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campsite'
    }]  
},
   {timestamps: true}
);

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;