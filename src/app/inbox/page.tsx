'use client';
import NoteList from '@/components/NoteList';
import Title from '@/components/ui/Title';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useState } from 'react';

export default function InboxPage() {
  const { data: session } = useSession();
  const inboxTitleData = {
    tabs: [
      { title: `Inbox`, query: '/api/inbox' },
      { title: `Private`, query: '/api/private' },
    ],
    description: `Record of thought, moments, feelings that I don't want to forget.`,
  };
  const [selectedTab, setSelectedTab] = useState(inboxTitleData.tabs[0]);

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <section className='max-w-screen-md mx-auto px-4 h-fit pb-10'>
      <Title
        titleData={inboxTitleData}
        selectedTab={selectedTab.title}
        setSelectedTab={setSelectedTab}
      />
      <NoteList query={selectedTab.query} />
    </section>
  );
}
