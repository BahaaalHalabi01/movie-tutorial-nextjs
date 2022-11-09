import Image from 'next/image'
//functions
import { calcTime, convertMoney } from '../../helpers'
//components
import Thumbnail from '../Thmubnail/Thumbnail'
import Pill from '../Pill/Pill'
//types
import { Crew } from '../../api/types'

type Props = {
  thumbUrl: string
  backgroundUrl: string
  title: string
  year: string
  summary: string
  rating: string
  directors: Crew[]
  time: number
  budget: number
  revenue: number
}

const MovieInfo: React.FC<Props> = ({
  backgroundUrl,
  budget,
  directors,
  rating,
  revenue,
  summary,
  thumbUrl,
  time,
  title,
  year,
}) => (
  <div className='relative w-full h-auto p-4'>
    <div className='relative h-full flex md:min-h-128 flex-col md:flex-row max-w-7xl p-4 m-auto z-10 rounded-xl bg-zinc-800 bg-opacity-90'>
      <div className='relative w-full h-128 md:w-1/2 min-w-1/3'>
        <Thumbnail imgUrl={thumbUrl} className='rounded-lg' />
        <div className='absolute top-4 left-4 rounded-full bg-white w-10 h-10 flex justify-center items-center text-black text-sm font-bold'>
          {rating}
        </div>
      </div>
      <div className='text-white px-0 py-4 md:py-0 text-center md:text-left md:px-8 w-full md:w-2/3'>
        <h2 className='text-2xl md:text-4xl font-bold pb-4'>
          {title} ({year})
        </h2>
        <h3 className='text-lg font-bold'>Summary</h3>
        <p className='mb-4 text-sm md:text-lg'>{summary}</p>
        <div>
          <div>
            <h3 className='text-lg font-bold'>
              Director{directors.length > 1 ? 's' : ''}
            </h3>
            <div>
              {directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <h3 className='text-lg font-bold'>Movie Information</h3>
          {time ? (
            <Pill className='ml-0' text={`Running time: ${calcTime(time)}`} />
          ) : null}
          {budget ? (
            <Pill className='ml-0' text={`Budget: ${convertMoney(budget)}`} />
          ) : null}
          {revenue ? (
            <Pill className='ml-0' text={`Revenue: ${convertMoney(revenue)}`} />
          ) : null}
        </div>
      </div>
    </div>
    <Image
      priority
      placeholder='blur'
      blurDataURL='/placeholder.jpg'
      objectFit='cover'
      objectPosition='center'
      layout='fill'
      src={backgroundUrl}
      alt='thumb'
    />
  </div>
)

export default MovieInfo
