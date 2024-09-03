import { ConfigProvider } from "antd";
import RoutesComponent from "./routes/RoutesComponent";
import fa_IR from "antd/es/locale/fa_IR";
function App() {
  return (
    <div className="margin-0" dir="rtl">
      <link rel="canonical" href="https://www.bootstrap.gallery/"></link>

      <link rel="shortcut icon" href="assets/images/favicon.svg" />
      <link rel="stylesheet" href="" />
      <link
        rel="stylesheet"
        href="assets/fonts/bootstrap/bootstrap-icons.min.css"
      />
      <link rel="stylesheet" href="assets/css/main.min.css" />

      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/bootstrap.bundle.min.js"></script>

      <script src="assets/vendor/overlay-scroll/jquery.overlayScrollbars.min.js"></script>
      <script src="assets/vendor/overlay-scroll/custom-scrollbar.js"></script>

      <script src="assets/js/custom.js"></script>
      <RoutesComponent />
    </div>
  );
}

export default App;
