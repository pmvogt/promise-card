import React from "react";
import { render } from "react-dom";

import Wrapper from "./Wrapper";
import Title from "./Title";
import PromiseCard from "./PromiseCard";

import { Animated } from "react-animated-css";

const App = () => (
  <Wrapper>
    <Animated animationIn="bounceInUp" animationOut="fadeOut">
      <PromiseCard />
      <PromiseCard />
      <PromiseCard />
      <PromiseCard />
    </Animated>
  </Wrapper>
);

render(<App />, document.getElementById("root"));
