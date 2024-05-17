"use server";

import { orderParams } from "@/types";
import { connectToDatabase } from "../database";
import Order from "../database/models/order.model";
import { handleError } from "@/utils";

export const handleSubmitOrder = async (data: orderParams) => {
  try {
    await connectToDatabase();
    const order = await Order.create({ ...data });
    console.log("Order created successfully:", order);
    return JSON.parse(JSON.stringify(order));
  } catch (error) {
    handleError(error);
  }
};

export const getAllOrders = async () => {
  try {
    await connectToDatabase();

    const orders = await Order.find();
    return JSON.parse(JSON.stringify(orders));
  } catch (error) {
    handleError(error);
  }
};
