import {React,useEffect,useState} from 'react'
import Header from '../components/common/Header'
import {getCategoryMovies} from "../services/api"
import {NOWPLAYING_API_URL} from "../components/common/constants/constant"
import { Box,styled } from '@mui/material'
import Banner from '../components/common/Banner'
import UpNext from '../components/UpNext'
import Slide from '../components/Slide'

const Wrapper=styled(Box)`
display:flex;
padding:20px 0px;
`
const Component=styled(Box)`
padding:0 115px;
`
const Home = () => {

  const [movies,setMovies]=useState([])
  useEffect(()=>{
    const getData=async()=>{
      let response=await getCategoryMovies(NOWPLAYING_API_URL);
      setMovies(response.results);
    }
    getData();
  },[])
  return (
   <>
    <Header />
   <Component>
   <Wrapper>
      <Banner movies={movies} />
      <UpNext movies={movies} />
    </Wrapper>
    <Slide movies={movies} />
   </Component>
   </>
  )
}

export default Home