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

export const Quote: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="text-2xl italic font-medium py-6 text-neutral-800 dark:text-offwhite">{children}</div>;
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

export const InfoGrid: React.FC<{ data: { label: string; value: string | string[] }[] }> = ({ data }) => {
  return (
    <div className="flex gap-x-10 py-6">
      <div className="flex flex-col justify-between">
        {data.slice(0, 2).map((item, index) => (
          <div key={index} className="max-w-60">
            <div className="opacity-50 uppercase font-bold underline mb-3">{item.label}</div>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
      <div>
        <div className="opacity-50 uppercase font-bold underline mb-3">{data[2].label}</div>
        <div>
          {Array.isArray(data[2].value) ? (
            <ul className="list-none space-y-3">
              {data[2].value.map((val, index) => (
                <li key={index}>{val}</li>
              ))}
            </ul>
          ) : (
            <div>{data[2].value}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export const StatGrid: React.FC<{ data: { label: string; value: string }[] }> = ({ data }) => {
  return (
    <div className="w-full py-6 px-4 bg-neutral-50 dark:bg-neutral-900">
      <div className="flex justify-between items-center max-w-[600px] gap-6 mx-auto">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="text-4xl font-light">{item.value}</div>
            <div className="max-w-20">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
