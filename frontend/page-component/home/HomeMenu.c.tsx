import { Pointer, SpaceStyled } from "../../global-style/global.s";

const HomeMenuComponent = () => {
  return (
    <>
      <Pointer>
        <SpaceStyled bottom={10}>
          <img src="./icons/user.png" width={35} />
        </SpaceStyled>
      </Pointer>
      <Pointer>
        <SpaceStyled bottom={10}>
          <img src="./icons/menu.png" width={35} />
        </SpaceStyled>
      </Pointer>
      <Pointer>
        <SpaceStyled bottom={10}>
          <img src="./favlogo.png" width={35} />
        </SpaceStyled>
      </Pointer>
    </>
  );
};
export default HomeMenuComponent;
