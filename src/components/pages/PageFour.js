import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import {bounce,shake} from 'react-animations';

const Body = styled.div`
  padding:20px;
  width: 100%;
  height:100vh;
  text-align:center;
  p {
    font-size:1.5rem;
  }
`;

const Heading = styled.h1`
  color: blue;
  font-size: 2.5rem;
  text-align:center;
`;

const Paragraph = styled.p`
  color: #212121;
  text-align: left;
  margin: 10px 0;
`;

const Rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  50%  {
    transform: rotate(120deg);
  }

  75% {
    bottom: 50vh;
  }


  to  {
    transform: rotate(360deg);
  }
`;

const RotatingAnimation = styled.div`
  animation: ${Rotate360} 2s linear infinite;
`;

const BounceAnimation = keyframes `${bounce}`;
const ShakeAnimation = keyframes `${shake}`

const Shake = styled.div`
  animation: 5s ${ShakeAnimation} infinite;
`;

const Bounce = styled.div`
  animation: 3s ${BounceAnimation} infinite
`;




class PageFour extends Component {
  render() {

    return (
     <Body>
       {/* <Heading> <Shake>Page Four</Shake>
         <Paragraph><Bounce>Hello</Bounce></Paragraph>
       </Heading> */}
     </Body>
    );
  }


}


export default PageFour;
