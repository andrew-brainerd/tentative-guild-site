import React from 'react';
import { Form, Field } from 'react-final-form';
import { styled } from '@material-ui/core/styles';
import { addSuggestion } from '../../api/feedback';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './SuggestionForm.module.scss';

const TextInput = styled(TextField)({
  background: '#e8f0fe',
  display: 'flex',
  marginRight: '25px',
  width: '300px'
});

const SuggestionForm = () => {
  const onSubmit = values => {
    addSuggestion(values).then(response => {
      console.log(response);
    });
  };

  const validate = () => {

  };

  return (
    <div className={styles.suggestionForm}>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.fieldContainer}>
              <Field name="name">
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
              <Field name="suggestion">
                {({ input }) => (
                  <TextInput
                    name={input.name}
                    value={input.value}
                    onChange={input.onChange}
                    label="Suggestion"
                    variant="filled"
                    multiline
                    style={{ width: '500px' }}
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

export default SuggestionForm;
