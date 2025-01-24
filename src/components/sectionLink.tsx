import React from 'react';

interface Props {
  title: string;
  targetId: string;
  progress: number;
}

const SectionLink: React.FC<Props> = ({ title, targetId, progress }) => {
  return (
    <div className="flex gap-3 items-center">
      <a href={`#${targetId}`} className="flex gap-3 items-center">
        <div className={`h-[2px] min-w-3 ${progress === 0 ? 'bg-neutral-400 dark:bg-neutral-500' : 'bg-black dark:bg-white'}`} />
        <div className="relative">
          <div className={`progress-line absolute bottom-1/2 transform translate-y-1/2 h-[2px] bg-black dark:bg-white`} style={{ width: `${progress * 100}%` }} />
          <div className={`font-semibold ${progress === 0 ? 'text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-offwhite transition-any' : ''}`}>{title}</div>
        </div>
      </a>
    </div>
  );
};

export default SectionLink;