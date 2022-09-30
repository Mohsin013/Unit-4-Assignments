import styled from "styled-components";

 const StyledBtn = styled.button`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  border-radius: ${(props) => props.radius};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border: ${(props) => `1px ${props.border} #111`};
`;

export default StyledBtn