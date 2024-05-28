import React, { useState } from "react";
import { Message } from "../enum";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [message, setMessage] = useState("");
  const [messageClass, setMessageClass] = useState(Message.SUCCESS);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const register = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role
        }),
      });
      const result = await response.json();
      setMessage(result.message);
      setMessageClass(Message.SUCCESS);
      if (!response.ok) {
        setMessageClass(Message.DANGER);
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        throw result;
      }
      localStorage.setItem("token", result.token);
      localStorage.setItem("email", email);
      setEmail("");
      setPassword("");
      location.replace("/");
    } catch (err) {
      setMessageClass(Message.DANGER);
      console.error(`${err.name}: ${err.message}`);
      localStorage.removeItem("token");
      localStorage.removeItem("email");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    register();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="center-form">
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Register</button>
        <p
          className={"message " + messageClass}
          style={{ display: message == "" ? "none" : "block" }}
        >
          {message}
        </p>
      </form>
    </div>
  );
}
