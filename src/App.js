import AboutTheAuthor from "./components/AboutTheAuthor";
import ArticlesResources from "./components/ArticlesResources";
import Footer from "./components/Footer";
import GetBookCopyToday from "./components/GetBookCopyToday";
import MainPage from "./components/MainPage";
import Navigation from "./components/Navigation";
import TheAuthorBook from "./components/TheAuthorBook/TheAuthorBook";
import TrustedByTheBest from "./components/TrustedByTheBest";
import WhatWillYouLearn from "./components/WhatWillYouLearn/WhatWillYouLearn";
import { getArticles, getBooks, getPartners, getSkills } from './components/requests';
import { useEffect, useState } from 'react';

function App() {

  const [book, setBook] = useState([])
  const [partner, setPartner] = useState([])
  const [skill, setSkills] = useState([])
  const [article, setArticles] = useState([])

  useEffect(()=>{
    getBooks(setBook)
  },[])

  useEffect(()=>{
    getPartners(setPartner)
  },[])

  useEffect(()=>{
    getSkills(setSkills)
  },[])

  useEffect(()=>{
    getArticles(setArticles)
  },[])

  return (
    <div className="App">
      <Navigation/>
      <MainPage/>
      <TheAuthorBook books={book}/>
      <AboutTheAuthor/>
      <TrustedByTheBest partners={partner}/>
      <GetBookCopyToday/>
      <WhatWillYouLearn skills={skill}/>
      <ArticlesResources articles={article}/>
      <Footer/>
    </div>
  );
}

export default App;
