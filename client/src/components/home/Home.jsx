
import { Fragment } from "react"

//components

import {styled, Box } from "@mui/material"
import NavBar from "./NavBar"
import Banner from "./Banner"


const Component=styled(Box)`
padding : 10px 10px;
background-color : #f5f5f5;
`

const Home = () => {
  return (
    <>
    <Component>
        <Banner/>
    </Component>
        <NavBar/>
    </>
   
  )
}

export default Home


//Note

/**
 * 
 * 1. instead of fragnment  ( <>.....</> )ecan also use div .
 *     use of div is not recommended as it is not a react component annd it is slow.
 *      fragmant or di is needed as we cannot return multiple elements using reactJSX. 
 *      so multiple elements are wrapped in single elemnt using div or fragnmants.
 * 
 * 
 * 
 */