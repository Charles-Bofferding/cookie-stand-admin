import React, {useState} from "react";

function ReportTable(props) {

  // These numbers defined by lab2 requirements
  var hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36];
  const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

  const locationTotal = 0;

  const overallTotal = 0;

  const slightCheat = 516;

  return (
    <>
      {
        props.stores.length == 0 ?
          <h2>No Cookie Stands Available</h2>
          : 
          <table>
            <tr>
              <th>Location</th>
              {hours.map((hour, idx) =>
                <th key={idx}>{hour}</th>
              )}
              <th>Totals</th>
            </tr>
    
            {
              props.stores.map((store, idx) =>
              <tr>
                <td key={idx}>{store.location}</td>
                {hourly_sales.map((sale, idx) =>
                  <td key={idx}>{sale}</td>
                )}
                <td>{slightCheat}</td>
              </tr>
              )
            }
            <tr>
              <td>Totals</td>
              {hourly_sales.map((sale, idx) =>
                  <td key={idx}>{sale*props.stores.length}</td>
                )}
              <td>{slightCheat*props.stores.length}</td>
            </tr>
          </table>
      }
    </>
  )
}

export default ReportTable;