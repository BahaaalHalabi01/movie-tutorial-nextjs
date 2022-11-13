import { getProviders, signIn, getSession } from 'next-auth/react'
import { GoogleProfile } from 'next-auth/providers/google'
import { GetServerSideProps } from 'next'
import { OAuthConfig } from 'next-auth/providers'

type Props = {
  providers: { google: OAuthConfig<GoogleProfile> }
}

export const SignIn: React.FC<Props> = ({ providers }) => {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div
          key={provider.name}
          className='m-auto flex justify-center h-96 items-center'
        >
          <button
            onClick={() => signIn(provider.id)}
            className='rounded-lg bg-blue-300 p-2 h-12'
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

export default SignIn

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders()
  const session = await getSession(context)

  if (session)
    return {
      props: { session },
      redirect: {
        destination: '/',
      },
    }

  return {
    props: { providers },
  }
}
