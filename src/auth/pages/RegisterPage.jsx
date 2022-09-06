import { Link as RouterLink } from 'react-router-dom'
import { Grid, Link, TextField, Typography, Button, Alert } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'

const formData = {
  email: '',
  password: '',
  displayName: '',
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener un @'],
  password: [(value) => value.length >= 6, 'El password debe tener mas de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

  const dispatch=useDispatch();

  const [formsSubmitted, setFormSubmitted] = useState(false);

  const { displayName, email, password, onInputChange, formState,
    isFormValid, displayNameValid, emailValid, passwordValid } = useForm(formData, formValidations);
 
  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState))

  }
const {status, errorMessage}=useSelector(state=> state.auth)
const isCheckingAuthentication =useMemo(()=>status==='Checking',[status]);

  return (
    <>
      <AuthLayout title="Login">

        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} md={6} sx={{ mt: 2 }}>
              <TextField label="Name "
                type="text"
                placeholder="Sebastian Conte Grand"
                fullWidth
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={!!displayNameValid && formsSubmitted}
                helperText={displayNameValid}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ mt: 2 }}>
              <TextField label="email"
                type="email"
                placeholder="Seba@google.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formsSubmitted}
                helperText={emailValid}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ mt: 2 }}>
              <TextField label="Password"
                type="password"
                placeholder="contrasena"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formsSubmitted}
                helperText={passwordValid}
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item
              xs={12}
              display={!!errorMessage ? '': 'none'}>
                <Alert severity='error'>{errorMessage}</Alert>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button disabled={isCheckingAuthentication} type='onSubmit' variant='contained' fullWidth>
                  Create Account
                </Button>
              </Grid>


            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>Do you have an account?</Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login'>
                log in
              </Link>
            </Grid>


          </Grid>
        </form>
      </AuthLayout>


    </>
  )
}
