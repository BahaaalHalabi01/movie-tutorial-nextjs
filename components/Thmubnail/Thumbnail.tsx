import Image from 'next/image'

type Props = {
  imgUrl: string
}

const Thumbnail: React.FC<Props> = ({ imgUrl }) => {
  return (
    <Image
      placeholder='blur'
      blurDataURL='/placeholder.jpg'
      className='rounded-t-lg '
      layout='fill'
      objectFit='cover'
      src={imgUrl}
      alt='thumbnail'
    />
  )
}

export default Thumbnail
