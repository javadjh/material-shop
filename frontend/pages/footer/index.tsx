import HomeLayoutMenuComponent from "../../page-component/home-layout-menu/HomeLayoutMenu.c";

const Footer = () => {
  return (
    <HomeLayoutMenuComponent
      list={[
        { title: "همکاری با ما", link: "comming" },
        { title: "فرصت های شغلی", link: "job" },
        { title: "درباره ما", link: "about-us" },
        { title: "قوانین و مقررات", link: "rules" },
        { title: "سوالات متداول", link: "comming" },
        { title: "تماس با ما", link: "contact-us" },
      ]}
    />
  );
};
export default Footer;
