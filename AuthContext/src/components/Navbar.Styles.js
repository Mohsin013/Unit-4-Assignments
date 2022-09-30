import styled from "styled-components";

 const Stats = styled.span`
  color: ${(props) => (props.color ? "green" : "red")};
`;

export default Stats