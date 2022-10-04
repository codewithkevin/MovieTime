import React, { useState, useEffect } from "react";
import axios from "axios";
import request from "./Request";

export const AppContext = React.createContext();

function AppProvider(props) {
  const [movies, setMovies] = React.useState([]);
  const [trialler, setTriallers] = React.useState([]);
  const [comedy, setComedy] = React.useState([]);
  const [upcoming, setUpcoming] = React.useState([]);
  const [mainImage, setMainImage] = React.useState([]);

  let one = request.requestPopular;
  let two = request.requestHorror;
  let three = request.requestComedy;
  let four = request.requestUpcoming;
  let five = request.requestImage;

  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);
  const requestThree = axios.get(three);
  const requestFour = axios.get(four);
  const requestFive = axios.get(five);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await axios
      .all([requestOne, requestTwo, requestThree, requestFour, requestFive])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          const responseThree = responses[2];
          const responseFour = responses[3];
          const responseFive = responses[4];
          setMovies(responseOne.data.results);
          setTriallers(responseTwo.data.results);
          setComedy(responseThree.data.results);
          setUpcoming(responseFour.data.results);
          setMainImage(responseFive.data);
        })
      )
      .catch((errors) => {
        console.error(errors);
      });
  };
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const value = {
    movies,
    trialler,
    comedy,
    upcoming,
    mainImage,
    isSwitchOn,
    setIsSwitchOn,
    onToggleSwitch,
  };
  // console.log(keys.adult);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export default AppProvider;
