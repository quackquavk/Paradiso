import { Document, Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
  name: { type: String, required: true },
  person: { type: String, required: true },
  time: { type: String, required: true },
  reservationDate: { type: String, required: true },
  message: { type: String, required: false },
  phoneNumber: { type: String, required: true },  
});

const Order = models.Order ||  model("Order", OrderSchema);

export default Order;
