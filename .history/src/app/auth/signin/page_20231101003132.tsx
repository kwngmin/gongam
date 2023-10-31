import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

export default function SignInPage() {
    const session = await getServerSession(authOptions)
    return (
    
    );
}

