import mongoose, { Schema, Document } from "mongoose";

// Define Mongoose schema
interface User extends Document {
  username: string;
  email: string;
}

const userSchema: Schema<User> = new Schema<User>({
  username: { type: String, required: true },
  email: { type: String, required: true },
});

// Create and export Mongoose model
const UserModel = mongoose.model<User>("User", userSchema);
export default UserModel;
