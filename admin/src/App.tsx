import { ConfigProvider } from "antd";
import RoutesComponent from "./routes/RoutesComponent";

function App() {
  return (
    <div className="margin-0">
      <ConfigProvider direction="rtl">
        <RoutesComponent />
      </ConfigProvider>
    </div>
  );
}

export default App;
