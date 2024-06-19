import "./App.css";
import LinksContainer from "./components/LinksContainer";
import ProfileContainer from "./components/ProfileContainer";

function App() {
  return (
    <>
      <div className="card-container">
        <div className="container">
          <ProfileContainer />
          <LinksContainer />
        </div>
      </div>
    </>
  );
}

export default App;
