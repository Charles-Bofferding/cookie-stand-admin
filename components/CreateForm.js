import React, {useState} from "react";

function CreateForm(props) {

  //Form name and the method used to create it
  //whatever is in use state at the start is what is tracked, use a good DTO here
  const [formInput, setFormInput] = useState({});

  const handleChange = (e) => {
    //Needs to live in the square brackets because it is a variable
    setFormInput({...formInput,[e.target.name]: [e.target.value]}) 
  }

  const onSubmit = (e) => {
    //console.log(formInput);
    //console.log(e.target.name, e.target.value);
    e.preventDefault();
    //When we submit we will have built this up to a full store through onchange tracking
    props.onSubmit(formInput);
    e.target.reset();
  }

  // These numbers defined by lab2 requirements
  var hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36];

  return (

    <>
      <form id="storeForm" onSubmit = {onSubmit}>
        <label>Location</label>
        <input id='locationInput' placeholder='Enter a location' name = "location" onChange = {handleChange}/>
        <br></br>
        <div id="myInputs">
          <div className="singleInput">
            <label>Minimum Customers per Hour</label>
            <input name = "minimumCustomer" onChange = {handleChange}/>
          </div>
          <div className="singleInput">
            <label>Maximum Customers per Hour</label>
            <input name = "maximumCustomer" onChange = {handleChange}/>
          </div>
          <div className="singleInput">
            <label>Average Cookies per Sale</label>
            <input name = "averageCookiesPerSale" onChange = {handleChange}/>
          </div>
          <div id="createButton">
            <button id="formSubmit" type="submit">Create</button>
          </div>
        </div>

        {/* Later this info will come from the API */}
        <input name="hourly_sales" value={hourly_sales} type="hidden"/>

      </form>
    </>
  )
}

export default CreateForm