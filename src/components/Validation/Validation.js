import { useFormik } from "formik";
import React from "react";
import { basicSchema } from "./Schema";
import "./Validation.css";
import { TextField } from "@mui/material";
// import { Button } from "@mui/material";
// import { Modal } from "@mui/material";
// import { Box } from "@mui/material";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
// };
// function ChildModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button onClick={handleOpen}>Open Child Modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box sx={{ ...style, width: 200 }}>
//           <h2 id="child-modal-title">Text in a child modal</h2>
//           <p id="child-modal-description">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//           </p>
//           <Button onClick={handleClose}>Close Child Modal</Button>
//         </Box>
//       </Modal>
//     </React.Fragment>
//   );
// }

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
          label="Enter email"
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
          label="Enter first name"
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
          label="Enter last name"
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
          label="Enter phone number"
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
          label="Enter address"
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
