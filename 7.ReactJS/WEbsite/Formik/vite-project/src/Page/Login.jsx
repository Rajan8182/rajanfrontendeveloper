import React, { useEffect } from "react";
import { useFormik } from "formik";

const Login = () => {
  const storedValues = JSON.parse(localStorage.getItem("formData")) || {
    username: "",
    name: "",
    email: "",
  };

  const formik = useFormik({
    initialValues: storedValues,
    onSubmit: (values) => {
      localStorage.setItem("formData", JSON.stringify(values));
      console.log(values);
    },
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formik.values));
  }, [formik.values]);

  return (
    <div>
      <form
        className="flex items-center justify-center"
        onSubmit={formik.handleSubmit}
      >
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />

        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <button className="bg-slate-700 p-2 rounded-md" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
