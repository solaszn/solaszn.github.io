// contentKit.tsx
import Image from "astro/components/Image.astro";
import React from 'react';

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  data: { src: string; alt: string }[];
}

export const Heading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="text-2xl font-semibold pb-2">{children}</div>;
};

export const Text: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="opacity-85 font-medium leading-relaxed pb-4">{children}</div>;
};

export const Quote: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="text-2xl italic font-medium pt-4 pb-8 text-neutral-800 dark:text-offwhite">{children}</div>;
};

export const Picture: React.FC<ImageProps> = ({ data, className, ...props }) => {
  return ( 
    <div className="border-4 border-yellow-800">
      <img src={data[0].src} alt={data[0].alt} className="opacity-10"/>
    </div>
  );
};

export const Divider: React.FC = () => {
  return <div className="pt-8 border-b border-neutral-200 dark:border-neutral-700" />;
};

export const InfoGrid: React.FC<{ data: { label: string; value: string | string[] }[] }> = ({ data }) => {
  return (
    <div className="flex gap-x-10 pb-8">
      <div className="flex flex-col justify-between">
        {data.slice(0, 2).map((item, index) => (
          <div key={index} className="max-w-60">
            <div className="opacity-50 uppercase font-bold underline mb-4">{item.label}</div>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
      <div>
        <div className="opacity-50 uppercase font-bold underline mb-4">{data[2].label}</div>
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
    <div className="pb-8">
      <div className="w-full p-8 bg-[#AEAEAE]/15">
        <div className="flex justify-between items-center max-w-[600px] gap-6 mx-auto flex-wrap">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-4xl ">{item.value}</div>
              <div className="max-w-20">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Card: React.FC<{ data: { label: string; value: string }[] }> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 pb-8">
      {data.map((item, index) => (
        <div key={index} className="bg-[#AEAEAE]/15 p-3 rounded w-full">
          <div className="text-lg font-bold mb-2">{item.label}</div>
          <div className="opacity-80">{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export const List: React.FC<{ data: { label: string; value: string }[] }> = ({ data }) => {
  return (
    <div className="">
      {data.map((item, index) => (
        <ul key={index} className="flex items-start list-disc pb-4">
          <li className="ml-5 pb-4">
            <div className="text-lg font-semibold mb-1">{item.label}</div>
            <div className="">{item.value}</div>
          </li>
        </ul>
      ))}
    </div>
  )
}