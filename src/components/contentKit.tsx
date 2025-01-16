// contentKit.tsx
import Image from "astro/components/Image.astro";
import React from 'react';

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  data: { src: string; alt: string }[];
}

export const Heading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="text-2xl font-semibold">{children}</div>;
};

export const Text: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="opacity-85 font-medium leading-relaxed">{children}</div>;
};

export const Picture: React.FC<ImageProps> = ({ data, className, ...props }) => {
  return ( 
    <div className="border-4 border-yellow-800">
      <img src={data[0].src} alt={data[0].alt} className="opacity-10"/>
    </div>
  );
};

export const Divider: React.FC = () => {
  return <div className="pt-6 border-b border-neutral-200 dark:border-neutral-700" />;
};
