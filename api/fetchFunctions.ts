import { Movies } from './types'

export const basicFetch = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(endpoint)

  if (!response.ok) throw new Error('Error!')

  const data = response.json()
  return data
}

//fetch functions

export const fetchMovies = async (search = '', page = 1): Promise<Movies> => {
  return await basicFetch<Movies>(`/api/movies?search=${search}&page=${page}`)
}
