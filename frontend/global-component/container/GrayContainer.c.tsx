import styled from "styled-components";
import { GRAY_COLOR } from "../../config/colors";
import { SMALL_FONT } from "../../config/font";

export const GrayContainerComponent = styled.div`
  background-color: ${GRAY_COLOR};
  margin-bottom: 10px;
  padding: 5px 15px;
  border-radius: 5px;
  font-size: ${SMALL_FONT} !important;
  width: 100%;
`;
