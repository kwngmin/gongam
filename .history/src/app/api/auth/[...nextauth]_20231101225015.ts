import GoogleProvider from 'next-auth/providers/google';
// import { authOptions } from '@/components/commons/lib/auth';
import NextAuth from 'next-auth';

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
