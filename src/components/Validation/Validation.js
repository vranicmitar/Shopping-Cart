import { useFormik } from "formik";
import React from "react";
import { basicSchema } from "./Schema";
import "./Validation.css";
import { TextField } from "@mui/material";
import DeleteButtonFromCart from "../Button/ButtonDeleteFromCart";

export const Validation = () => {
  const onSubmit = async (values, actions) => {
    console.log("submitted");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(values);

  console.log(errors);
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Shipping Address
      </h1>
      <hr style={{ marginTop: 5 }}></hr>
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          value={values.email}
          onChange={handleChange}
          id="email"
          type="email"
          placeholder="Enter your email"
          onBlur={handleBlur}
          className={errors.email && touched.email ? "input-error" : ""}
        ></TextField>
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
        <br></br>

        <TextField
          value={values.firstName}
          onChange={handleChange}
          id="firstName"
          type="text"
          placeholder="Enter your first name"
          onBlur={handleBlur}
          className={errors.firstName && touched.firstName ? "input-error" : ""}
        ></TextField>
        {errors.firstName && touched.firstName && (
          <p className="error">{errors.firstName}</p>
        )}

        <br></br>
        <TextField
          value={values.lastName}
          onChange={handleChange}
          id="lastName"
          type="text"
          placeholder="Enter your last name"
          onBlur={handleBlur}
          className={errors.lastName && touched.lastName ? "input-error" : ""}
        ></TextField>
        {errors.lastName && touched.lastName && (
          <p className="error">{errors.lastName}</p>
        )}
        <br></br>

        <TextField
          value={values.phone}
          onChange={handleChange}
          id="phone"
          type="number"
          placeholder="Enter your phone number"
          onBlur={handleBlur}
          className={errors.phone && touched.phone ? "input-error" : ""}
        ></TextField>
        {errors.phone && touched.phone && (
          <p className="error">{errors.phone}</p>
        )}
        <br></br>

        <TextField
          value={values.address}
          onChange={handleChange}
          id="address"
          type="text"
          placeholder="Enter your address"
          onBlur={handleBlur}
          className={errors.address && touched.address ? "input-error" : ""}
        ></TextField>
        {errors.address && touched.address && (
          <p className="error">{errors.address}</p>
        )}
        <br></br>
        <button disabled={isSubmitting} type="submit">
          Continue
        </button>
      </form>
    </div>
  );
};
