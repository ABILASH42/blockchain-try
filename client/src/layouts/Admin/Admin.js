import React, { useRef, useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";

// Core components
import AdminNavbar from "../../components/Navbars/AdminNavbar";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashboard from "../../views/Dashboard";
import BuyerProfile from "../../views/buyerProfile";
import ViewImage from "../../views/viewImage";
import OwnedLands from "../../views/OwnedLands";
import MakePayment from "../../views/MakePayment";
import UpdateBuyer from "../../views/updateBuyer";
import Help from "../../pages/Help";

import routes from "../../routes";
import logo from "../../assets/img/react-logo.png";
import { BackgroundColorContext } from "../../contexts/BackgroundColorContext";

let ps;

function Admin() {
  const location = useLocation();
  const mainPanelRef = useRef(null);
  const [sidebarOpened, setSidebarOpened] = useState(false);

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(mainPanelRef.current, {
        suppressScrollX: true,
      });
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.classList.add("perfect-scrollbar-off");
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
    };
  }, []);

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainPanelRef.current) {
      mainPanelRef.current.scrollTop = 0;
    }
  }, [location]);

  const toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    setSidebarOpened(!sidebarOpened);
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (path.includes(routes[i].path)) {
        return routes[i].name;
      }
    }
    return "Dashboard";
  };

  return (
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <div className="wrapper">
          <Sidebar
            routes={routes}
            logo={{
              outterLink: "#",
              text: "Land Registration",
              imgSrc: logo,
            }}
            toggleSidebar={toggleSidebar}
          />
          <div className="main-panel" ref={mainPanelRef} data={color}>
            <AdminNavbar
              brandText={getBrandText(location.pathname)}
              toggleSidebar={toggleSidebar}
              sidebarOpened={sidebarOpened}
            />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/buyer-profile" element={<BuyerProfile />} />
              <Route path="/view-image" element={<ViewImage />} />
              <Route path="/owned-lands" element={<OwnedLands />} />
              <Route path="/make-payment" element={<MakePayment />} />
              <Route path="/update-buyer" element={<UpdateBuyer />} />
              <Route path="/help" element={<Help />} />
              <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
            </Routes>
            <Footer fluid />
          </div>
        </div>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default Admin;