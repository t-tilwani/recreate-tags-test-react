import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import BottomNavBar from "../components/BottomNavBar";

import ContextProviderWrap from "../components/ContextProviderWrap";

export default function Root() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 10)
  },[location])


  const isOrderPage = location.pathname.includes('/add-order')
  return(
      <div>
        <ContextProviderWrap>
          <Outlet />  
          {!isOrderPage && <BottomNavBar />}
        </ContextProviderWrap>
      </div>
  )
}