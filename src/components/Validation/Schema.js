import * as Yup from "yup";

export const basicSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter valid email*"),
  firstName: Yup.string().required("Enter first name*"),
  lastName: Yup.string().required("Enter last name*"),
  phone: Yup.string().required("Enter phone number*"),
  address: Yup.string().required("Enter address*"),
});
