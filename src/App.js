import React, { useEffect } from "react";
import instance from "./axios";
import "./App.css";
import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// API https://api.themoviedb.org/3/movie=550?api_key= 88170d99a195633ba877280a25be1735
// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

// https://api.themoviedb.org/3/trending/all/day?api_key=88170d99a195633ba877280a25be1735/
const App = () => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAjncxxYKy97daQD3vsXdpk_DM_HKG236w",
    authDomain: "netflix-clone-b4749.firebaseapp.com",
    projectId: "netflix-clone-b4749",
    storageBucket: "netflix-clone-b4749.appspot.com",
    messagingSenderId: "171537108068",
    appId: "1:171537108068:web:fbb510c38eee553b2f6371",
    measurementId: "G-0DNF54CZLC",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  console.log(analytics);
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        isLargeRow={true}
        fetchUrl={requests.fetchTrending}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Horror Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Romance Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Documentaries" fetchUrl={requests.fetchTrending} />
      {/* <Row title="Top Rated" fetchUrl={requests.fetchTopRated} /> */}
      {/* <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} /> */}
      {/* <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} /> */}
      {/* <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} /> */}
      {/* <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} /> */}
      {/* <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
};

export default App;
