
import { InputBase ,Box,styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searcontainer = styled(Box)`
background-color: #ffffff;
width:40%;
border-radius: 2px;
margin-left:10px;
display:flex;

`
const InputSearchBase = styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`

const SerachIconWrapper = styled(Box)`
color: #138D75;
padding: 2;
// margin-left:10px;
margin-top:5px;
font-size:onset;
display:flex;
`


const Search = () => {
  return (
    <Searcontainer>
        <InputSearchBase
        placeholder='Seach for Products'
        />
        <SerachIconWrapper>
            <SearchIcon />
        </SerachIconWrapper>
    </Searcontainer>
  )
}

export default Search;

