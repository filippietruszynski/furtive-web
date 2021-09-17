import * as Yup from "yup";
import React from "react";
import { useDispatch } from "react-redux";
import { Formik, FormikHelpers } from "formik";

import { ILogInRequest } from "../../store/types/auth.types";
import { logIn } from "../../store/services/auth.services";

const LogIn: React.FC = () => {
  const dispatch = useDispatch();

  const initialValues: ILogInRequest = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Is required"),
    password: Yup.string().required("Is required"),
  });

  const onSubmit = async (
    values: ILogInRequest,
    { resetForm, setSubmitting }: FormikHelpers<ILogInRequest>
  ) => {
    dispatch(logIn(values));
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
