"use server";

import { emailParams } from "@/types";
import { handleError } from "@/utils";
import { connectToDatabase } from "../database";
import Email from "../database/models/email.model";

export const handleSubmitEmail = async (email: emailParams) => {
  try {
    connectToDatabase();
    const newEmail = await Email.create(email);
    console.log("Email Added Successfully", newEmail);
    return JSON.parse(JSON.stringify(newEmail));
  } catch (error) {
    handleError(error);
  }
};
