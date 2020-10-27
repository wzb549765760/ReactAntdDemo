import styled from "styled-components";

export const border = ({ Comp }) => {
  const BorderdCopm = styled(Comp)`
  border-width:${props => props.width || "1px"};
  border-color:${props => props.color || "red"};
  border-style:${props => props.style || "solid"};
  border-radius:${props => props.radius || "0"}
  `
  return BorderdCopm;
}
