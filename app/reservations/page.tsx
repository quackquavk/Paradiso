"use client";
import React, { useEffect, useState } from "react";
import { getAllOrders } from "@/lib/actions/order.actions";
import { orderParams } from "@/types";
import { Time } from "react-ionicons";
import { connectToDatabase } from "@/lib/database";

interface MyEvent {
  type: string;
  target: HTMLElement;
  currentTarget: HTMLElement;
  // Add other properties based on the event type
}
const FilteredTable = () => {
  const [orders, setOrders] = useState<orderParams[]>([]);
  const [currentOrders, setCurrentOrders] = useState<orderParams[]>(orders);

  useEffect(() => {
    const fetchOrders = async () => {
      connectToDatabase('evently')
      try {
        const ordersData = await getAllOrders();
        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    const dateFilter = document.getElementById("date");
    const timeFilter = document.getElementById("time");
    const table = document.getElementById("purifierTable");
    const rows = table?.getElementsByTagName("tr");
    dateFilter?.addEventListener("change", filterTable);
    timeFilter?.addEventListener("change", filterTable);
    // Filter table based on selected options
    function filterTable() {
      const selectedDate = (dateFilter as HTMLSelectElement | null)?.value;
      const selectedTime = (timeFilter as HTMLSelectElement | null)?.value;
      for (let i = 1; i < (rows?.length ?? 0); i++) {
        const row = rows![i];
        const date = row.getElementsByTagName("td")[1].textContent;
        const time = row.getElementsByTagName("td")[2]?.textContent;
        if (date && time) {
          let dateMatch = true;
          let timeMatch = true;
          if (selectedDate && date !== selectedDate) {
            dateMatch = false;
          }
          if (selectedTime) {
            const [start, end] = selectedTime.split("-");
            const [rowStart, rowEnd] = time.split("-");
            if (rowEnd) {
              timeMatch = rowStart >= start && rowEnd <= end;
            } else {
              timeMatch = time >= start && time <= end;
            }
          }
          if (dateMatch && timeMatch) {
            row.style.display = "";
          } else {
            row.style.display = "none";
          }
        }
      }
    }
    return () => {
      dateFilter?.removeEventListener("change", filterTable);
      timeFilter?.removeEventListener("change", filterTable);
    };
  }, []);

  const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;

    const filteredOrders = orders.filter(
      (order) => order.reservationDate === selectedDate
    );
    setCurrentOrders(filteredOrders);
  };
  const timeChangeHandler = (time: string) => {
    
  };

  return (
    <main className="h-screen bg-black px-10 flex flex-col items-center w-full my-10">
      <h1 className="text-[30px] text-white ">Reservations</h1>
      <div className="mt-5">
        <div className="flex flex-row justify-center gap-5 items-center">
          <div>
            <label htmlFor="date" className="text-white">
              Date:
            </label>
            <input
              className="bg-white text-black rounded-md text-[18px] px-4 py-2 "
              type="date"
              id="date"
              onChange={(event) => {
                console.log(event.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="time" className="text-white">
              Time:
            </label>
            <select
              id="time"
              className="bg-white text-black rounded-md text-[20px] px-3 py-3"
            >
              <option value="">All</option>
              <option value="0-100">6pm - 12am</option>
              <option value="100-200">12am - 6am</option>
              <option value="200-500">6am - 12pm</option>
              <option value="500">12pm - 6pm</option>
            </select>
          </div>
        </div>

        <table
          id="purifierTable"
          className="min-w-[90vw] mt-5 border-collapse border border-gray-300 "
        >
          <thead>
            <tr className="bg-gray-200 text-gray-800">
              <th className="p-2">Name</th>
              <th className="p-2">Table</th>
              <th className="p-2">Time</th>
              <th className="p-2">Phone Number</th>
              <th className="p-2">People</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order: orderParams, index) => (
              <tr key={index} className="border-t border-gray-300">
                <td className="p-2">{order.name}</td>
                <td className="p-2">{order.reservationDate}</td>
                <td className="p-2">{order.time}</td>
                <td className="p-2">{order.phoneNumber}</td>
                <td className="p-2">{order.person}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default FilteredTable;
