import type { NextPage } from 'next'
//hooks
import { useState } from 'react'
import { useFetchMovies } from '../api/fetchHooks'
//Components
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Grid from '../components/Grid/Grid'
import Card from '../components/Card/Card'
import Spinner from '../components/Spinner/Spinner'



const Home: NextPage = () => {

  const [query,setQuery] = useState('')
  const {data,fetchNextPage,isLoading,isFetching,error} = useFetchMovies(query)


  return (
    <main className='relative h-screen overflow-y-scroll'>
      <Header setQuery={setQuery} />
      <Hero/>
      <Grid/>
      <Card/>
      <Spinner/>
      </main>
  )
}

export default Home
