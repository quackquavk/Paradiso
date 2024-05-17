"use client";
import React, { FormEvent, useState } from "react";
import { IoPersonOutline, IoTimeOutline } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";
import { handleSubmitOrder } from "@/lib/actions/order.actions";
import { orderParams } from "@/types";

const Reservation = () => {
  const today = new Date().toISOString().split("T")[0];
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const [tableText, settableText] = useState("Book A Table");
  const [date, setDate] = useState<string>();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const formDataObject: orderParams = {
      name: formData.get("name") as string,
      person: formData.get("person") as string,
      time: formData.get("time") as string,
      reservationDate: formData.get("reservation-date") as string,
      message: formData.get("message") as string,
      phoneNumber: formData.get("phoneNumber") as string,
    };
    try {
      await handleSubmitOrder(formDataObject);
      (event.target as HTMLFormElement).reset();
      settableText("Table Booked Successfully");
      alert("Table booked successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const originalDate = new Date(today);
  originalDate.setDate(originalDate.getDate() + 60);

  const newDate = originalDate.toISOString().split("T")[0];
  // Calculate the next half-hour interval
  let nextHour = currentHour;
  let nextMinute = currentMinute + 30;
  if (nextMinute >= 60) {
    nextHour++;
    nextMinute -= 60;
  }

  // Create a Date object for the first day of next month
  const generateOptions = () => {
    const options = [];

    if (date === today) {
      for (let i = nextHour; i < 24; i++) {
        for (let j = i === nextHour ? nextMinute : 0; j < 60; j += 30) {
          const hour = i.toString().padStart(2, "0"); // Ensure two-digit format
          const minute = j.toString().padStart(2, "0"); // Ensure two-digit format
          options.push(
            <option key={`${hour}:${minute}`} value={`${hour}:${minute}`}>
              {hour} : {minute}
            </option>
          );
        }
      }

      // Return options starting from 2nd slot (considering potential nextHour, nextMinute)
      return options.splice(2, options.length);
    } else {
      // Generate options for any other date, starting from 00:00 to 23:30
      for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 60; j += 30) {
          const hour = i.toString().padStart(2, "0"); // Ensure two-digit format
          const minute = j.toString().padStart(2, "0"); // Ensure two-digit format
          options.push(
            <option key={`${hour}:${minute}`} value={`${hour}:${minute}`}>
              {hour} : {minute}
            </option>
          );
        }
      }

      return options;
    }
  };

  return (
    <section className="reservation" id="table">
      <div className="container">
        <div className="form reservation-form bg-black-10">
          <form action="" className="form-left" onSubmit={handleSubmit}>
            <h2 className="headline-1 text-center">Online Reservation</h2>

            <p className="form-text text-center">
              Booking request{" "}
              <a href="tel:+977061-451675" className="link">
                +977061-451675{" "}
              </a>
              or fill out the order form
            </p>

            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input-field"
                required={true}
              />

              <input
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                className="input-field"
                required={true}
              />
            </div>

            <div className="input-wrapper">
              <div className="icon-wrapper">
                <IoPersonOutline className="ion-icon" />
                <select name="person" className="input-field" required={true}>
                  <option value="1-person">1 Person</option>
                  <option value="2-person">2 Persons</option>
                  <option value="3-person">3 Persons</option>
                  <option value="4-person">4 Persons</option>
                </select>
                <BiChevronDown className="ion-icon" />
              </div>

              <div className="icon-wrapper">
                <input
                  type="date"
                  name="reservation-date"
                  className="input-field"
                  required={true}
                  min={today}
                  max={newDate}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>

              <div className="icon-wrapper">
                <IoTimeOutline className="ion-icon" />
                <select name="time" className="input-field" required={true}>
                  {generateOptions()}
                </select>
                <BiChevronDown className="ion-icon" />
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Message"
              className="input-field"
            ></textarea>

            <button type="submit" className="btn btn-secondary">
              <span className="text text-1">{tableText}</span>

              <span className="text text-2" aria-hidden="true">
                Book A Table
              </span>
            </button>
          </form>

          <div
            className="form-right text-center"
            style={{
              backgroundImage: "url('/images/form-pattern.png')",
            }}
          >
            <h2 className="headline-1 text-center">Contact Us</h2>

            <p className="contact-label">Booking Request</p>

            <a
              href="tel:+977061-451675"
              className="body-1 contact-number hover-underline"
            >
              +88-123-123456
            </a>

            <div className="separator"></div>

            <p className="contact-label">Location</p>

            <address className="body-4">
              Restaurant St, Delicious City, <br />
              London 9578, UK
            </address>

            <p className="contact-label">Lunch Time</p>

            <p className="body-4">
              Monday to Sunday <br />
              11.00 am - 2.30pm
            </p>

            <p className="contact-label">Dinner Time</p>

            <p className="body-4">
              Monday to Sunday <br />
              05.00 pm - 10.00pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
