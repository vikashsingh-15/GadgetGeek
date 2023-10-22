
import { Box, Button, Typography,styled} from "@mui/material";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';// default export
import{ShoppingCart} from '@mui/icons-material'//named import technique





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
  return (
    <Wrapper>
        <LoginButton variant="contained">Login</LoginButton>
        <Typography style={{marginTop:3,width:135,color:"white"}}>Becomen a seller</Typography>  
        <Typography style={{marginTop:3,width:100,color:"white"}}>More</Typography>  
        <Container style={{marginTop:3,width:135,color:"white"}}>
            <ShoppingCart/>
            <Typography style={{color:"white"}}>Cart</Typography>
        </Container>      
    </Wrapper>
  )
}

export default CustomButtons;



//NOTE
/**
 * 
 * 1. look difference between named Import vs Default Export in react
 */