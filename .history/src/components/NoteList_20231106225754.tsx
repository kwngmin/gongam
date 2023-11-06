'use client'

import useSWR from 'swr';

export default function NoteList() {
    const {data. isLoading: loading} = useSWR('/api/posts')  
    return (
    <p>notelist</p>
    );
}

