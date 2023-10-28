import {
  Dialog,
  TextField,
  Typography,
  Box,
  Button,
  styled,
} from "@mui/material";

import { useState, useContext } from "react";
import { authenticateSignup, authenticateLogin } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

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

const ErrorText = styled(Typography)`
font-size: 10px;
  color: red;
  line-height: 0px;
  margin-top: 10px;
  font-weight: bold;
`

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

const signupInitialValue = {
  //this will conatin the intial value of signUp data by user
  firstName: ``,
  lastName: ``,
  email: ``,
  password: ``,
};

const loginInitialValue = {
  email: "",
  password: "",
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValue.login);
  const [signup, setSignup] = useState(signupInitialValue); //this stae is used to store value of what user is trping in signupForm
  const [login, setLogin] = useState(loginInitialValue);
  const { setAccount } = useContext(DataContext);
  const [error, setError] = useState(false);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValue.login);
    setError(false);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValue.signup);
  };
  const toggleLogIn = () => {
    toggleAccount(accountInitialValue.login);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    //signnup ko set kar rahe hai by destructuring, destructuring is imp so that it dont get override
    //e.target.name is used to get the name of the input field and e.target.value is used to get the value of the input field
    //e.target.name is a variable thus is placed in [] bracket.
  };

  const signupUser = async () => {
    //on button click i need to call an Api,for calling api i will use Axios thus intall it.
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.firstName);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    console.log(response);

    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data.firstName);
    } else {
      setError(true);
    }
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
              <TextField
                variant="standard"
                onChange={(e) => onValueChange(e)}
                name="email"
                label="Enter Email"
              />
              {error && 
                <ErrorText>Please Enter valid credentials.</ErrorText>
              }
              <TextField
                variant="standard"
                onChange={(e) => onValueChange(e)}
                name="password"
                label="Enter Password"
              />
              <Text> By Containing you agree to Enjoy.</Text>
              <LogInButton onClick={() => loginUser()}> Login</LogInButton>
              <SignupText onClick={() => toggleSignup()}>
                New User. SignUp!
              </SignupText>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="firstName"
                label="Enter First Name"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="lastName"
                label="Enter Last Name"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="email"
                label="Enter Email"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Password"
              />
              <Text> By Containing you agree to Enjoy.</Text>
              <LogInButton onClick={() => signupUser()}> Signup</LogInButton>
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

//Note

/*
1. onChange={(e)=>onInputChange(e)} , we need it to take out value of what user is typing in box.
     jo value nikalta hai wo event ke ander se niaklta hai thus we need to pass "e".
2.    <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="firstName" label="Enter First Name" /> -> name field act as key while destructuring and then it is used to swtSignUp nad store the value written by user.
3.after successful signup we need to display name of user ,ie we need to move state from login dialog to custom button .To do so we need Contex.
    hence we are using data Provider as cotext 
*/
