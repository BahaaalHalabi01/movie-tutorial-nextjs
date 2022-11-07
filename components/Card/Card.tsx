//components
import Thumbnail from '../Thmubnail/Thumbnail'

type Props = {
  imgUrl: string
  title: string
  subtitle?: string
}

const Card: React.FC<Props> = ({ imgUrl, title, subtitle }) => {
  return (
    <div className='h-80 mb-6'>
      <div className='relative h-full'>
        <Thumbnail imgUrl={imgUrl} />
      </div>
      <div className='w-full px-4 py-2 rounded-b-xl bg-zinc-800'>
        <h2 className='text-cyan-200 text-center text-sm truncate'>{title}</h2>
        {subtitle ? (
          <p className='text-cyan-400 text-center text-xs truncate'>
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default Card
