import React from 'react';
import styled from "styled-components"
import { motion } from "framer-motion";
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: #3e9b79;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box2 = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: #3e9b79;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  return (
    <Wrapper>
      <Box transition={{ duration : 3 }} animate={{ borderRadius: "100px" }}/>
      <Box2
      transition={{ duration : 1 , type: "spring"}}  //tween 기본적으로 탑재 되어 있는 스프링 모션을 없앨 수 있다.
      initial={{ scale: 0 }} 
      animate={{ scale : 1, rotateZ: 360 }}/>
    </Wrapper>
  );
}

export default App;
