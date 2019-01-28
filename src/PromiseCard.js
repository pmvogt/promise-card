import React from "react";
import styled from "styled-components";

const PromiseCardContainer = styled.div`
  background-color: #fff;
  border: 2px solid #12374d;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.09);
  gap: 32px;
  max-width: 600px;
  margin-top: 24px;
  @media (max-width: 700px) {
    gap: 0px;
  }
`;

const PromiseCardStatus = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const PromiseCardStatusIcon = styled.svg`
  width: 70px;
  height: 70px;
  fill: rgb(34, 185, 39);
`;

const PromiseCardStatusIconInTheWorks = styled(PromiseCardStatusIcon)`
  width: 70px;
  height: 70px;
  fill: red;
`;

const PromiseCardStatusLabel = styled.p`
  text-align: center;
  font-family: "Libre Franklin", sans-serif;
  color: #394146;
  line-height: 0px;
  font-weight: bolder;
`;

const PromiseCardText = styled.div`
  @media (max-width: 700px) {
    padding: 0px 16px 8px 16px;
  }
`;

const PromiseCardTextTitle = styled.h3`
  font-family: "Libre Franklin", sans-serif;
  @media (max-width: 700px) {
    text-align: center;
  }
`;

const PromiseCardTextBody = styled.p`
  font-family: "Libre Franklin", sans-serif;
  font-size: 14px;
  line-height: 1.2;
  max-width: 400px;
`;

class PromiseCard extends React.Component {
  render() {
    return (
      <PromiseCardContainer>
        <PromiseCardStatus>
          <PromiseCardStatusIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="65.902"
              height="101.921"
              viewBox="-48 3 124 124"
            >
              <path
                d="M 9.829 0.266 C 9.784 0.421 8.589 5.092 7.195 10.627 C 5.8 16.161 4.184 22.382 3.631 24.463 C 3.056 26.522 2.014 30.44 1.306 33.162 L 0 38.099 L 2.9 42.46 C 4.494 44.851 11.954 55.986 19.458 67.187 C 26.963 78.389 35.021 90.542 37.367 94.195 C 39.692 97.847 41.794 101.08 42.061 101.39 L 42.526 101.921 L 42.902 101.411 C 43.234 100.991 43.322 100.216 43.455 97.206 C 43.522 95.191 43.699 93.133 43.81 92.645 C 43.92 92.159 44.032 91.051 44.032 90.166 C 44.032 88.705 44.075 88.528 44.696 87.93 C 45.515 87.089 46.467 86.845 47.175 87.288 C 47.464 87.465 48.017 87.687 48.415 87.775 C 48.968 87.886 49.235 88.13 49.522 88.727 C 49.765 89.258 50.075 89.568 50.407 89.612 C 51.27 89.745 51.846 87.952 52.532 83.015 C 53.329 77.325 53.949 73.939 55.543 66.854 C 56.916 60.611 58.199 54.014 59.307 47.418 C 59.684 45.182 60.99 38.452 62.207 32.475 C 65.216 17.733 65.659 15.387 65.791 13.814 L 65.902 12.486 L 63.422 11.888 C 62.072 11.556 58.73 10.848 55.984 10.294 C 51.069 9.342 43.41 7.726 33.625 5.557 C 30.88 4.959 24.526 3.454 19.479 2.236 C 14.432 0.996 10.225 0 10.115 0 C 10.006 0.001 9.874 0.134 9.829 0.266 Z"
                fill="{this.props.color}"
              />
            </svg>
          </PromiseCardStatusIcon>
          <PromiseCardStatusLabel>Completed</PromiseCardStatusLabel>
        </PromiseCardStatus>

        <PromiseCardText>
          <PromiseCardTextTitle>
            End cash bail for pretrial release
          </PromiseCardTextTitle>
          <PromiseCardTextBody>
            <strong>Promise:</strong> Both candidates said they would support
            ending the policy of cash bail for pretrial release. "We definitely
            need to do that, hurr durr dad ruurrdurdururururrurur."
          </PromiseCardTextBody>
        </PromiseCardText>
      </PromiseCardContainer>
    );
  }
}

export default PromiseCard;
