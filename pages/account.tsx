import { GetServerSideProps } from 'next'
import { signOut, getSession } from 'next-auth/react'
import type { Session } from 'next-auth'

type Props = {
  session: Session
}

const Account: React.FC<Props> = ({ session }) => {
  return (
    <main>
      <div>
        <p>Welcome to your account {session?.user?.name}</p>
        <button onClick={() => signOut()}></button>
      </div>
    </main>
  )
}

export default Account

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session) {
    return {
      props: {},
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  } else
    return {
      props: { session },
    }
}
