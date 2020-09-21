import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField, Grid, Button, Theme } from '@material-ui/core';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  signupForm: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  signupButton: {
    minWidth: 250,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: 10,
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: 10,
      paddingTop: 15,
      paddingBottom: 15,
    },
    [theme.breakpoints.up('lg')]: {
      // paddingTop: 15,
      // paddingBottom: 15,
    },
  },
}));

interface ISignupFormState {
  email?: string;
  isValid?: boolean;
  isSubscribed?: boolean;
  message?: string;
}

export const SignupForm: React.FC<{ url: string }> = ({ url }) => {
  const classes = useStyles();

  const [formState, setFormState] = React.useState<ISignupFormState>({
    email: '',
    isValid: false,
    isSubscribed: false,
    message: '',
  });

  const validateEmail = (email: string): boolean => {
    const mailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email && email.match(mailRegEx)) return true;
    return false;
  };
  const handleSubmit = (subscribe): void => {
    console.log({ formState });
    if (formState.isValid) {
      console.log({ subscribe });
      subscribe({ EMAIL: formState.email });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    console.log(formState);
    if (!validateEmail(email)) {
      setFormState({
        email: email,
        isValid: false,
      });
    } else {
      setFormState({ email, isValid: true });
    }
  };

  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <>
          {status === 'sending' && 'Sending...'}
          {status === 'error' && 'Error Subscribing'}
          {message ? (
            message
          ) : (
            <Grid container className={classes.root} justify="center">
              <Grid item xs={12} md={8}>
                <TextField
                  label="Signup for the Beta"
                  id="signup-form-input"
                  variant="outlined"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <label htmlFor="signup-form-input">
                  <Button
                    className={classes.signupButton}
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={(e: React.SyntheticEvent<HTMLButtonElement>) =>
                      handleSubmit(subscribe)
                    }
                    disabled={!formState.isValid}
                    disableElevation
                  >
                    Signup Now
                  </Button>
                </label>
              </Grid>
            </Grid>
          )}
        </>
      )}
    />
  );
};
