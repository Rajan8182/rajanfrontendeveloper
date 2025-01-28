import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const [validUsers, setValidUsers] = useState(() => {
    const storedUsers = localStorage.getItem("lockerUsers");
    return storedUsers ? JSON.parse(storedUsers) : [{ username: "Rajan chovatiya", password: "raju@007" }];
  });

  useEffect(() => {
    localStorage.setItem("lockerUsers", JSON.stringify(validUsers));
  }, [validUsers]);

  const handleLogin = (e) => {
    e.preventDefault();

    const isValidUser = validUsers.some(
      (user) => user.username === username && user.password === password
    );

    if (isValidUser) {
      setSuccessMessage("Login successful! Welcome back.");
      setTimeout(() => navigate("/home"), 1500);
    } else if (username && password) {
      const newUser = { username, password };
      setValidUsers((prevUsers) => [...prevUsers, newUser]);
      setSuccessMessage("New user added and logged in successfully!");
      setTimeout(() => navigate("/home"), 1500); 
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Locker Stores Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError(""); 
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(""); 
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
