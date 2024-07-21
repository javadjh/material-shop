import { useEffect, useState } from "react";
import { SocialMediaBlock } from "../page-component/home/home.s";
import Link from "next/link";
import { getAppSettingService } from "../service/appsetting.service";
import { ReactSVG } from "react-svg";
import { SpaceStyled } from "../global-style/global.s";

const SocialMediaComponent = () => {
  const [media, setMedia] = useState<any>({});
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await getAppSettingService();
    let links = res?.data?.data?.data;
    setMedia(links);
  };
  return (
    <>
      <SocialMediaBlock>
        <Link href={media?.instagram || "/"}>
          <SpaceStyled horizontal={5}>
            <div style={{ width: 25, height: 25 }}>
              <ReactSVG
                src="/icons/instagram.svg"
                style={{ color: "red" }}
                beforeInjection={(svg) => {
                  svg.classList.add("so-svg-class");
                }}
              />
            </div>
          </SpaceStyled>
        </Link>

        <Link href={media?.twitter || "/"}>
          <SpaceStyled horizontal={5}>
            <div style={{ width: 25, height: 25 }}>
              <ReactSVG
                src="/icons/twitter.svg"
                style={{ color: "red" }}
                beforeInjection={(svg) => {
                  svg.classList.add("so-svg-class");
                }}
              />
            </div>
          </SpaceStyled>
        </Link>

        <Link href={media?.whatsapp || "/"}>
          <SpaceStyled horizontal={5}>
            <div style={{ width: 25, height: 25 }}>
              <ReactSVG
                src="/icons/whatsapp.svg"
                style={{ color: "red" }}
                beforeInjection={(svg) => {
                  svg.classList.add("so-svg-class");
                }}
              />
            </div>
          </SpaceStyled>
        </Link>

        <Link href={media?.pinteres || "/"}>
          <SpaceStyled horizontal={5}>
            <div style={{ width: 25, height: 25 }}>
              <ReactSVG
                src="/icons/pinteres.svg"
                style={{ color: "red" }}
                beforeInjection={(svg) => {
                  svg.classList.add("so-svg-class");
                }}
              />
            </div>
          </SpaceStyled>
        </Link>

        <Link href={media?.linkedin || "/"}>
          <SpaceStyled horizontal={5}>
            <div style={{ width: 25, height: 25 }}>
              <ReactSVG
                src="/icons/linkedin.svg"
                style={{ color: "red" }}
                beforeInjection={(svg) => {
                  svg.classList.add("so-svg-class");
                }}
              />
            </div>
          </SpaceStyled>
        </Link>

        <Link href={media?.telegram || "/"}>
          <SpaceStyled horizontal={5}>
            <div style={{ width: 25, height: 25 }}>
              <ReactSVG
                src="/icons/telegram.svg"
                style={{ color: "red" }}
                beforeInjection={(svg) => {
                  svg.classList.add("so-svg-class");
                }}
              />
            </div>
          </SpaceStyled>
        </Link>

        <Link href={media?.youtube || "/"}>
          <SpaceStyled horizontal={5} top={-2}>
            <div style={{ width: 25, height: 25 }}>
              <ReactSVG
                src="/icons/youtube.svg"
                style={{ color: "red" }}
                beforeInjection={(svg) => {
                  svg.classList.add("so-svg-class");
                  svg.setAttribute(
                    "style",
                    `width : 28px !important ; height: 28px !important`
                  );
                }}
              />
            </div>
          </SpaceStyled>
        </Link>
      </SocialMediaBlock>
    </>
  );
};
export default SocialMediaComponent;
