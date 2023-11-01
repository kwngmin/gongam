import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

interface Props extends NextAuthOptions {
  app: {
    signIn: string;
  };
}
export const authOptions: Props = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  secret: process.env.NEXTAUTH_SECRET || '',
};
