import React from "react";
import { useDispatch } from "react-redux";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { signUpUser } from "../../store/auth/services";

import { ISignUpUserRequest } from "../../store/auth/types";

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
    dispatch(signUpUser(values));
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
            Sign up
          </button>
        </form>
      )}
    </Formik>
  );
};

export default SignUp;
