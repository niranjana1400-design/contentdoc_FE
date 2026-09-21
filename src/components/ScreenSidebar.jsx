function ScreenSidebar({ screens, selectedScreen, onSelect }) {
  return (
    <aside className="sidebar">
      <h3>Screens</h3>

      <div className="screen-list">
        {screens.map((screen) => (
          <button
            key={screen.id}
            className={`screen-item ${
              selectedScreen.id === screen.id ? "active" : ""
            }`}
            onClick={() => onSelect(screen)}
          >
            <span className="screen-number">{screen.id}</span>
            <span>{screen.name}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}

export default ScreenSidebar;