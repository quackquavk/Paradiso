import { Schema, model, models } from "mongoose";

const EmailSchema = new Schema({
  email: { type: String, require: true },
});
const Email = models.Email || model("Email", EmailSchema);
export default Email;
