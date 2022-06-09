import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
`;

interface CircleProps {
  bgColor: string;
  otherThings?: boolean;
}

function Circle({ bgColor, otherThings }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
