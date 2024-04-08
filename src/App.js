import { BrowserRouter } from "react-router-dom";
import Router from "./components/GlobalComponents/Router/AppRouter";
import './App.scss';
import { images } from "./utils/imagesToLoad";
import $ from 'jquery';
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const loadImage = (image) => {
    return new Promise((resolve, reject) => {
      const newImage = new Image();
      newImage.src = image;
      newImage.onload = () => {
        resolve(image);
      }
      newImage.onerror = (err) => reject(err);
    });
  };
  useEffect(() => {
    if (isLoading) {
      $('body').addClass("ovf-hidden");
    }
    Promise
      .all(images.map((image) => loadImage(image)))
      .then(() => setIsLoading(false))
      .catch((err) => console.log("Failed to load images", err));
  }, []);
  useEffect(() => {
    if (!isLoading) {
      $('body').removeClass("ovf-hidden");
    }
  }, [isLoading]);
  return (
    <div className="wrapper" >
      <div className={`preloader ${!isLoading && 'hidePreloader'}`}>
        <div className="lds-facebook"><div></div><div></div><div></div></div>
      </div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
