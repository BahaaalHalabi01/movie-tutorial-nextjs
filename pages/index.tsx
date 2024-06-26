import Link from 'next/link'
import type { NextPage } from 'next'
//config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config'
//hooks
import React, { useState } from 'react'
import { useFetchMovies } from '../api/fetchHooks'
//Components
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Grid from '../components/Grid/Grid'
import Card from '../components/Card/Card'
import { Error } from '../components/Error/Error'
import Spinner from '../components/Spinner/Spinner'

const Home: NextPage = () => {
  const [query, setQuery] = useState('')
  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query)

  const result = data?.pages[0].results[0]

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget
    if (scrollHeight - scrollTop === clientHeight) fetchNextPage()
  }

  const loading = isFetching || isLoading

  return (
    <main
      className='relative h-screen overflow-y-scroll'
      onScroll={handleScroll}
    >
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
        className='p-4 max-w-7xl m-auto'
        title={
          query
            ? `Search Results: ${data?.pages[0]?.total_results}`
            : 'Popular Movies'
        }
      >
        {data && data.pages
          ? data.pages.map((page) =>
              page.results.map((movie) => (
                <Link key={movie.id} href={`/${movie.id}`}>
                  <div className='cursor-pointer hover:opacity-80 duration-300'>
                    <Card
                      imgUrl={
                        movie.poster_path
                          ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                          : '/no_image.jpg'
                      }
                      title={movie.title}
                    />
                  </div>
                </Link>
              ))
            )
          : null}
        {loading && !error ? <Spinner /> : null}
        {error && !loading ? (
          <div className='col-span-full'>
            <Error />
          </div>
        ) : null}
      </Grid>
    </main>
  )
}

export default Home
