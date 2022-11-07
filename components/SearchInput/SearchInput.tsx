import Image from 'next/image'
import React, { useState,useCallback } from 'react'
import _debounce from 'lodash/debounce'

type Props = {
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const DEBOUNCE_TIMEOUT = 500

const SearchInput: React.FC<Props> = ({ setQuery }) => {
  const [search, setSearch] = useState('')

  const debounceSearch = useCallback(_debounce(setQuery, DEBOUNCE_TIMEOUT), [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setSearch(value)
    debounceSearch(value)
  }

  return (
    <>
      <input
        className="h-10  pr-14 md:w-96 rounded-full p-4 text-md bg-zinc-700 text-white focus:outline-none focus:border focus:border-solid focus:border-cyan-200"
        type="text"
        placeholder="Search Movie"
        value={search}
        onChange={handleChange}
      />
      <div className="absolute right-4 top-8">
        <Image width="30" height="32" src="/tmdb-logo.svg" alt="logo" />
      </div>
    </>
  )
}

export default SearchInput