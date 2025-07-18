import "./App.scss";
import { useState } from "react";
import { defaultData } from "./data";

function App() {
  const [data] = useState(() => [...Object.values(defaultData.data.list)]);

  return (
    <main>
      <table>
        <thead>
          <tr className="main-headers">
            <th colSpan={2}>Lorem ipsum</th>
            <th colSpan={8}>Your Empties</th>
            <th colSpan={7}>Your Exports</th>
          </tr>
          <tr className="sub-headers">
            <th>Size</th>
            <th>SSL</th>

            <th>Container</th>
            <th>Chasis</th>
            <th>Gated Out</th>
            <th>Gated In</th>
            <th>Return Terminal</th>
            <th>Return Apt</th>
            <th>Est. PerDiem</th>
            <th> Empty Location</th>

            <th>Booking</th>
            <th>Loc</th>
            <th>Terminal Apt</th>
            <th>ERD</th>
            <th>Cut Off</th>
            <th>Pickup Loc</th>
            <th>Saving</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.cabin.id}>
              <td id="cell_size_ssl" colSpan={2}>
                <div>
                  <td>{item.size_type}</td>
                  <td>{item.company_name}</td>
                </div>
              </td>

              <td id="cell_empties" colSpan={8}>
                {item.empties.map(({ containers }) =>
                  containers.map((container) => (
                    <div>
                      <td>{container.name}</td>
                      <td>{container.chases}</td>
                      <td>
                        {new Date(container.gated_out).toLocaleDateString(
                          "en-US"
                        )}
                      </td>
                      <td>
                        {new Date(container?.gated_in || "").toLocaleDateString(
                          "en-US"
                        )}
                      </td>
                      <td>{container.return_terminals}</td>
                      <td>{container.return_appointment || "-"}</td>
                      <td>{container.est_per_diem || "-"}</td>
                      <td> </td>
                    </div>
                  ))
                )}
              </td>

              <td id="cell_exports" colSpan={7}>
                {item.exports.map(({ bookings }) =>
                  bookings.map((booking) => (
                    <div>
                      <td>{booking.name}</td>
                      <td>{booking.pick_up_location}</td>
                      <td>{booking.return_to_terminal?.name || "-"}</td>
                      <td>{booking.erd || "-"}</td>
                      <td>{booking.cutoff}</td>
                      <td>{booking.pick_up_location || "-"}</td>
                      <td> </td>
                    </div>
                  ))
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default App;
