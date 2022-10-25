import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../actions";

const Registraion = () => {
  const dispatch = useDispatch();
  const my_state = useSelector((state) => state.addTheUser);
  console.log("register", my_state);
  const ruserCall = () => {
    if (document.getElementById("ruName").value.length == 0) {
      document.getElementById("ruserError").innerHTML = "* Enter User Name";
    } else {
      document.getElementById("ruserError").innerHTML = "";
    }
  };

  const rpassCall = () => {
    if (document.getElementById("ruPass").value.length == 0) {
      document.getElementById("rpassError").innerHTML = "* Enter Password";
    } else {
      document.getElementById("rpassError").innerHTML = "";
    }
  };

  const crpassCall = () => {
    const pass = document.getElementById("ruPass").value;
    const confirm_pass = document.getElementById("cruPass").value;
    if (document.getElementById("cruPass").value.length == 0) {
      document.getElementById("crpassError").innerHTML =
        "* Enter Confirm Password";
      document.getElementById("crpassError").style.color = "red";
    } else if (pass !== confirm_pass) {
      document.getElementById("crpassError").innerHTML = "* Incorrect Password";
      document.getElementById("crpassError").style.color = "red";
    } else if (pass === confirm_pass) {
      document.getElementById("crpassError").innerHTML = "Password Confirmed";
      document.getElementById("crpassError").style.color = "green";
    } else {
      document.getElementById("crpassError").innerHTML = "";
    }
  };

  const callLogin = () => {
    console.log("This is Login");
    document.getElementById("log").style = "display:block";
    document.getElementById("registration").style.display = "none";
    document.getElementById("ruserError").innerHTML = "";
    document.getElementById("rpassError").innerHTML = "";
    document.getElementById("crpassError").innerHTML = "";
    document.getElementById("rfinal").innerHTML = "";
    document.getElementById("ruName").value = "";
    document.getElementById("ruPass").value = "";
    document.getElementById("cruPass").value = "";
  };

  const registerUser = () => {
    const pass = document.getElementById("ruPass").value;
    const confirm_pass = document.getElementById("cruPass").value;
    const user_Name = document.getElementById("ruName").value;
    if (user_Name in my_state) {
      document.getElementById("rfinal").style = "color:red";
      document.getElementById("rfinal").innerHTML = "Already Registered";
    } else if (pass === confirm_pass && user_Name.length !== 0) {
      dispatch(addUser(user_Name, confirm_pass));
      document.getElementById("rfinal").style = "color:green";
      document.getElementById("rfinal").innerHTML = "Registration Successful";
    } else if (pass !== confirm_pass || user_Name.length === 0) {
      document.getElementById("rfinal").style = "color:red";
      document.getElementById("rfinal").innerHTML = "Registration Unsuccessful";
    }
  };

  return (
    <div id="registration">
      <form>
        <h2>Registration</h2>
        <hr></hr>
        <div className="content">
          <label className="l">
            <b>Username </b>
          </label>
          <input type="text" className="txt" id="ruName" onBlur={ruserCall} />
          <div>
            <label className="error" id="ruserError"></label>
          </div>
        </div>
        <div className="content">
          <label className="l">
            <b>Password </b>
          </label>
          <input
            type="password"
            className="txt"
            id="ruPass"
            onBlur={rpassCall}
          />
          <div>
            <label className="error" id="rpassError"></label>
          </div>
        </div>
        <div className="content">
          <label className="l">
            <b>Confirm Password </b>
          </label>
          <input
            type="password"
            className="txt"
            id="cruPass"
            onBlur={crpassCall}
          />
          <div>
            <label className="error" id="crpassError"></label>
          </div>
        </div>
        <div>
          <label className="final" id="rfinal"></label>
        </div>
      </form>
      <button type="button" id="register_button" onClick={registerUser}>
        <b>Regster</b>
      </button>
      <div className="to_login" onClick={callLogin}>
        <p>
          <u>Back To Login</u>
        </p>
      </div>
    </div>
  );
};

export default Registraion;
