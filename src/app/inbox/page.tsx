// 'use client';
import NotePost from '@/components/NotePost';
import Title from '@/components/ui/Title';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { useState } from 'react';

export default async function InboxPage() {
  const session = await getServerSession(authOptions);
  // const titleData = {
  //   title: `Inbox`,
  //   subtitle: 'Private',
  //   description: `128 Note and 12 Private Notes.`,
  // };
  const inboxTitleData = {
    tabs: [
      { title: `Notes`, query: '/api/notes' },
      { title: `Feeds`, query: '/api/feeds' },
    ],
    description: `Record of thought, moments, feelings that I don't want to forget.`,
  };
  const [selectedTab, setSelectedTab] = useState(inboxTitleData.tabs[0]);
  if (!session) {
    redirect('/auth/signin');
  }
  return (
    <section className='max-w-screen-md mx-auto px-4 h-fit pb-10'>
      {/* <Title
        titleData={inboxTitleData}
        selectedTab={selectedTab.title}
        setSelectedTab={setSelectedTab}
      /> */}
      {/* <NotePost /> */}
    </section>
  );
}
