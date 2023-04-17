// vendors
import { SafeAreaProvider } from "react-native-safe-area-context";

// navigation
import { Navigation } from "./src/navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
