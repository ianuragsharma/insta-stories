"use client";
import CloseIcon from "@/icon/CloseIcon";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const StoryViewer: React.FC<{
  stories: Story[];
  currentId: number;
  onNext: () => void;
  onPrev: () => void;
  handleClose: () => void;
}> = ({ stories, currentId, onNext, onPrev, handleClose }) => {
  const [currentStory, setCurrentStory] = useState<Story | null>(null);

  useEffect(() => {
    const story = stories.find((s) => s.id === currentId);
    if (story) setCurrentStory(story);
  }, [currentId, stories]);

  useEffect(() => {
    const timer = setInterval(onNext, 5000);
    return () => clearInterval(timer);
  }, [onNext]);

  if (!currentStory) return null;

  const handleCloseStory = () => {
    handleClose();
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-black">
      <div className="flex w-[90%] absolute items-center top-2 left-4 ">
        <Image
          width={1000}
          height={1000}
          src={currentStory.profilePic}
          alt={currentStory.title}
          className="object-contain w-8 rounded-full"
        />
        <p className=" px-4">{currentStory.name}</p>
        <div
          onClick={handleCloseStory}
          className="ml-auto z-10 bg-gray-400 w-6 p-1 flex items-center justify-center rounded-full top-2 right-20"
        >
          <CloseIcon />
        </div>
      </div>
      <Image
        width={1000}
        height={1000}
        src={currentStory.imageUrl}
        alt={currentStory.title}
        className="object-contain h-full "
      />

      <div className="absolute  inset-0 flex justify-between items-center">
        <div className="w-1/2 h-full cursor-pointer" onClick={onPrev}></div>
        <div className="w-1/2 h-full cursor-pointer" onClick={onNext}></div>
      </div>
    </div>
  );
};

export default StoryViewer;
