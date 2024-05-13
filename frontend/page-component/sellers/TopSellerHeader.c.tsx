import { Grid } from "@mui/joy";
import {
  SimpleOrangeBorderBlock,
  SpaceStyled,
} from "../../global-style/global.s";
import { WhiteText } from "../../global-component/Typography/WhiteText.t";
import IconComponent from "../../global-component/Icon.c";
import styled from "styled-components";
import { ORANGE_COLOR } from "../../config/colors";
import { FC, useState } from "react";

const TopSellerHeaderomponent: FC<{
  onSelected: (type: string) => void;
}> = ({ onSelected }) => {
  const [type, setType] = useState<string | any>();
  const onChangeType = (typeSelected: string) => {
    setType(typeSelected);
    onSelected(typeSelected);
  };
  return (
    <Grid container spacing={2} justifyContent={"space-between"}>
      <BorderGrid
        selected={type == "material"}
        onClick={() => onChangeType("material")}
        lg={1.9}
        container
        justifyContent={"space-between"}
      >
        <Grid lg={12} container justifyContent={"space-between"}>
          <Grid>
            <SpaceStyled top={5}>
              <WhiteText>مصالح فروشان</WhiteText>
            </SpaceStyled>
          </Grid>
          <Grid>
            <SpaceStyled top={5}>
              <IconComponent icon="store" width={20} height={20} />
            </SpaceStyled>
          </Grid>
        </Grid>
      </BorderGrid>
      <BorderGrid
        selected={type == "tool"}
        onClick={() => onChangeType("tool")}
        lg={1.9}
        container
        justifyContent={"space-between"}
      >
        <Grid lg={12} container justifyContent={"space-between"}>
          <Grid>
            <SpaceStyled top={5}>
              <WhiteText>ابزار فروشان</WhiteText>
            </SpaceStyled>
          </Grid>
          <Grid>
            <SpaceStyled top={5}>
              <IconComponent icon="store" width={20} height={20} />
            </SpaceStyled>
          </Grid>
        </Grid>
      </BorderGrid>
      <BorderGrid
        selected={type == "iron-wood"}
        onClick={() => onChangeType("iron-wood")}
        lg={1.9}
        container
        justifyContent={"space-between"}
      >
        <Grid lg={12} container justifyContent={"space-between"}>
          <Grid>
            <SpaceStyled top={5}>
              <WhiteText>آهن و چوب</WhiteText>
            </SpaceStyled>
          </Grid>
          <Grid>
            <SpaceStyled top={5}>
              <IconComponent icon="store" width={20} height={20} />
            </SpaceStyled>
          </Grid>
        </Grid>
      </BorderGrid>
      <BorderGrid
        selected={type == "stone-ceramic"}
        onClick={() => onChangeType("stone-ceramic")}
        lg={1.9}
        container
        justifyContent={"space-between"}
      >
        <Grid lg={12} container justifyContent={"space-between"}>
          <Grid>
            <SpaceStyled top={5}>
              <WhiteText>سنگ و سرامیک</WhiteText>
            </SpaceStyled>
          </Grid>
          <Grid>
            <SpaceStyled top={5}>
              <IconComponent icon="store" width={20} height={20} />
            </SpaceStyled>
          </Grid>
        </Grid>
      </BorderGrid>
      <BorderGrid
        selected={type == "electrical-water-facilities"}
        onClick={() => onChangeType("electrical-water-facilities")}
        lg={1.9}
        container
        justifyContent={"space-between"}
      >
        <Grid lg={12} container justifyContent={"space-between"}>
          <Grid>
            <SpaceStyled top={5}>
              <WhiteText>تاسیسات برقی و آبی</WhiteText>
            </SpaceStyled>
          </Grid>
          <Grid>
            <SpaceStyled top={5}>
              <IconComponent icon="store" width={20} height={20} />
            </SpaceStyled>
          </Grid>
        </Grid>
      </BorderGrid>
    </Grid>
  );
};
export default TopSellerHeaderomponent;
const BorderGrid: any = styled(Grid)`
  border: 2px solid ${ORANGE_COLOR};
  display: flex;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${(prop: any) => (prop?.selected ? ORANGE_COLOR : null)};
`;
