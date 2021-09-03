import React, {useState} from "react";

function ReportTable({stores, hours}) {

  const slightCheat = 516;

  //create array of all of the sales total for the day of each store
  const locationSales = stores.map(store => {
    //map through the hourly sales of the store and create a running total
    console.log(store);
    let storeTotal = 0;
     for (let index = 0; index < store.hourlySales.length; index++) {
       storeTotal+= store.hourlySales[index];
     }
     return storeTotal;
    //put that total into sales array
  })
  

  //create array of all of the sales totals for each hour of the day
  //also add in total of all of those numbers
  const hourSales = [];

  let totalTotal = 0;

  for (let index = 0; index < hours.length; index++) {
    let total = 0;
    for (let j = 0; j < stores.length; j++) {
      total += stores[j].hourlySales[index]; 
    }
    hourSales.push(total)
    totalTotal += total;
  }
  hourSales.push(totalTotal);

  console.log('location sales', locationSales);
  console.log('hour sales', hourSales);

  return (
    <>
      {
        stores.length == 0 ?
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
              stores.map((store, idx) =>
              <tr>
                <td key={idx}>{store.location}</td>
                {store.hourlySales.map((sale, idx) =>
                  <td key={idx}>{sale}</td>
                )}
                <td>{locationSales[idx]}</td>
              </tr>
              )
            }
            <tr>
              <td>Totals</td>
              {hourSales.map((sale, idx) =>
                  <td key={idx}>{sale}</td>
                )}
            </tr>
          </table>
      }
    </>
  )
}

export default ReportTable;