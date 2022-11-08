import {
  movieUrl,
  creditsUrl,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from '../config'
//functions
import { basicFetch } from '../api/fetchFunctions'
//components
import Header from '../components/Header/Header'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import MovieInfo from '../components/MovieInfo/MovieInfo'
import Grid from '../components/Grid/Grid'
import Card from '../components/Card/Card'
//types
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import type { Movie, Credits, Crew, Cast } from '../api/types'

const Movie: NextPage = () => (
  <main>
    <Header />
    <MovieInfo />
    <Grid>
      <Card />
    </Grid>
  </main>
)

export default Movie
