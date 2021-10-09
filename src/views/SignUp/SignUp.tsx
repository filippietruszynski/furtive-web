import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { signUpUser } from "../../store/services/auth.services";
import { ISignUpUserRequest } from "../../store/types/auth.types";

const SignUp: React.FC = () => {
  const dispatch = useDispatch();

  const initialValues: ISignUpUserRequest = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Is required"),
    password: Yup.string().required("Is required"),
  });

  const onSubmit = async (
    values: ISignUpUserRequest,
    { resetForm, setSubmitting }: FormikHelpers<ISignUpUserRequest>
  ) => {
    try {
      await dispatch(signUpUser(values));
      resetForm();
      setSubmitting(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Sign up</h1>
      <Link to="/login">Log in</Link>
      <br />
      <br />

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
            <span>login</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <br />

            <span>password</span>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <br />

            <button type="submit" disabled={isSubmitting}>
              Sign up
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
