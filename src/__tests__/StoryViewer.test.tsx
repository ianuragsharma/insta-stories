import StoryViewer from "@/components/StoryViewer";
import { storiesMock } from "@/mockData";
import { render, screen, fireEvent } from "@testing-library/react";
test("renders StoryViewer and navigates through stories", () => {
  const onNext = jest.fn();
  const onPrev = jest.fn();
  const onClose = jest.fn();

  //   const storiesMock = [
  //     {
  //       id: 1,
  //       name: "Anna",
  //       profilePic: "https://xsgames.co/randomusers/assets/avatars/female/39.jpg",
  //       imageUrl: "https://picsum.photos/200/300",
  //       title: "Story 1",
  //     },
  //     {
  //       id: 2,
  //       name: "Jane",
  //       profilePic:
  //         "https://xsgames.co/randomusers/assets/avatars/female/41.jpg ",
  //       imageUrl: "https://picsum.photos/300/300",
  //       title: "Story 2",
  //     },
  //     {
  //       id: 3,
  //       name: "Katty",
  //       profilePic: "https://xsgames.co/randomusers/assets/avatars/female/17.jpg",
  //       imageUrl: "https://picsum.photos/400/300",
  //       title: "Story 3",
  //     },
  //     {
  //       id: 4,
  //       name: "John",
  //       profilePic: "https://xsgames.co/randomusers/assets/avatars/male/28.jpg",
  //       imageUrl: "https://picsum.photos/600/400",
  //       title: "Story 4",
  //     },
  //     {
  //       id: 5,
  //       name: "Browny",
  //       profilePic: "https://xsgames.co/randomusers/assets/avatars/male/27.jpg",
  //       imageUrl: "https://picsum.photos/500/400",
  //       title: "Story 6",
  //     },
  //     {
  //       id: 6,
  //       name: "Brad",
  //       profilePic: "https://xsgames.co/randomusers/assets/avatars/male/35.jpg",
  //       imageUrl: "https://picsum.photos/300/400",
  //       title: "Story 7",
  //     },
  //     {
  //       id: 7,
  //       name: "Vikky",
  //       profilePic: "https://xsgames.co/randomusers/assets/avatars/female/9.jpg",
  //       imageUrl: "https://picsum.photos/400/400",
  //       title: "Story 8",
  //     },
  //   ];

  render(
    <StoryViewer
      stories={storiesMock}
      currentId={1}
      onNext={onNext}
      onPrev={onPrev}
      handleClose={onClose}
    />
  );

  fireEvent.click(screen.getByText("Next"));
  expect(onNext).toHaveBeenCalled();
  fireEvent.click(screen.getByText("Prev"));
  expect(onPrev).toHaveBeenCalled();
  fireEvent.click(screen.getByText("X"));
  expect(onClose).toHaveBeenCalled();
});
