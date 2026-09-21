import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImportPage from "./pages/ImportPage";
import DocumentPreview from "./pages/DocumentPreview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ImportPage />} />
        <Route
          path="/document"
          element={<DocumentPreview />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;