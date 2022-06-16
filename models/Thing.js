const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  // champ _id automatiquent généré par Moongoose
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    userId: { type: String, required: true },
    // likes: { type: String, required: false },
    // dislikes: { type: String, required: false },
    // usersLiked: { type: Array, required: false },
    // usersDisliked: { type: Array, required: false },
  });

module.exports = mongoose.model('Thing', thingSchema);
