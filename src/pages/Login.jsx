import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import login from '../images/login.png'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  textField: {
    marginBottom: 45,
    '& .MuiInputLabel-formControl': {
      color: `#BCBCBD`,
    },
    '& .MuiSvgIcon-root': {
      color: `#BCBCBD`,
    },
    '& .MuiInput-underline:before': {
      borderBottom: `1px solid #BCBCBD`,
    },
    '& .MuiInput-root': {
      color: `#BCBCBD`,
    },
  },
}));

export const Login = () => {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    amount: '',
    login: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <SContainer>
      <SLeft>
        <STitle>
          Авторизация
        </STitle>
        <SForm>
          <TextField className={classes.textField}
            label="Логин"
          />
          <TextField className={classes.textField}
            type={values.showPassword ? 'text' : 'password'}
            label="Пароль"
            value={values.password}
            onChange={handleChange('password')}
            endadornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl> */}
          <SButton>Вход</SButton>
        </SForm>
      </SLeft>
      <SRight>
        <SImg src={login} />
      </SRight>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 101px 63px;
  background-color: #2D2D2D;
`
const SRight = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #3D3D3D;
  padding: 46px;
`
const SLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding: 108px 48px;
  border: 1px solid #3D3D3D
`
const STitle = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 33px;
  line-height: 40px;
  color: #FFFFFF;
  margin-top: 0;
  margin-bottom: 130px;
`
const SForm = styled.form`
  display: flex;
  flex-direction: column;
`
const SButton = styled.button`
  height: 62px;
  border: none;
  background: #E84E0E;
  color: #fff;
  text-transform: uppercase;
`
const SImg = styled.img`
  width: 100%;
`