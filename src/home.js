import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from "./Box";
import Content from "./Content";
import Questions from "./Questions";
import Start from "./Start";
import Sales from "./Sales";




const sty = {
  backgroundColor: '#0B0B45'
};

const Home = () => {
  return (
    <div style={sty}>
      <Start/>
      <Content />
      <Box/>
      <Sales/>
      <Questions />
      
    </div>
  );
};

export default Home;


