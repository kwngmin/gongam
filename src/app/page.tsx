'use client';
import NoteList from '@/components/NoteList';
import Title from '@/components/ui/Title';
import { useState } from 'react';

export default function Home() {
  const mainTitleData = {
    tabs: [
      { title: `Notes`, query: '/api/notes' },
      { title: `Feeds`, query: `/api/feeds` },
    ],
    description: `Record of thought, moments, feelings that I don't want to forget.`,
  };
  const [selectedTab, setSelectedTab] = useState(mainTitleData.tabs[0]);

  return (
    <section className='max-w-screen-md mx-auto px-4 h-fit pb-10'>
      <Title
        titleData={mainTitleData}
        selectedTab={selectedTab.title}
        setSelectedTab={setSelectedTab}
      />
      <NoteList query={selectedTab.query} />
    </section>
  );
}
