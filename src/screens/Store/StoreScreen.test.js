// vendors
import { render, screen } from "@testing-library/react-native";

// screens
import { StoreScreen } from "./StoreScreen";

describe("Store Screen Test Suit", () => {
  it("should render StoreScreen text", () => {
    render(<StoreScreen />);

    const TextComponent = screen.getByText(/^StoreScreen$/i); // full string match, ignore case => https://testing-library.com/docs/queries/about/#textmatch

    expect(TextComponent).toBeOnTheScreen();
  });
});
