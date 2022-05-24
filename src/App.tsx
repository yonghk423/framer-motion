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
const myVars = {
  start: { scale: 0 },
  end: { scale : 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } }
}
const circleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
}
const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
}

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Circle = styled(motion.div)`
  background-color: #e59d9d;
  height: 70px;
  width: 70px;
  border-radius: 40px;
  place-self: center;
`;
const Box2 = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: #5445a9;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box3 = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(225, 225, 225, 0.2);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  return (
    <Wrapper>
      {/* <Box transition={{ duration : 3 }} animate={{ borderRadius: "100px" }}/>
      <Box2
      transition={{ duration : 1 , type: "spring"}}  //tween 기본적으로 탑재 되어 있는 스프링 모션을 없앨 수 있다.
      initial={{ scale: 0 }} //initial : 애니메이션의 초기 스타일 // animate : 애니메이션의 최종 스타일
      animate={{ scale : 1, rotateZ: 360 }} />  
      <Box3 variants={myVars} initial="start" animate="end"/>  */}
      <Box variants={boxVariants} initial="start" animate="end">
          <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
}

export default App;
