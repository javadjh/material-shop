import { ConfigProvider } from "antd";
import RoutesComponent from "./routes/RoutesComponent";
import fa_IR from "antd/es/locale/fa_IR";

function App() {
  return (
    <div className="margin-0">
      <ConfigProvider locale={fa_IR} direction="rtl">
        <RoutesComponent />
      </ConfigProvider>
    </div>
  );
}

export default App;
