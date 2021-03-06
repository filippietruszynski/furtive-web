import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { logInUser } from "../../store/services/auth.services";
import { RoutePaths } from "../../utils/enums";

import { ILogInUserRequest } from "../../store/types/auth.types";

const LogIn: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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
    try {
      await dispatch(logInUser(values));
      resetForm();
      setSubmitting(false);
      history.push(RoutePaths.CHAT);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Log in</h1>
      <Link to="/signup">Sign up</Link>
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
              Log in
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default LogIn;
