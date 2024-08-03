import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContextProvider } from "@/providers/ContextProvider";
import Button from "@/Button";

import { darkModeColor, defaultColor } from "@/colors";
function MailsTopBar() {
  const {
    openSideBarObject,
    darkModeObject: { isDarkMode },
    openAreaFormObject: { openAreaForm, setOpenAreaForm },
  } = useGlobalContextProvider();
  const { setOpenSideBar } = openSideBarObject;

  return (
    <div
      style={{
        backgroundColor: isDarkMode
          ? darkModeColor.background
          : defaultColor.background,
        color: isDarkMode ? darkModeColor.textColor : "black",
      }}
      className="  p-5  rounded-md flex justify-between items-center transition-all"
    >
      <div className="flex gap-5 items-center">
        <span className="text-xl font-bold">Areas</span>
      
      </div>
      <FontAwesomeIcon
        onClick={() => setOpenSideBar(true)}
        className="m-2 max-xl:flex hidden  mt-[13px] cursor-pointer  "
        icon={faBars}
      />
    </div>
  );
}

export default MailsTopBar;
