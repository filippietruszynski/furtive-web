import * as Yup from "yup";
import React from "react";
import { Formik, FormikHelpers } from "formik";

import { ILogInUserRequest } from "../../store/user/types";

const LogIn: React.FC = () => {
  const initialValues: ILogInUserRequest = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Is required"),
    password: Yup.string().required("Is required"),
  });

  const onSubmit = async (
    values: ILogInUserRequest,
    { resetForm, setSubmitting }: FormikHelpers<ILogInUserRequest>
  ) => {
    console.log(`LOG IN SUBMIT: ${values}`);
    resetForm();
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}

          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}

          <button type="submit" disabled={isSubmitting}>
            Log in
          </button>
        </form>
      )}
    </Formik>
  );
};

export default LogIn;
