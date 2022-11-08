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
  rating: number
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
      <div className='relative w-full h-128 md:w-1/2'>
        <Thumbnail imgUrl={thumbUrl} />
        <div className='absolute top-4 left-4 rounded-full bg-white w-10 h-10 flex justify-center items-center text-black text-sm font-bold'>
          {rating}
        </div>
      </div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, cum nam
        dolor temporibus aperiam expedita fugiat harum unde. Illo alias tempora
        excepturi reiciendis enim dolores eos officia nulla officiis velit.
      </div>
    </div>
  </div>
)

export default MovieInfo
