import "./App.scss";
import { useState } from "react";
import { defaultData } from "./data";
import { ISOtoString } from "./utils/dates";

function App() {
  const [data] = useState(() => [...Object.values(defaultData.data.list)]);

  return (
    <main>
      <div className="table-container">
        <table>
          <thead>
            <tr className="main-headers">
              <th colSpan={2}>Lorem ipsum</th>
              <th colSpan={7}>Your Empties</th>
              <th colSpan={5}>Your Exports</th>
            </tr>
            <tr className="sub-headers">
              <th id="size">Size</th>
              <th id="ssl">SSL</th>

              <th id="container">Container</th>
              <th id="chasis">Chasis</th>
              <th id="gated-out">Gated Out</th>
              <th id="gated-in">Gated In</th>
              <th id="return-terminal">Return Terminal</th>
              <th id="return-apt">Return Apt</th>
              <th id="perdiem">Est. PerDiem</th>

              <th id="booking">Booking</th>
              <th id="erd">ERD</th>
              <th id="cutoff">Cut Off</th>
              <th id="pickup-loc">Pickup Loc</th>
              <th id="saving">Saving</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.cabin.id + item.size_type + item.company_name}>
                <td id="cell_size_ssl" colSpan={2}>
                  <div className="table-row">
                    <td headers="size">{item.size_type}</td>
                    <td headers="ssl">{item.company_name}</td>
                  </div>
                </td>

                <td id="cell_empties" colSpan={7}>
                  {item.empties.map(({ containers }) =>
                    containers.map((container) => (
                      <div key={container.id} className="table-row">
                        <td headers="container">{container.name}</td>
                        <td headers="chasis">{container.chases}</td>
                        <td headers="gated-out">
                          {ISOtoString(container.gated_out) || "-"}
                        </td>
                        <td headers="gated-in">
                          {ISOtoString(container.gated_in) || "-"}
                        </td>
                        <td headers="return-terminal">
                          {container.return_terminals || "-"}
                        </td>
                        <td headers="return-apt">
                          {container.return_appointment || "-"}
                        </td>
                        <td headers="perdiem">
                          {container.est_per_diem || "-"}
                        </td>
                      </div>
                    ))
                  )}
                </td>

                <td id="cell_exports" colSpan={5}>
                  {item.exports.map(({ bookings }) =>
                    bookings.map((booking) => (
                      <div key={booking.id} className="table-row">
                        <td headers="booking">{booking.name}</td>
                        <td headers="erd">{ISOtoString(booking.erd) || "-"}</td>
                        <td headers="cutoff">
                          {ISOtoString(booking.cutoff) || "-"}
                        </td>
                        <td headers="pickup-loc">
                          {booking.pick_up_location || "-"}
                        </td>
                        <td headers="saving"> </td>
                      </div>
                    ))
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default App;
