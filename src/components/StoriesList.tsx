"use client";
import React from "react";
import Image from "next/image";

const StoriesList: React.FC<{
  onSelect: (id: number) => void;
  stories: Story[];
}> = ({ onSelect, stories }) => {
  return (
    <div className="flex overflow-x-scroll   space-x-4 p-4">
      {stories.map((story) => (
        <div
          key={story.id}
          className=" flex flex-col items-center justify-center
        "
        >
          <Image
            width={250}
            height={250}
            src={story.profilePic}
            alt={story.title}
            onClick={() => onSelect(story.id)}
            className="min-w-16 p-1 w-16 border-solid border-red-400 border-[1px]  object-cover cursor-pointer rounded-full"
          />
          <p className=" font-light text-sm">{story.name}</p>
        </div>
      ))}
    </div>
  );
};

export default StoriesList;
