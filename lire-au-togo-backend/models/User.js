import mongoose from'mongoose';

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
  },
  facebookId: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    default: 'user', // Default role is 'user', can be changed to 'admin'
  },
});

const User = mongoose.model('User', UserSchema);

export default User;
