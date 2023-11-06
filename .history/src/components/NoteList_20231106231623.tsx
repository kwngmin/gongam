'use client'

import useSWR from 'swr';

export default function NoteList() {
    const {data. isLoading: loading} = useSWR('/api/posts')  
    console.log(data)
    return (
    <p>notelist</p>
    );
}

