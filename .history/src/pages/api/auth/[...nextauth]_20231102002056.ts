import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    process.env.VERCEL_ENV === 'preview'
      ? CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: {
              label: 'Username',
              type: 'text',
              placeholder: 'jsmith',
            },
            password: { label: 'Password', type: 'password' },
          },
          async authorize() {
            return {
              id: 1,
              name: 'J Smith',
              email: 'jsmith@example.com',
              image: 'https://i.pravatar.cc/150?u=jsmith@example.com',
            };
          },
        })
      : GoogleProvider({
          clientId: process.env.GOOGLE_OAUTH_ID || '',
          clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
        }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
};

export default NextAuth(authOptions);
