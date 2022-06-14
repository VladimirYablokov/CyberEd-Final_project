import AboutTheAuthor from "./components/AboutTheAuthor";
import GetBookCopyToday from "./components/GetBookCopyToday";
import MainPage from "./components/MainPage";
import Navigation from "./components/Navigation";
import TheAuthorBook from "./components/TheAuthorBook/TheAuthorBook";
import TrustedByTheBest from "./components/TrustedByTheBest";
import WhatWillYouLearn from "./components/WhatWillYouLearn/WhatWillYouLearn";


function App() {
  return (
    <div className="App">
      <Navigation/>
      <MainPage/>
      <TheAuthorBook/>
      <AboutTheAuthor/>
      <TrustedByTheBest/>
      <GetBookCopyToday/>
      <WhatWillYouLearn/>
    </div>
  );
}

export default App;
