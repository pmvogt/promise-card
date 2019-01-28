import React from "react";
import { render } from "react-dom";

import Wrapper from "./Wrapper";
import Title from "./Title";
import PromiseCard from "./PromiseCard";

const App = () => (
  <Wrapper>
    <PromiseCard />
    <PromiseCard />
    <PromiseCard />
    <PromiseCard />
  </Wrapper>
);

render(<App />, document.getElementById("root"));
