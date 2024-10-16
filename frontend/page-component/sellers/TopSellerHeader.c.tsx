import { Grid, Typography } from "@mui/joy";
import {
  SimpleOrangeBorderBlock,
  SpaceStyled,
} from "../../global-style/global.s";
import IconComponent from "../../global-component/Icon.c";
import styled from "styled-components";
import { ORANGE_COLOR, WHITE_COLOR } from "../../config/colors";
import { FC, useState } from "react";
import { SMALL_FONT } from "../../config/font";

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
        className="outline-hover"
      >
        <Grid lg={12} container justifyContent={"space-between"}>
          <Grid>
            <SpaceStyled top={5}>
              <Typography
                textColor={type == "material" ? ORANGE_COLOR : WHITE_COLOR}
              >
                مصالح فروشان
              </Typography>
            </SpaceStyled>
          </Grid>
          <Grid>
            <SpaceStyled top={5}>
              <IconComponent icon="store" width={30} height={30} />
            </SpaceStyled>
          </Grid>
        </Grid>
      </BorderGrid>
      <BorderGrid
        className="outline-hover"
        selected={type == "tool"}
        onClick={() => onChangeType("tool")}
        lg={1.9}
        container
        justifyContent={"space-between"}
      >
        <Grid lg={12} container justifyContent={"space-between"}>
          <Grid>
            <SpaceStyled top={5}>
              <Typography
                textColor={type == "tool" ? ORANGE_COLOR : WHITE_COLOR}
              >
                ابزار فروشان
              </Typography>
            </SpaceStyled>
          </Grid>
          <Grid>
            <SpaceStyled top={5}>
              <IconComponent icon="store" width={30} height={30} />
            </SpaceStyled>
          </Grid>
        </Grid>
      </BorderGrid>
      <BorderGrid
        className="outline-hover"
        selected={type == "iron-wood"}
        onClick={() => onChangeType("iron-wood")}
        lg={1.9}
        container
        justifyContent={"space-between"}
      >
        <Grid lg={12} container justifyContent={"space-between"}>
          <Grid>
            <SpaceStyled top={5}>
              <Typography
                textColor={type == "iron-wood" ? ORANGE_COLOR : WHITE_COLOR}
              >
                آهن و چوب
              </Typography>
            </SpaceStyled>
          </Grid>
          <Grid>
            <SpaceStyled top={5}>
              <IconComponent icon="store" width={30} height={30} />
            </SpaceStyled>
          </Grid>
        </Grid>
      </BorderGrid>
      <BorderGrid
        className="outline-hover"
        selected={type == "stone-ceramic"}
        onClick={() => onChangeType("stone-ceramic")}
        lg={1.9}
        container
        justifyContent={"space-between"}
      >
        <Grid lg={12} container justifyContent={"space-between"}>
          <Grid>
            <SpaceStyled top={5}>
              <Typography
                textColor={type == "stone-ceramic" ? ORANGE_COLOR : WHITE_COLOR}
              >
                سنگ و سرامیک
              </Typography>
            </SpaceStyled>
          </Grid>
          <Grid>
            <SpaceStyled top={5}>
              <IconComponent icon="store" width={30} height={30} />
            </SpaceStyled>
          </Grid>
        </Grid>
      </BorderGrid>
      <BorderGrid
        className="outline-hover"
        selected={type == "electrical-water-facilities"}
        onClick={() => onChangeType("electrical-water-facilities")}
        lg={1.9}
        container
        justifyContent={"space-between"}
      >
        <Grid lg={12} container justifyContent={"space-between"}>
          <Grid>
            <SpaceStyled top={5}>
              <Typography
                textColor={
                  type == "electrical-water-facilities"
                    ? ORANGE_COLOR
                    : WHITE_COLOR
                }
                fontSize={SMALL_FONT}
              >
                تاسیسات برقی و آبی
              </Typography>
            </SpaceStyled>
          </Grid>
          <Grid>
            <SpaceStyled top={5}>
              <IconComponent icon="store" width={30} height={30} />
            </SpaceStyled>
          </Grid>
        </Grid>
      </BorderGrid>
    </Grid>
  );
};
export default TopSellerHeaderomponent;
const BorderGrid: any = styled(Grid)`
  outline: 2px solid
    ${(prop: any) => (prop?.selected ? ORANGE_COLOR : WHITE_COLOR)};
  display: flex;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  border-radius: 10px;
`;
