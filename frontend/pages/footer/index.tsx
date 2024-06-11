import HomeLayoutMenuComponent from "../../page-component/home-layout-menu/HomeLayoutMenu.c";

const Footer = () => {
  return (
    <HomeLayoutMenuComponent
      list={[
        { title: "همکاری با ما", link: "menu1" },
        { title: "فرصت های شغلی", link: "menu2" },
        { title: "درباره ما", link: "menu3" },
        { title: "قوانین و مقررات", link: "menu6" },
        { title: "سوالات متداول", link: "menu4" },
        { title: "تماس با ما", link: "menu5" },
      ]}
    />
  );
};
export default Footer;
