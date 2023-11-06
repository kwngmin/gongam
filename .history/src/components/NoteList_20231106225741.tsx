'use client'

import useSWR from 'swr';

export default function NoteList() {
    const {data. isLoading: loading} = useSWR()  
    return (
    <p>notelist</p>
    );
}

