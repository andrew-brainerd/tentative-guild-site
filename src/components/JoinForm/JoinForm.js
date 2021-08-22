import React from 'react';
import { Form, Field } from 'react-final-form';
import { styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addPlayer } from '../../api/recruitment';
import styles from './JoinForm.module.scss';

const TextInput = styled(TextField)({
  background: '#e8f0fe',
  display: 'flex',
  marginRight: '25px',
  width: '300px'
});

const JoinForm = () => {
  const onSubmit = values => {
    addPlayer(values).then(response => {
      console.log(response);
    });
  };

  const validate = () => {

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
                {({ input }) => (
                  <TextInput
                    name={input.name}
                    value={input.value}
                    onChange={input.onChange}
                    label="Name"
                    variant="filled"
                  />
                )}
              </Field>
            </div>
            <div className={styles.fieldContainer}>
              <Field name="toonRace" className={styles.toonRace}>
                {({ input }) => (
                  <TextInput
                    name={input.name}
                    value={input.value}
                    onChange={input.onChange}
                    label="Race"
                    variant="filled"
                  />
                )}
              </Field>
              <Field name="toonClass" className={styles.toonClass}>
                {({ input }) => (
                  <TextInput
                    name={input.name}
                    value={input.value}
                    onChange={input.onChange}
                    label="Class"
                    variant="filled"
                  />
                )}
              </Field>
            </div>
            <div className={styles.fieldContainer}>
              <Field name="toonSpec" className={styles.toonSpec}>
                {({ input }) => (
                  <TextInput
                    name={input.name}
                    value={input.value}
                    onChange={input.onChange}
                    label="Spec"
                    variant="filled"
                  />
                )}
              </Field>
            </div>
            <div className={styles.fieldContainer}>
              <Field name="submit" className={styles.submit}>
                {() => (
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={submitting || pristine}
                  >
                    Submit
                  </Button>
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
