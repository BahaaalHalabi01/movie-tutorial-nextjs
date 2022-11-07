import type { NextPage } from 'next'
//config
import { IMAGE_BASE_URL,BACKDROP_SIZE,POSTER_SIZE } from '../config'
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


  const result = data?.pages[0].results[0]

  return (
    <main className="relative h-screen overflow-y-scroll">
      <Header setQuery={setQuery} />
      {!query && data && data.pages && result ? (
        <Hero
          imgUrl={
            result.backdrop_path
              ? IMAGE_BASE_URL + BACKDROP_SIZE + result.backdrop_path
              : '/no_image.jgp'
          }
          title={result.title}
          text={result.overview}
        />
      ) : null}

      <Grid
        className="p-4 max-w-7xl m-auto"
        title={
          query
            ? `Search Results: ${data?.pages[0]?.total_results}`
            : 'Popular Movies'
        }
      >
        {data && data.pages
          ? data.pages.map((page) =>
              page.results.map((movie) => (
                <div key={movie.id}>{movie.original_title}</div>
              ))
            )
          : null}
      </Grid>
      <Card />
      <Spinner />
    </main>
  )
}

export default Home
