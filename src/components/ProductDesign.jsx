import React from "react";
import Mustang from "./Mustang";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 200px;
  right: 200px;
`;

const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Stage enviroment="city" intensity={0.6}>
          <Mustang />
        </Stage>

        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </Desc>
    </>
  );
};

export default ProductDesign;
