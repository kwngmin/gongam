import NextAuth, { AuthOptions, NextAuthOptions } from 'next-auth';
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google';
import { OAuthConfig } from 'next-auth/providers/oauth';
interface Props extends AuthOptions = {
  app: {
    signIn: string;
  };
};
const authOptions: Props = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
  ],
  app: {
    signIn: '/auth/signin',
  },
  secret: process.env.NEXTAUTH_SECRET || '',
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
