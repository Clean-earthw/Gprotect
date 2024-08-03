"use client";

import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";

import { GlobalContextType } from "@/types/GlobalContextType";
import { menuItemType } from "@/types/MenuItemsTypes";
import { faSlack, faUpwork } from "@fortawesome/free-brands-svg-icons";
import {
  faBorderAll,
  faBriefcase,
  faCode,
  faFlask,
  faGlobe,
  faGraduationCap,
  faSortAmountDesc,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  faChartSimple,
  faLayerGroup,
  faList,
  faSun,
  faMoon,
  faRectangleList,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { DarkModeItem } from "@/types/DarkModeTypes";
import { AreaType,HabitType } from "@/types/GlobalTypes";
// import AllHabits from "./Pages/AllHabits/AllHabits";
// import {
//   iconToText,
//   textToIcon,
// } from "./Pages/AllHabits/Components/IconsWindow/IconData";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { getDateString } from "@/utils/date_function";
// import { v4 as uuidv4 } from "uuid";


const GlobalContext = createContext<GlobalContextType>({
  menuItemsObject: {
    menuItems: [],
    setMenuItems: () => {},
  },
  openSideBarObject: {
    openSideBar: false,
    setOpenSideBar: () => {},
  },
  darkModeObject: {
    isDarkMode: false,
    setDarkMode: () => {},
    darkModeItems: [],
    setDarkModeItems: () => {},
  },
  habitWindowObject: {
    openHabitWindow: false,
    setOpenHabitWindow: () => {},
  },
  openTimePickerObject: {
    openTimePickerWindow: false,
    setOpenTimePickerWindow: () => {},
  },
  allAreasObject: {
    allAreas: [],
    setAllAreas: () => {},
  },
  allHabitsObject: {
    allHabits: [],
    setAllHabits: () => {},
  },
  selectedCurrentDayObject: {
    selectedCurrentDate: "",
    setSelectedCurrentDate: () => {},
  },
  offsetDayObject: {
    offsetDay: 0,
    setOffsetDay: () => {},
  },
  selectedAreaStringObject: {
    selectedAreaString: "",
    setSelectedAreaString: () => {},
  },
  allFilteredHabitsObject: {
    allFilteredHabits: [],
    setAllFilteredHabits: () => {},
  },
  openDropDownObject: {
    openDropDown: false,
    setOpenDropDown: () => {},
  },
  dropDownPositionsObject: {
    dropDownPositions: {
      top: 0,
      left: 0,
    },
    setDropDownPositions: () => {},
  },
  openConfirmationWindowObject: {
    openConfirmationWindow: false,
    setOpenConfirmationWindow: () => {},
  },
  selectedItemsObject: {
    selectedItems: null,
    setSelectedItems: () => {},
  },
  openAreaFormObject: {
    openAreaForm: false,
    setOpenAreaForm: () => {},
  },

  openIconWindowObject: {
    openIconWindow: false,
    setOpenIconWindow: () => {},
    iconSelected: faFlask,
    setIconSelected: () => {},
  },

  searchInputObject: {
    searchInput: "",
    setSearchInput: () => {},
  },
  loadingObject: {
    isLoading: true,
    setIsLoading: () => {},
  },
});

function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [menuItems, setMenuItems] = useState<menuItemType[]>([
    { name: "Inbox", isSelected: true, icon: faRectangleList },
    { name: "Spam", isSelected: false, icon: faChartSimple },
    { name: "Trash", isSelected: false, icon: faLayerGroup },
    { name: "Ranks", isSelected: false, icon: faLayerGroup },
  ]);

  const [allHabits, setAllHabits] = useState<HabitType[]>([]);

  const [darkModeItems, setDarkModeItems] = useState<DarkModeItem[]>([
    { id: 1, icon: faSun, isSelected: true },
    { id: 2, icon: faMoon, isSelected: false },
  ]);
  const [allAreas, setAllAreas] = useState<AreaType[]>([]);

  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const [openHabitWindow, setOpenHabitWindow] = useState<boolean>(false);
  const [openTimePickerWindow, setOpenTimePickerWindow] =
    useState<boolean>(false);
  const [selectedCurrentDate, setSelectedCurrentDate] = useState(() =>
    getDateString(new Date())
  );
  const [offsetDay, setOffsetDay] = useState(0);
  const [selectedAreaString, setSelectedAreaString] = useState<string>("All");
  const [allFilteredHabits, setAllFilteredHabits] = useState<HabitType[]>([]);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [dropDownPositions, setDropDownPositions] = useState({
    top: 0,
    left: 0,
  });

  const [openConfirmationWindow, setOpenConfirmationWindow] = useState(false);
  const [selectedItems, setSelectedItems] = useState<
    HabitType | AreaType | null
  >(null);
  
  const [openAreaForm, setOpenAreaForm] = useState(false);
  const [openIconWindow, setOpenIconWindow] = useState(false);
  const [iconSelected, setIconSelected] = useState<IconProp>(faFlask);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  console.log(isLoading);

 

//   async function addTheAllAreas() {
//     const allArea = {
//       icon: iconToText(faGlobe),
//       name: "All",
//       clerkUserId: user?.id as string,
//     };

//     console.log(user);

//     try {
//       const response = await fetch("/api/areas", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },

//         body: JSON.stringify(allArea),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to add an area");
//       }
//       //Extract the _id from the response
//       const data = await response.json();
//       const { _id } = data.area;
//       //
//       //Update the _id of the area
//       const updatedIdOfArea = { ...allArea, _id: _id };

//       return updatedIdOfArea;
//     } catch (error) {}
//   }

  //Each time the menu items are updated, the sidebar is closed
  useEffect(() => {
    setOpenSideBar(false);
    setOpenAreaForm(false);
    setOpenConfirmationWindow(false);
    setOpenHabitWindow(false);
    setOpenIconWindow(false);
  }, [menuItems]);

  //Jsx
  return (
    <GlobalContext.Provider
      value={{
        menuItemsObject: { menuItems, setMenuItems },
        openSideBarObject: { openSideBar, setOpenSideBar },
        darkModeObject: {
          isDarkMode,
          setDarkMode,
          darkModeItems,
          setDarkModeItems,
        },
        habitWindowObject: {
          openHabitWindow,
          setOpenHabitWindow,
        },
        openTimePickerObject: {
          openTimePickerWindow,
          setOpenTimePickerWindow,
        },
        allAreasObject: {
          allAreas,
          setAllAreas,
        },
        allHabitsObject: {
          allHabits,
          setAllHabits,
        },
        selectedCurrentDayObject: {
          selectedCurrentDate,
          setSelectedCurrentDate,
        },
        offsetDayObject: {
          offsetDay,
          setOffsetDay,
        },
        selectedAreaStringObject: {
          selectedAreaString,
          setSelectedAreaString,
        },
        allFilteredHabitsObject: {
          allFilteredHabits,
          setAllFilteredHabits,
        },
        openDropDownObject: {
          openDropDown,
          setOpenDropDown,
        },
        dropDownPositionsObject: {
          dropDownPositions,
          setDropDownPositions,
        },
        openConfirmationWindowObject: {
          openConfirmationWindow,
          setOpenConfirmationWindow,
        },
        selectedItemsObject: {
          selectedItems,
          setSelectedItems,
        },
        openAreaFormObject: {
          openAreaForm,
          setOpenAreaForm,
        },
        openIconWindowObject: {
          openIconWindow,
          setOpenIconWindow,
          iconSelected,
          setIconSelected,
        },
        searchInputObject: {
          searchInput,
          setSearchInput,
        },
        loadingObject: {
          isLoading,
          setIsLoading,
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContextProvider() {
  return useContext(GlobalContext);
}

export default GlobalContextProvider;
