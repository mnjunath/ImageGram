import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
        validator: function(emailValidator) {
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValidator);
        },
        message: props => `${props.value} is not a valid email!`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
        validator: function(passwordValidator) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(passwordValidator);
        },
        message: props => `${props.value} is not a valid password!`
    }
  },

}, { timestamps: true });

userSchema.pre('save', function modifiedPassword(next) {
  const user = this;
  const SALT = bcrypt.genSaltSync(9);
  const hashPassword = bcrypt.hashSync(user.password, SALT);
  user.password = hashPassword;
  next();
})

const User = mongoose.model("User", userSchema);

export default User;