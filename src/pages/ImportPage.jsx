import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function ImportPage() {
  const navigate = useNavigate();

  const [figmaUrl, setFigmaUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isValidFigmaUrl = (url) => {
    return url.includes("figma.com");
  };

  const generateDocument = () => {
    setError("");

    if (!figmaUrl.trim()) {
      setError("Please enter a Figma file URL.");
      return;
    }

    if (!isValidFigmaUrl(figmaUrl)) {
      setError("Please enter a valid Figma URL.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/document");
    }, 1200);
  };

  const trySample = () => {
    setFigmaUrl(
      "https://www.figma.com/design/sample-content-document"
    );
    setError("");
  };

  return (
    <div className="page">
      <Navbar />

      <main className="import-container">
        <section className="hero">
          <div className="badge">FIGMA → CONTENT DOC</div>

          <h1>
            Convert your Figma design
            <span> into a structured content document.</span>
          </h1>

          <p>
            Extract screens, headings, paragraphs, buttons,
            forms and navigation from your Figma design and
            organize them into an editable document.
          </p>

          <div className="import-card">
            <label>Figma File URL</label>

            <input
              type="url"
              placeholder="https://www.figma.com/design/..."
              value={figmaUrl}
              onChange={(e) => {
                setFigmaUrl(e.target.value);
                setError("");
              }}
            />

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <div className="button-group">
              <button
                className="secondary-button"
                onClick={trySample}
              >
                Try Sample File
              </button>

              <button
                className="primary-button"
                onClick={generateDocument}
                disabled={loading}
              >
                {loading
                  ? "Generating..."
                  : "Generate Document"}
              </button>
            </div>

            {loading && (
              <div className="loading">
                <div className="spinner"></div>
                Extracting your Figma content...
              </div>
            )}
          </div>
        </section>

        <section
          className="how-it-works"
          id="how-it-works"
        >
          <div>
            <span className="step-number">01</span>
            <h3>Paste Figma URL</h3>
            <p>
              Add the link to your Figma design.
            </p>
          </div>

          <div>
            <span className="step-number">02</span>
            <h3>Extract Content</h3>
            <p>
              Screens and content are organized automatically.
            </p>
          </div>

          <div>
            <span className="step-number">03</span>
            <h3>Review & Edit</h3>
            <p>
              Edit your extracted content before exporting.
            </p>
          </div>

          <div>
            <span className="step-number">04</span>
            <h3>Export</h3>
            <p>
              Export your finished document.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ImportPage;