import styled from "styled-components";

export const CenterStyled = styled.div`
  justify-content: center;
  display: flex;
  align-content: center;
  width: 100%;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;
export const MarginStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenterVerticalStyled = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
export const SpaceStyled: any = styled.div`
  margin-top: ${(props: any) => props.top || props.vertical || 0}px;
  margin-bottom: ${(props: any) => props.bottom || props.vertical || 0}px;

  margin-right: ${(props: any) => props.right || props.horizontal || 0}px;
  margin-left: ${(props: any) => props.left || props.horizontal || 0}px;
`;
export const PaddingStyled = styled.div`
  padding-top: ${(props: any) => props.top || props.vertical || 0}px;
  padding-bottom: ${(props: any) => props.bottom || props.vertical || 0}px;

  padding-right: ${(props: any) => props.right || props.horizontal || 0}px;
  padding-left: ${(props: any) => props.left || props.horizontal || 0}px;
`;
export const Pointer = styled.span`
  cursor: pointer;
`;
