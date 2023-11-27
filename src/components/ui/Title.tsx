import { Dispatch, SetStateAction } from 'react';

type Props = {
  titleData: TitleData;
  selectedTab?: string;
  setSelectedTab?: Dispatch<SetStateAction<{ title: string; query: string }>>;
};

type TitleData = {
  title?: string;
  tabs?: TabData[];
  description: string;
};

type TabData = { title: string; query: string };

export default function Title({
  titleData,
  selectedTab,
  setSelectedTab,
}: Props) {
  const { title, description, tabs } = titleData;

  const handleClick = ({ title, query }: TabData) => {
    if (setSelectedTab) {
      setSelectedTab({ title, query });
    }
  };

  return (
    <div className='pt-14 pb-16'>
      {tabs ? (
        <h1 className='text-2xl font-bold mb-2'>
          <button
            onClick={() => handleClick(tabs[0])}
            className={`${selectedTab !== tabs[0].title && 'text-gray-400'}`}
          >
            {tabs[0].title}
          </button>
          <span className='mx-2 text-gray-200'>/</span>
          <button
            onClick={() => handleClick(tabs[1])}
            className={`${selectedTab !== tabs[1].title && 'text-gray-400'}`}
          >
            {tabs[1].title}
          </button>
        </h1>
      ) : (
        <h1 className='text-2xl font-bold mb-2'>
          <span>{title}</span>
        </h1>
      )}
      <p className='text-black/50 break-keep'>{description}</p>
    </div>
  );
}
