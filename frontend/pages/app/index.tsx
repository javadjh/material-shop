import HomeLayoutMenuComponent from "../../page-component/home-layout-menu/HomeLayoutMenu.c";

const App = () => {
  return (
    <HomeLayoutMenuComponent
      list={[
        { title: "دانلود از بازار", link: "menu1" },
        { title: "دانلود از مایکت", link: "menu2" },
        { title: "دانلود مستقیم", link: "menu3" },
        { title: "دانلود از سیبچه", link: "menu6" },
        { title: "دانلود از سیب اپ", link: "menu4" },
        { title: "نسخه وب اپ", link: "menu5" },
      ]}
    />
  );
};
export default App;
