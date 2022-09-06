import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Grid, Link, TextField, Typography, Button, Alert } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAuthentication, startGoogleSingIn, startLoginWithEmailAndPassword } from '../../store/auth/thunks'
import { useMemo } from 'react'

const formData= 
{email:'seba@google.com',
password:'123456'}

export const LoginPage = () => {

const {status, errorMessage} =useSelector(state=> state.auth)

const dispatch = useDispatch();
const { email, password, onInputChange}= useForm(formData);

const isAuthenticating =useMemo(()=> status==='checking',[status])

const onSubmit=(e)=>{
  e.preventDefault()
dispatch(startLoginWithEmailAndPassword({email,password}));
  console.log({email,password})
}

const onGoogleSignIn=()=>{
  dispatch(startGoogleSingIn());

}


  return (
    <>
      <AuthLayout title="Login">
 <form onSubmit={onSubmit}
 className="animate__animated__fadeIn animate__faster">
            <Grid container>
              <Grid item xs={12} md={6} sx={{ mt: 2 }}>
                <TextField label="Correo"
                  type="email"
                  placeholder="correo@google.com"
                  fullWidth
                  name='email'
                  value={email}
                  onChange={onInputChange} />
                  
              </Grid>
              <Grid item xs={12} md={6} sx={{ mt: 2 }}>
                <TextField label="Password"
                  type="password"
                  placeholder="contrasena"
                  fullWidth
                  name='password' 
                  value={password}
                  onChange={onInputChange}/>
              </Grid>
              <Grid container sx={{mt:1}}>
              <Grid item
              xs={12}
              display={!!errorMessage ? '': 'none'}>
                <Alert severity='error'>{errorMessage}</Alert>
              </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                <Grid item xs={12} sm={6}>
                  <Button  disabled={isAuthenticating} type='submit' variant='contained' fullWidth>
                    Login
                  </Button>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button disabled={isAuthenticating} onClick={onGoogleSignIn} variant='contained' fullWidth>
                    <Google />
                    <Typography sx={{ ml: 1 }}>Google</Typography>
                  </Button>
              </Grid>
            </Grid>
              <Grid container direction='row' justifyContent='end'>
                <Link component={RouterLink} color='inherit' to='/auth/register'>
                  Crear una cuenta
                </Link>
                </Grid>

              
            </Grid>
          </form>
      </AuthLayout>
         
        
    </>
  )
}
