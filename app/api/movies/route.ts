import { NextRequest } from 'next/server'
import { basicFetch } from '../../../api/fetchFunctions'
import { Movies } from '../../../api/types'
import { POPULAR_BASE_URL, SEARCH_BASE_URL } from '../../../config'

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const page = searchParams.get('page')
  const search = searchParams.get('search')

  const endpoint = search
    ? `${SEARCH_BASE_URL}${search}&page=${page}`
    : `${POPULAR_BASE_URL}&page=${page}`

  const data = await basicFetch<Movies>(endpoint)

  return Response.json({ data })
}
