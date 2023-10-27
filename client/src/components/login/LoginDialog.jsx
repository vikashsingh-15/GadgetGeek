import {
  Dialog,
  TextField,
  Typography,
  Box,
  Button,
  styled,
} from "@mui/material";

import { useState } from "react";

const Component = styled(Box)`
  padding: 0;
  height: 70vh;
  width: 90vh;
  padding: 0px;
`;

const ImageBox = styled(Box)`
  padding: 45px;
  background: #138d75 url(https://i.ibb.co/MfwWGXZ/Signup-1.png) no-repeat
    center;
  //   height: 81%;
  width: 30%;
  & > p {
    /*with '&p>' we can formate child of an element.*/
    color: #ffffff;
    font-weight: bold;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 25px 35px;
  & > div,
  & > Button,
  & > p {
    margin-top: 20px;
  }
`;

const LogInButton = styled(Button)`
  background: #138d75;
  color: #fff;
  height: 48px;
  border-radius: 2;
  &:hover {
    background: #117a65; /* Change the background color when hovering */
  }
`;

const LogInText = styled(Typography)`
  font-size: 20px;
  color: White;
  text-align: center;
  font-weight: bold;
  padding: 20px;
`;

const Text = styled(Typography)`
  font-size: 14px;
  color: #878787;
`;
const SignupText = styled(Typography)`
  font-size: 14px;
  color: #878787;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
`;
const accountInitialValue = {
  login: {
    view: "login",
    heading: "LOGIN",
    subHeading: "Login to Continue Shopping and enjoying our products",
  },
  signup: {
    view: "signup",
    heading: "SIGNUP",
    subHeading: "Looks like you are new here!",
  },
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValue.login);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValue.login);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValue.signup);
  };
  const toggleLogIn = () => {
    toggleAccount(accountInitialValue.login);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%", width: "100%" }}>
          <ImageBox>
            <LogInText>{account.heading}</LogInText>
            <Typography>{account.subHeading}</Typography>
          </ImageBox>
          {account.view === "login" ? ( // using ternory to see if we need to show login or signup.If condition is gtrue then login else signup wrapper will open
            <Wrapper>
              <TextField variant="standard" label="Enter Email" />
              <TextField variant="standard" label="Enter Password" />
              <Text> By Containing you agree to Enjoy.</Text>
              <LogInButton> Login</LogInButton>
              <SignupText onClick={() => toggleSignup()}>
                New User. SignUp!
              </SignupText>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField variant="standard" label="Enter First Name" />
              <TextField variant="standard" label="Enter Last Name" />
              <TextField variant="standard" label="Enter Email" />
              <TextField variant="standard" label="Enter Password" />
              <Text> By Containing you agree to Enjoy.</Text>
              <LogInButton> Signup</LogInButton>
              <SignupText onClick={() => toggleLogIn()}>
                Existing User. Login!
              </SignupText>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
