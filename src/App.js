import { BrowserRouter } from "react-router-dom";
import TheLayout from "./views/Layout/TheLayout";

function App() {
  return (
    <BrowserRouter>
        <TheLayout />
    </BrowserRouter>
  );
}

export default App;
