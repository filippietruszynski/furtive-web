import React from "react";
import * as Yup from "yup";
import { AxiosResponse } from "axios";
import { Formik, FormikHelpers } from "formik";

import { ILoginRequest } from "../../api/requests";

interface ILoginProps {
  login: (request: ILoginRequest) => Promise<AxiosResponse<any>>;
}

const Login: React.FC<ILoginProps> = ({ login }) => {
  const initialValues: ILoginRequest = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Is required"),
    password: Yup.string().required("Is required"),
  });

  const onSubmit = async (
    values: ILoginRequest,
    { resetForm, setSubmitting }: FormikHelpers<ILoginRequest>
  ) => {
    try {
      await login(values);
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
            Log in
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Login;
