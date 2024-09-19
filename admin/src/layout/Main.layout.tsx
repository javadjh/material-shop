import { FC } from "react";
import { PaddingStyled } from "../global-style/global.s";
import { Link } from "react-router-dom";

const MainLayout: FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <body>
        <div className="page-wrapper">
          <div className="main-container">
            <nav
              id="sidebar"
              className="sidebar-wrapper"
              style={{ overflow: "auto" }}
            >
              <div className="sidebar-profile">
                <img
                  src="assets/images/user1.png"
                  className="img-3x me-3 rounded-3"
                  alt="Admin Dashboard"
                />
                <div className="m-0 text-nowrap">
                  <p className="m-0">سلام &#128075;</p>
                  <h6 className="m-0">خانم رقیه اکبری</h6>
                </div>
              </div>

              <div>
                <ul className="sidebar-menu">
                  <li>
                    <Link to={"/product"}>
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">محصولات</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/order"}>
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">سفارشات</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/payment"}>
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">پرداخت</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/user"}>
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">کاربران</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/category"}>
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">دسته بندی</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/seller"}>
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">فروشندگان</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/jobs"}>
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">درخواست های شغلی</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/jobinfo"}>
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">فرصت های شغلی</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/brand"}>
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">برند ها</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/report"}>
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">گزارش ها</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/inquiry"}>
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">تهاتر</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/swap"}>
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">استعلامات</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/team"}>
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">تیم</span>
                    </Link>
                  </li>

                  <li>
                    <Link to={"/chat"}>
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">گفتگو</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/appsetting"}>
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">تنظیمات برنامه</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="app-container">
              <div className="app-header">
                <div className="app-brand-sm">مدیریت داشبورد کمک سازه</div>
              </div>

              <PaddingStyled horizontal={40} top={20}>
                {children}
              </PaddingStyled>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
export default MainLayout;
