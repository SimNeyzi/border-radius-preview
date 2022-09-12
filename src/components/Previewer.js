import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.section`
  padding: 5px;
  background: papayawhip;
  display: flex;
  justify-content: space-between;
`;

const Radius = styled.input`
  padding: 2px;
  margin: 5px 20px 5px 20px;
  width: 20px;
`;

function Previewer() {
  const [topLeft, setTopLeft] = useState("0");
  const [topRight, setTopRight] = useState("0");
  const [bottomLeft, setBottomLeft] = useState("0");
  const [bottomRight, setBottomRight] = useState("0");

  const Box = styled.div`
    border: 1px solid;
    width: 240px;
    height: 240px;
    border-radius: ${topLeft +
    "% " +
    topRight +
    "% " +
    bottomLeft +
    "% " +
    bottomRight +
    "%"};
  `;

  useEffect(() => {
    return () => {
      console.log("changed state");
    };
  }, [topLeft, topRight, bottomLeft, bottomRight]);

  return (
    <Container>
      <Wrapper>
        <Radius
          type="text"
          onChange={(e) => setTopLeft(e.target.value)}
          value={topLeft}
        />
        <Radius
          type="text"
          onChange={(e) => setTopRight(e.target.value)}
          value={topRight}
        />
      </Wrapper>
      <Box>BOX</Box>
      <Wrapper>
        <Radius
          type="text"
          onChange={(e) => setBottomLeft(e.target.value)}
          value={bottomLeft}
        />
        <Radius
          type="text"
          onChange={(e) => setBottomRight(e.target.value)}
          value={bottomRight}
        />
      </Wrapper>
    </Container>
  );
}

export default Previewer;
