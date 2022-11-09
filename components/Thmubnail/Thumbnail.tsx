import Image from 'next/image'

type Props = {
  imgUrl: string
  className?: string
}

const Thumbnail: React.FC<Props> = ({ imgUrl, className }) => {
  return (
    <Image
      placeholder='blur'
      blurDataURL='/placeholder.jpg'
      className={className}
      layout='fill'
      objectFit='fill'
      src={imgUrl}
      alt='thumbnail'
    />
  )
}

export default Thumbnail
