import React from 'react';
import { useFormik } from 'formik';

const App = () => {
  const formik = useFormik({
    initialValues: {
      username:'',
      name: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <br/>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        /><br/>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
