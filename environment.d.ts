export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string
      GOOGLE_CLIENT_ID: string
      GOOGLE_CLIENT_SECRET: string
      NEXTAUTH_URL: string
      NEXTAUTH_SECRET: string
      ENV: 'test' | 'dev' | 'prod'
    }
  }
}
