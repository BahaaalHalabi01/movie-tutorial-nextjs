import Link from 'next/link'

type Props = {
  title: string
}

const Breadcrumb: React.FC<Props> = ({ title }) => (
  <div className='bg-zinc-800'>
    <div className='flex items-center max-w-8xl m-auto p-4 text-white text-lg'>
      <Link href='/'>
        <span className='hover:opacity-80 cursor-pointer duration-300 hover:bg-zinc-500 hover:rounded hover:px-1'>
          Home
        </span>
      </Link>
      <span className='block px-2'>|</span>
      <span className='font-bold truncate'>{title}</span>
    </div>
  </div>
)

export default Breadcrumb
