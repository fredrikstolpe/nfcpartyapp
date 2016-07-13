var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  rfid: { type: String, unique: true },
  userInfo: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true }
  },
  credits: {
    casinoCredits: { type: Number },
    drinkTickets: { type: Number },
    dateLastSongAdded: { type: Date }
  },
  created: Date,
  updated: Date
});

// userSchema.methods.test = function () {
//   console.log('test');
// }

// userSchema.statics.findByName = function(name, cb) {
//   return this.find({ name: new RegExp(name, 'i') }, cb);
// };

// userSchema.virtual('name.full').get(function () {
//   return this.name.first + ' ' + this.name.last;
// });

//Tank.update({ _id: id }, { $set: { 'apa.banan': 'large' }}, callback);
// blog.findByIdAndUpdate(entityId, {$set: {'meta.favs': 56}}, function(err, doc) {
//     console.log(doc);
// });
// User.update({ email: 'joe@foo.com' }, { 'profile.name.first': 'Joseph' }, callback)

var User = mongoose.model('User', userSchema);

module.exports = User;