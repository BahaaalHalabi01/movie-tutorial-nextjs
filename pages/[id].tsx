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


type Props = {
  movie: Movie
  directors: Crew[]
  cast: Cast[]
}

const Movie: NextPage<Props> = ({ movie, cast, directors }) => (
  <main>
    <Header />
    <Breadcrumb title={movie.original_title} />
    <MovieInfo />
    <Grid>
      <Card />
    </Grid>
  </main>
)

export default Movie

export const getStaticProps: GetStaticProps = async (context) => {
  const REBUILD_TIME = 86400

  const id = context.params?.id as string

  const movieEndPoint: string = movieUrl(id)
  const creditsEndPPoint: string = creditsUrl(id)

  const movie = await basicFetch<Movie>(movieEndPoint)
  const credits = await basicFetch<Credits>(creditsEndPPoint)

  //get the directors only
  const directors = credits.crew.filter((member) => member.job === 'Director')

  return {
    props: {
      movie,
      directors,
      cast: credits.cast,
    },
    revalidate: REBUILD_TIME,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}