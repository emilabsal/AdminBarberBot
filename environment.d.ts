declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOT_TOKEN: string;
      DATABASE_URL: string;
      NOTION_KEY: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export { }