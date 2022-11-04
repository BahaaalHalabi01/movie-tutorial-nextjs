import Link from 'next/link'
import Image from 'next/image'
//Components
import SearchInput from '../SearchInput/SearchInput'


type Props = {
    setQuery?: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({setQuery}:Props) => {
  return (
    <div className='sticky flex top-0  z-40 w-full h-24 bg-zinc-900'>
        <div className="flex justify-between h-full w-full max-w-7xl px-4 m-auto">
            <Link href='/'>
                <div className="flex items-center cursor-pointer h-full">
                    <div className="hidden md:inline">
                        <Image width="150" height="50" src="/rmdb-logo.svg" alt="rmdb-logo"/>
                    </div>
                    <div className="inline md:hidden justify-start">
                        <Image width="42" height="50" src="/rmdb-logo-small.svg" alt="rmdb-logo-small"/>
                    </div>
                </div>
            </Link>
            {
                setQuery ? (
                    <div className='relative flex items-center'>
                        <SearchInput setQuery={setQuery} />
                    </div>

                ):null
            }
        </div>
    </div>
  )
}

export default Header