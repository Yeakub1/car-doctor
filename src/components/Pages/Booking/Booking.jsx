import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Providers/AuthProviders";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Booking = () => {
  const { user } = useContext(authContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);
    

  const handleDelete = (_id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          // Swal.fire("Deleted!", "Your file has been deleted.", "success");
          fetch(`http://localhost:5000/bookings/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire(
                  "Deleted!",
                  "Your file has been deleted.",
                  "success"
                  );
                  const remainingng = bookings.filter(booking => booking._id !== _id);
                  setBookings(remainingng);
              }
            });
        }
      });
    };
    

    const handleBookingConfrom = id => {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'confirm'})
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.modifiedCount > 0) {
            // update state
             const remainingng = bookings.filter(
               (booking) => booking._id !== id
            );
            const update = bookings.find((booking) => booking._id === id);
            update.status = 'confirm';
            const newBookings = [update, ...remainingng];
            setBookings(newBookings);
          }
        })
  };
  


  return (
    <div>
      <h1 className="mt-8 text-3xl font-bold">
        bookings: <span className="text-blue-500">{bookings.length}</span>
      </h1>

      <div className="overflow-x-auto w-full mt-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Service </th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfrom={handleBookingConfrom}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
