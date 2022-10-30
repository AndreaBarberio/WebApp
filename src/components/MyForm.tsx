import * as React from "react";
import { TextField } from "@mui/material";
import { Formik, Form } from "formik";
interface Values {
  userName: string;
  Password: string;
}
interface Props {
  onSubmit: (values: Values) => void;
}
export const MyForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ userName: "", Password: "" }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <TextField
            placeholder="Username"
            name="userName"
            value={values.userName}
            onChange={handleChange}
            onBlur={handleBlur}
          />{" "}
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          <TextField
            placeholder="Password"
            type="password"
            name="Password"
            value={values.Password}
            onChange={handleChange}
            onBlur={handleBlur}
          />{" "}
        </Form>
      )}
    </Formik>
  );
};
