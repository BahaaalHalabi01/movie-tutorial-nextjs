export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string
      GOOGLE_CLIENT_ID: string
      GOOGLE_CLIENT_SECRET: string
      AUTH_URL: string
      AUTH_SECRET: string
      AUTH_RESEND_KEY:string
      EMAIL_SERVER: string
      EMAIL_FROM: string
      ENV: 'test' | 'dev' | 'prod'
    }
  }
}
