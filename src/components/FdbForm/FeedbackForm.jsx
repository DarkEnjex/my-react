import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from "./FeedbackForm.module.css";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Must be a valid email!")
    .required("Required"),
  message: Yup.string()
    .min(3, "Too Short!")
    .max(256, "Too Long!")
    .required("Required"),
  level: Yup.string()
    .oneOf(["good", "neutral", "bad"])
    .required("Required"),
});

const initialValues = {
  username: "",
  email: "",
  message: "",
  level: "good",
};

const FeedbackForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const lvlFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <div className={s.div}>
            <label htmlFor={nameFieldId}>
              Username
            </label>
            <Field
              type="text"
              name="username"
              id={nameFieldId}
              className={s.inp}
            />
            <ErrorMessage
              name="username"
              component="span"
              className={s.error}
            />
          </div>
          <div className={s.div}>
            <label htmlFor={emailFieldId}>
              Email
            </label>
            <Field
              type="email"
              name="email"
              id={emailFieldId}
              className={s.inp}
            />
            <ErrorMessage
              name="email"
              component="span"
              className={s.error}
            />
          </div>
          <div className={s.div}>
            <label htmlFor={msgFieldId}>
              Message
            </label>
            <Field
              as="textarea"
              name="message"
              id={msgFieldId}
              className={s.tarea}
            />
            <ErrorMessage
              name="message"
              component="span"
              className={s.error}
            />
          </div>
          <div className={s.lvl}>
            <label htmlFor={lvlFieldId}>
              Service satisfaction level
            </label>
            <Field
              as="select"
              name="level"
              id={lvlFieldId}
              className={s.opt}
            >
              <option value="good">Good</option>
              <option value="neutral">
                Neutral
              </option>
              <option value="bad">Bad</option>
            </Field>
            <ErrorMessage
              name="level"
              component="span"
              className={s.error}
            />
          </div>
          <button type="submit" className={s.btn}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FeedbackForm;
