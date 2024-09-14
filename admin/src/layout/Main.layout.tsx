import { FC } from "react";
import { PaddingStyled } from "../global-style/global.s";

const MainLayout: FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <body>
        <div className="page-wrapper">
          <div className="main-container">
            <nav id="sidebar" className="sidebar-wrapper">
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
                    <a href="/product">
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">محصولات</span>
                    </a>
                  </li>
                  <li>
                    <a href="/order">
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">سفارشات</span>
                    </a>
                  </li>
                  <li>
                    <a href="/payment">
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">پرداخت</span>
                    </a>
                  </li>
                  <li>
                    <a href="/user">
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">کاربران</span>
                    </a>
                  </li>
                  <li>
                    <a href="/category">
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">دسته بندی</span>
                    </a>
                  </li>
                  <li>
                    <a href="/seller">
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">فروشندگان</span>
                    </a>
                  </li>
                  <li>
                    <a href="/jobs">
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">درخواست های شغلی</span>
                    </a>
                  </li>
                  <li>
                    <a href="/jobinfo">
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">فرصت های شغلی</span>
                    </a>
                  </li>
                  <li>
                    <a href="/brand">
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">برند ها</span>
                    </a>
                  </li>
                  <li>
                    <a href="/report">
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">گزارش ها</span>
                    </a>
                  </li>
                  <li>
                    <a href="/team">
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">تیم</span>
                    </a>
                  </li>

                  <li>
                    <a href="/chat">
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">گفتگو</span>
                    </a>
                  </li>
                  <li>
                    <a href="/appsetting">
                      <i className="bi bi-pie-chart"></i>
                      <span className="menu-text">تنظیمات برنامه</span>
                    </a>
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
