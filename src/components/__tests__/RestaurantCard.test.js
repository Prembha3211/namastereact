import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("KFC");

  expect(name).toBeInTheDocument();
});

// Homework correct this Test Case

// it("should render RestaurantCard component with Promoted Label", () => {
//   render(<PromotedRestaurantCard resData={MOCK_DATA} />);

//   const name = screen.getByText("Promoted");

//   expect(name).toBeInTheDocument();
// });
