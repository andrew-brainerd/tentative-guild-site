import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { styled } from '@material-ui/core/styles';
import { addSuggestion } from '../../api/feedback';
import TextField from '@material-ui/core/TextField';
import YellowButton from '../YellowButton/YellowButton';

import styles from './SuggestionForm.module.scss';

const TextInput = styled(TextField)({
  background: '#e8f0fe',
  display: 'flex',
  marginRight: '25px',
  width: '300px'
});

const SuggestionForm = () => {
  const [successMessage, setSuccessMessage] = useState(null);

  const onSubmit = (values, form) => {
    addSuggestion(values).then(() => {
      setSuccessMessage('Suggestion submitted! Thank you for your feedback');
      setTimeout(() => {
        form.initialize({});
        setSuccessMessage(null);
      }, 10000);
    });
  };

  const validate = ({ suggestion }) => {
    const errors = {};

    if (!suggestion) {
      errors.suggestion = 'Suggestion is required';
    }

    return errors;
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
                {({ input, meta }) => (
                  <TextInput
                    name={input.name}
                    value={input.value}
                    onChange={input.onChange}
                    label="Suggestion"
                    variant="filled"
                    multiline
                    style={{ width: '500px' }}
                    error={meta.touched && !!meta.error}
                    helperText={meta.touched && meta.error}
                    FormHelperTextProps={{
                      classes: {
                        error: styles.error
                      }
                    }}
                  />
                )}
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

export default SuggestionForm;
