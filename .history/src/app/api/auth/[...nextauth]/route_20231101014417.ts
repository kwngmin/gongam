import { authOptions } from '@/components/commons/lib/auth';
import NextAuth, { AuthOptions, NextAuthOptions } from 'next-auth';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
