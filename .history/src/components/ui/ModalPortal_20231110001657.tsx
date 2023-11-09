type Props = {
    children: React.ReactNode
}
export default function ModalPortal({children}:Props) {
    if(typeof window === 'undefined') {
        return null
    }
    return (
    
    );
}

