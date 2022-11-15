import { GetServerSideProps } from 'next'
import { signOut, getSession } from 'next-auth/react'
import type { Session } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  sessionData: Session
}
const Account: React.FC<Props> = ({ sessionData }) => {
  console.log(sessionData)
  return (
    <main>
      <div>
        <p>Welcome to your account {sessionData?.user?.name}</p>
        <p>Email: {sessionData?.user?.email}</p>
        <div>
          <Image
            src={sessionData?.user?.image || '/no_image.jpg'}
            height={200}
            width={200}
            alt='profile picture'
          />
        </div>

        <button onClick={() => signOut()}>Sign Out</button>
        <div>
          <Link href='/'>Home Page</Link>
        </div>
      </div>
    </main>
  )
}

export default Account

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await getSession(context)

  if (!data || data === null) {
    return {
      props: {},
      redirect: {
        destination: '/api/auth/signin',
      },
    }
  }

  return {
    props: { sessionData: data },
  }
}
