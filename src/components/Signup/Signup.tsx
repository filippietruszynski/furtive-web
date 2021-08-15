import React, { useState } from "react";
import { AxiosResponse } from "axios";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { ISignupRequest } from "../../api/requests";

interface ISignupProps {
  signup: (request: ISignupRequest) => Promise<AxiosResponse<any>>;
}

const Signup: React.FC<ISignupProps> = ({ signup }) => {
  const initialValues: ISignupRequest = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Is required"),
    password: Yup.string().required("Is required"),
  });

  const onSubmit = async (
    values: ISignupRequest,
    { resetForm, setSubmitting }: FormikHelpers<ISignupRequest>
  ) => {
    try {
      await signup(values);
      resetForm();
      setSubmitting(false);
    } catch (error) {
      console.error(error);
    }
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

export default Signup;
