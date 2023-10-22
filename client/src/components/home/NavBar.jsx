

import { navData } from "../../constants/data";
import { Box,styled } from "@mui/material";

const Components=styled(Box)`
 display:flex;
 margin-top:10px;
 margin-bottom:10px;
 margin-left:175px;
 margin-right:175px;
 justify-content:space-between;
`
const Container=styled(Box)`
padding:5px 8px;
`

const NavBar = () => {
  return (
    <Components>
      {
        navData.map((item) => (
          <Container >
            <img src={item.url} alt="nav-img" style={{width:"75px"}} />
            {/* <Typography>{item.text}</Typography> */}
          </Container> 
          ))
        
        }


    </Components>
  )
}

export default NavBar
