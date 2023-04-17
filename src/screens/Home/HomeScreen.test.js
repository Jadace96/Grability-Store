// vendors
import { render, screen } from "@testing-library/react-native";

// screens
import { HomeScreen } from ".";

describe("Home Screen Test Suit", () => {
  it("should render HomeScreen text", () => {
    render(<HomeScreen />);

    const TextComponent = screen.getByText(/^HomeScreen$/i); // full string match, ignore case => https://testing-library.com/docs/queries/about/#textmatch

    expect(TextComponent).toBeOnTheScreen();
  });
});
