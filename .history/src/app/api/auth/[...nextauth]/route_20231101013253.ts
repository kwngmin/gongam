import NextAuth, { AuthOptions, NextAuthOptions } from 'next-auth';
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google';
import { OAuthConfig } from 'next-auth/providers/oauth';
// interface Props extends NextAuthOptions {
//   app: {
//     signIn: string;
//   };
// }
const authOptions: NextAuthOptions = {
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
