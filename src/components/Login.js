import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import Registraion from "./Registraion";
const Login = () => {
  const myState = useSelector((state) => state.addTheUser);
  const dispatch = useDispatch();
  console.log(myState);

  function userCall() {
    if (document.getElementById("uName").value.length == 0) {
      document.getElementById("userError").innerHTML = "* Enter User Name";
    } else {
      document.getElementById("userError").innerHTML = "";
    }
  }
  function passCall() {
    if (document.getElementById("uPass").value.length == "") {
      document.getElementById("passError").innerHTML = "* Enter Password";
    } else {
      document.getElementById("passError").innerHTML = "";
    }
  }

  const clicked_login = () => {
    const user_name = document.getElementById("uName").value;
    const user_pass = document.getElementById("uPass").value;
    if (user_name.length == 0 && user_pass.length == 0) {
      document.getElementById("userError").innerHTML = "* Enter User Name";
      document.getElementById("passError").innerHTML = "* Enter Password";
    } else if (user_name.length != 0 && user_pass.length != 0) {
      document.getElementById("userError").innerHTML = "";
      document.getElementById("passError").innerHTML = "";
      if (user_name in myState) {
        console.log("username is correct", myState[user_name]);
        if (myState[user_name] == user_pass) {
          console.log("Username and Password is correct");
          document.getElementById("final").innerHTML = "Login Successful";
          document.getElementById("final").style = "color:green";
        } else {
          console.log("Username is correct but Password is wrong");
          document.getElementById("final").innerHTML = "* Incorrect Password";
          document.getElementById("final").style = "color:red";
        }
      } else {
        console.log("username is incorrect");
        document.getElementById("final").innerHTML = "* Incorrect Username";
        document.getElementById("final").style = "color:red";
      }
    } else if (user_name.length != 0 && user_pass.length == 0) {
      document.getElementById("userError").innerHTML = "";
      document.getElementById("passError").innerHTML = "* Enter Password";
    } else if (user_name.length == 0 && user_pass.length != 0) {
      document.getElementById("userError").innerHTML = "* Enter User Name";
      document.getElementById("passError").innerHTML = "";
    }
  };

  const callRegistration = () => {
    console.log("This is registration");
    document.getElementById("log").style = "display:none";
    document.getElementById("registration").style.display = "block";
  };

  return (
    <>
      <Registraion />
      <div className="login" id="log">
        <form>
          <h1>Login</h1>
          <hr></hr>
          <div className="content">
            <label className="l">
              <b>Username </b>
            </label>
            <input type="text" className="txt" onBlur={userCall} id="uName" />
            <div>
              <label className="error" id="userError"></label>
            </div>
          </div>
          <div className="content">
            <label className="l">
              <b>Password </b>
            </label>
            <input
              type="password"
              className="txt"
              onBlur={passCall}
              id="uPass"
            />
            <div>
              <label className="error" id="passError"></label>
            </div>
          </div>
          <div>
            <label className="final" id="final"></label>
          </div>
        </form>

        <button type="button" id="login_button" onClick={clicked_login}>
          <b>Login</b>
        </button>
        <div className="regis">
          <p onClick={callRegistration}>
            <u>Register New User</u>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
