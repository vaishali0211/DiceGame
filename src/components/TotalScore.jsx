import React from "react";
import styled from "styled-components";
function TotalScore({ score }) {
  return (
    <main>
      <ScoreConainer>
        <h1>{score}</h1>
        <p>Total Score</p>
      </ScoreConainer>
    </main>
  );
}

export default TotalScore;
const ScoreConainer = styled.div`
  text-align: center;
  max-width: 200px;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;
