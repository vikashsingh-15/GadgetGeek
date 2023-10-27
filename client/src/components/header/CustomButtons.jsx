
import { Box, Button, Typography,styled} from "@mui/material";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';// default export
import{ShoppingCart} from '@mui/icons-material'//named import technique
import LoginDialog from "../login/LoginDialog";
import { useState } from "react";



const Wrapper=styled(Box)`
display:flex;
margin-top:0 3% 0 auto;
&>button,&>p,&>div{
    margin-right:20px;
    font-size:16px;
    align-item:center;
}
`
const Container=styled(Box)`
display:flex;
`
const LoginButton=styled(Button)`
    color:white;
    background:#138D75;
    text-transform:none;
    padding:5px 50px;
    border-radius:2px;
    box-shadow:none;
    font-weight:bold;
    height:32px;
    &:hover {
      background: #117A65; /* Change the background color when hovering */
    } 
`

const CustomButtons = () => {

  const [open, setOpen] = useState(false);
  const openDialog=()=>{
    setOpen(true);
  }

  return (
    <Wrapper>
        <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>
        <Typography style={{marginTop:3,width:135,color:"white"}}>Becomen a seller</Typography>  
        <Typography style={{marginTop:3,width:100,color:"white"}}>More</Typography>  
        <Container style={{marginTop:3,width:135,color:"white"}}>
            <ShoppingCart/>
            <Typography style={{color:"white"}}>Cart</Typography>
        </Container>  
        <LoginDialog open={open}setOpen={setOpen}/>    
    </Wrapper>
  )
}

export default CustomButtons;



//NOTE
/**
 * 
 * 1. look difference between named Import vs Default Export in react
 * 2. Use state is react hook where we can store value
 * 3. <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton> in this line sinceit is react 
 *    'c' in onClick is capital had it been JS then "c" would have been small i.e. onclick()  becaues in React function are 
 *      wrapper thus we use capital 'C'.
 * 
 * 
 * 
 */