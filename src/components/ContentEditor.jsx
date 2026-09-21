function ContentEditor({ screen, setScreen }) {
  const updateField = (field, value) => {
    setScreen((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const updateArray = (field, index, value) => {
    setScreen((prev) => {
      const updated = [...prev[field]];
      updated[index] = value;

      return {
        ...prev,
        [field]: updated
      };
    });
  };

  const renderArray = (label, field) => (
    <div className="editor-section">
      <label>{label}</label>

      {screen[field].map((item, index) => (
        <input
          key={index}
          value={item}
          onChange={(e) =>
            updateArray(field, index, e.target.value)
          }
        />
      ))}
    </div>
  );

  return (
    <div className="editor">
      <h2>Content Details</h2>

      <div className="editor-section">
        <label>Screen Name</label>

        <input
          value={screen.name}
          onChange={(e) =>
            updateField("name", e.target.value)
          }
        />
      </div>

      <div className="editor-section">
        <label>Purpose</label>

        <textarea
          value={screen.purpose}
          onChange={(e) =>
            updateField("purpose", e.target.value)
          }
        />
      </div>

      {renderArray("Headings", "headings")}
      {renderArray("Paragraphs", "paragraphs")}
      {renderArray("Buttons", "buttons")}
      {renderArray("Form Fields", "formFields")}
      {renderArray("Navigation", "navigation")}
    </div>
  );
}

export default ContentEditor;
