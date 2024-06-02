"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import StoriesList from "@/components/StoriesList";
import StoryViewer from "@/components/StoryViewer";

const HomeContainer: React.FC = () => {
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [stories, setStories] = useState<Story[]>([]);

  const getStories = async () => {
    await axios.get("/api/stories").then((response) => {
      setStories(response.data.stories);
    });
  };

  useEffect(() => {
    getStories();
  }, []);

  const handleSelect = (id: number) => setCurrentId(id);
  const handleNext = () =>
    setCurrentId((prev) =>
      prev !== null ? (prev < stories.length ? prev + 1 : prev) : null
    );
  const handlePrev = () =>
    setCurrentId((prev) =>
      prev !== null ? (prev > 1 ? prev - 1 : prev) : null
    );

  const handleClose = () => setCurrentId(null);
  return (
    <div className="bg-gray-900 text-white">
      {currentId === null ? (
        <StoriesList stories={stories} onSelect={handleSelect} />
      ) : (
        <StoryViewer
          handleClose={handleClose}
          stories={stories}
          currentId={currentId}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};

export default HomeContainer;
