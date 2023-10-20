
import "./app.css";

// Context Provider
import { MediaDisplayProvider } from "./Services/Context/media-display.context";

import { RouterProvider } from "react-router-dom";
import { router } from "./Services/router";

function App() {
  return (
    <MediaDisplayProvider>
      <RouterProvider router={router} />
    </MediaDisplayProvider>
  )
}

export default App;
