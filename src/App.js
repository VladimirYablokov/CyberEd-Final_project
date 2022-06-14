import AboutTheAuthor from "./components/AboutTheAuthor";
import MainPage from "./components/MainPage";
import Navigation from "./components/Navigation";
import TheAuthorBook from "./components/TheAuthorBook/TheAuthorBook";


function App() {
  return (
    <div className="App">
      <Navigation/>
      <MainPage/>
      <TheAuthorBook/>
      <AboutTheAuthor/>
    </div>
  );
}

export default App;
