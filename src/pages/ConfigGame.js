import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { configGame } from "../redux/actions/boardGenerator";
import { useNavigate } from "react-router-dom";

export const ConfigGame = () => {
  const { boardGenReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ nickname: "", numberShifts: 0, difficult: 0 }}
      validationSchema={Yup.object({
        numberShifts: Yup.number()
          .max(100)
          .min(0, "Min value 0.")
          .max(100, "Max value 100.")
          .integer(),
        nickname: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(
          configGame({
            data: {
              nickname: values.nickname,
              numberShifts: values.numberShifts
                ? values.numberShifts
                : values.difficult,
            },
          })
        );
        navigate(`start`);
        setSubmitting(false);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <label htmlFor="nickname">Name</label>
          <Field name="nickname" type="text" />
          <ErrorMessage name="nickname" />

          <label htmlFor="numberShifts">Number of Shifts</label>
          <Field name="numberShifts" type="number" />
          <ErrorMessage name="numberShifts" />

          {/********************************** */}
          <div id="my-radio-group">Picked</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field
                type="radio"
                name="difficult"
                value={999}
                onClick={() => setFieldValue("numberShifts", 0)}
              />
              Facil
            </label>
            <label>
              <Field
                type="radio"
                name="difficult"
                value={100}
                onClick={() => setFieldValue("numberShifts", 0)}
              />
              Medio
            </label>
            <label>
              <Field
                type="radio"
                name="difficult"
                value={50}
                onClick={() => setFieldValue("numberShifts", 0)}
              />
              Dificil
            </label>
            <div>
              Picked:{" "}
              {values.numberShifts === 0
                ? values.difficult
                : values.numberShifts}
            </div>
          </div>

          <button type="submit">Submit</button>

          {/********************************** */}
        </Form>
      )}
    </Formik>
  );
};
