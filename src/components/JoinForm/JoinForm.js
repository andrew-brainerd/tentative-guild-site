import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { addPlayer } from '../../api/recruitment';
import TextInput from '../TextInput/TextInput';
import YellowButton from '../YellowButton/YellowButton';
import styles from './JoinForm.module.scss';

const JoinForm = () => {
  const [successMessage, setSuccessMessage] = useState(null);

  const onSubmit = (values, form) => {
    addPlayer(values).then(() => {
      setSuccessMessage('Application submitted. You will hear from an officer soon!');
      setTimeout(() => {
        form.initialize({});
        setTimeout(() => setSuccessMessage(null), 100);
      }, 5000);
    });
  };

  const validate = ({ toonName, toonRace, toonClass, toonSpec }) => {
    const errors = {};

    if (!toonName) {
      errors.toonName = 'Name is required';
    }

    if (!toonRace) {
      errors.toonRace = 'Race is required';
    }

    if (!toonClass) {
      errors.toonClass = 'Class is required';
    }

    if (!toonSpec) {
      errors.toonSpec = 'Spec is required';
    }

    return errors;
  };

  return (
    <div className={styles.joinForm}>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.fieldContainer}>
              <Field name="toonName">
                {fieldProps => <TextInput label="Name" {...fieldProps} />}
              </Field>
            </div>
            <div className={styles.fieldContainer}>
              <Field name="toonRace" className={styles.toonRace}>
                {fieldProps => <TextInput label="Race" {...fieldProps} />}
              </Field>
              <Field name="toonClass" className={styles.toonClass}>
                {fieldProps => <TextInput label="Class" {...fieldProps} />}
              </Field>
            </div>
            <div className={styles.fieldContainer}>
              <Field name="toonSpec" className={styles.toonSpec}>
                {fieldProps => <TextInput label="Spec" {...fieldProps} />}
              </Field>
            </div>
            {successMessage && (
              <div className={styles.successText}>
                {successMessage}
              </div>
            )}
            <div className={styles.fieldContainer}>
              <Field name="submit" className={styles.submit}>
                {() => (
                  <YellowButton
                    type="submit"
                    variant="contained"
                    disabled={submitting || pristine || !!successMessage}
                  >
                    Submit
                  </YellowButton>
                )}
              </Field>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default JoinForm;
