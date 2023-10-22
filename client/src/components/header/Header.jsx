
import {AppBar,Toolbar,styled,Box} from '@mui/material';

//components
import Search from'./Search';
import CustomButtons from './CustomButtons';

const StyledHeader=styled(AppBar)`
background: #138D75;
height:55px;
`

const StyledBox=styled(Box)`
    display: flex;
    align-items: center;
    margin-left: 12%;
    line-height: 0;
`

const CustomBoxWrapper=styled(Box)`
padding: 0 20px;
mardin:0 5% 0 auto;
`

const Header=()=>{

    const logoUrl="https://i.ibb.co/7Cm5gSp/Gadget-Geek-Logo.png";
    return(
       <StyledHeader>
        <Toolbar style={{minHeight:55}}>
            <StyledBox>
            {/* <img src={logoUrl} alt="logo" style={{width:100}} /> */}
            <img src={logoUrl} alt="logo"/>
            </StyledBox>
            <Search/>
            <CustomBoxWrapper>
                <CustomButtons/>
            </CustomBoxWrapper>
        </Toolbar>
       </StyledHeader>
    )

}

export default Header;









// NOTE
/*
1. <img src={logoUrl} alt="logo" style={{width:100}} /> -> when styling image by command line (style) we use double
   curley braces beacuse style there will be a variable so it will be plaed in a curley braces and we apply style 
   in an object thus other curley braces so first curley braces because it is variable and inner cutrley braces 
   as it is object

2. inside styled (inside mui) tag we use lowercase - hyphen based naming conventaion and 
   in style tag(inline styling of image) use use cammelCase naming convention.

*/