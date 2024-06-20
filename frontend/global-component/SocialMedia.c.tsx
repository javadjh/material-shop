import { useEffect, useState } from "react";
import { SocialMediaBlock } from "../page-component/home/home.s";
import Link from "next/link";
import { getAppSettingService } from "../service/appsetting.service";

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
          <img src="/icons/instagram.png" width={20} />
        </Link>
        <Link href={media?.twitter || "/"}>
          <img src="/icons/twitter.png" width={20} />
        </Link>
        <Link href={media?.whatsapp || "/"}>
          <img src="/icons/whatsapp.png" width={20} />
        </Link>
        <Link href={media?.pinteres || "/"}>
          <img src="/icons/pinteres.png" width={20} />
        </Link>
        <Link href={media?.linkedin || "/"}>
          <img src="/icons/linkedin.png" width={20} />
        </Link>
        <Link href={media?.telegram || "/"}>
          <img src="/icons/telegram.png" width={20} />
        </Link>
        <Link href={media?.youtube || "/"}>
          <img src="/icons/youtube.png" height={20} />
        </Link>
      </SocialMediaBlock>
    </>
  );
};
export default SocialMediaComponent;
