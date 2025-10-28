import { useState } from "react";

export const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    address: "",
    dob: "",
  });

  const handleChange = (e) =>
    setRegisterForm({
      ...registerForm,
      [e.target.id]: e.target.value,
    });

  let message = "";
  const handleClickSubmit = () => {
    if (registerForm.firstName.length == 0) {
      message += "First Name, ";
    }
    if (registerForm.lastName.length == 0) {
      message += "Last Name, ";
    }
    if (registerForm.email.length == 0) {
      message += "Email, ";
    }
    if (registerForm.password.length == 0) {
      message += "Password, ";
    }
    if (registerForm.confirmPassword.length == 0) {
      message += "Confirm Password, ";
    }
    if (registerForm.mobile.length == 0) {
      message += "Mobile, ";
    }
    if (registerForm.address.length == 0) {
      message += "Address, ";
    }
    if (registerForm.dob.length == 0) {
      message += "Date Of Birth, ";
    }
    if (message.length != 0) {
      message += "Can Not be Empty";
      alert(message);
    }
    if (!(registerForm.password === registerForm.confirmPassword)) {
      alert("validation Error = Password Does not Match");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "3px solid teal",
        width: "auto",
      }}
    >
      <div style={{ fontStyle: "bold", fontSize: "20px", color: "teal" }}>
        Register
      </div>
      <form onSubmit={handleClickSubmit}>
        <table style={{ margin: "5px", padding: "5px" }}>
          <tbody>
            <tr>
              <td>
                <label htmlFor="firstName">First Name : </label>
              </td>
              <td>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="lastName">Last Name : </label>
              </td>
              <td>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Email : </label>
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">Password : </label>
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="confirmPassword">Confirm Password : </label>
              </td>
              <td>
                <input
                  type="text"
                  name="confirmPassword"
                  id="confirmPassword"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="mobile">Mobile : </label>
              </td>
              <td>
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <label htmlFor="address">Address : </label>
              </td>
              <td>
                <input
                  type="text"
                  name="address"
                  id="address"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="dob">Date Of Birth : </label>{" "}
              </td>

              <td>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2} style={{ textAlign: "center" }}>
                <input
                  type="submit"
                  // onSubmit={handleClickSubmit}
                  style={{ margin: "5px" }}
                  value="submit"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};
