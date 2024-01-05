import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Paper,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@mui/material';

const Login = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Paper
        sx={{
          width: 350,
          height: 450,
          backgroundColor: 'rgba(41, 39, 39, 0.3)',
          boxShadow: '0 5px 30px black',
          padding: '16px',
          boxSizing: 'border-box',
        }}
      >
        <Button
          variant="text"
          sx={{
            padding: '3px',
            marginBottom: '30px',
            color: 'beige',
            fontSize: 18,
            fontWeight: 550,
          }}
        >
          LOG IN
        </Button>

        <form action="" method="get">
          <div
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <TextField
              type="email"
              placeholder="Email ID"
              name="email"
              required
              autoComplete="off"
              sx={{
                marginBottom: '20px',
                '& input': {
                  border: 'none',
                  borderBottom: '2px solid white',
                  padding: '10px',
                  fontSize: 14,
                  fontWeight: 'bold',
                  backgroundColor: 'transparent',
                  color: 'white',
                },
                '& input:focus': {
                  outline: 'none !important',
                  borderBottom: '2px solid rgb(91, 243, 131)',
                  fontSize: 17,
                },
                '& ::placeholder': {
                  color: 'white',
                },
              }}
            />

            <TextField
              type="password"
              id="password"
              placeholder="Password"
              required
              autoComplete="off"
              sx={{
                marginBottom: '20px',
                '& input': {
                  border: 'none',
                  borderBottom: '2px solid white',
                  padding: '10px',
                  fontSize: 14,
                  fontWeight: 'bold',
                  backgroundColor: 'transparent',
                  color: 'white',
                },
                '& input:focus': {
                  outline: 'none !important',
                  borderBottom: '2px solid rgb(91, 243, 131)',
                  fontSize: 17,
                },
                '& ::placeholder': {
                  color: 'white',
                },
              }}
            />

            <div
              sx={{
                display: 'flex',
                justifyContent: 'center',
                margin: '16px!important',
              }}
            >
              <Checkbox
                name="checkbox"
                id="checkbox"
                sx={{
                  marginRight: '10px',
                  height: '15px',
                  width: '15px',
                }}
              />
              <span
                sx={{
                  color: 'rgb(199, 197, 197)',
                  fontSize: 13,
                }}
              >
                I agree with term & conditions
              </span>
            </div>

            <Link to="/"><Button
              type="button"
              variant="contained"
              sx={{
                padding: '10px',
                width: '150px',
                borderRadius: '20px',
                backgroundColor: 'rgb(10, 136, 43)',
                borderStyle: 'none',
                color: 'white',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'rgba(10, 136, 43, 0.5)',
                },
              }}
            >
              REGISTER
            </Button></Link>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
