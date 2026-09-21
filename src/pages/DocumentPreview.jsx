import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScreenSidebar from "../components/ScreenSidebar";
import ContentEditor from "../components/ContentEditor";
import { mockScreens } from "../data/mockData";

function DocumentPreview() {
  const navigate = useNavigate();

  const [screens, setScreens] = useState(mockScreens);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedScreen = screens[selectedIndex];

  const updateScreen = (updatedScreen) => {
    setScreens((prev) =>
      prev.map((screen, index) =>
        index === selectedIndex
          ? updatedScreen
          : screen
      )
    );
  };

  const previousScreen = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const nextScreen = () => {
    if (selectedIndex < screens.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const exportDocument = (type) => {
    alert(`${type} export will be connected later.`);
  };

  return (
    <div className="preview-page">
      <header className="preview-header">
        <div className="logo">
          Content<span>Doc</span>
        </div>

        <button
          className="back-button"
          onClick={() => navigate("/")}
        >
          ← Back to Import
        </button>
      </header>

      <div className="preview-layout">
        <ScreenSidebar
          screens={screens}
          selectedScreen={selectedScreen}
          onSelect={(screen) => {
            const index = screens.findIndex(
              (item) => item.id === screen.id
            );

            setSelectedIndex(index);
          }}
        />

        <main className="document-content">
          <div className="document-heading">
            <div>
              <span className="small-label">
                DOCUMENT PREVIEW
              </span>

              <h1>{selectedScreen.name}</h1>
            </div>

            <div className="export-buttons">
              <button
                onClick={() => exportDocument("PDF")}
              >
                Export PDF
              </button>

              <button
                className="export-primary"
                onClick={() => exportDocument("Word")}
              >
                Export Word
              </button>
            </div>
          </div>

          <div className="screen-preview">
            <img
              src={selectedScreen.image}
              alt={selectedScreen.name}
            />
          </div>

          <ContentEditor
            screen={selectedScreen}
            setScreen={updateScreen}
          />

          <div className="navigation-buttons">
            <button
              onClick={previousScreen}
              disabled={selectedIndex === 0}
            >
              ← Previous
            </button>

            <span>
              {selectedIndex + 1} / {screens.length}
            </span>

            <button
              onClick={nextScreen}
              disabled={
                selectedIndex === screens.length - 1
              }
            >
              Next →
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DocumentPreview;