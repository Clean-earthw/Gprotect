import { useState,useEffect } from 'react';
import { useGlobalContextProvider } from "@/providers/ContextProvider";;
import { menuItemType } from '@/types/MenuItemsTypes';


const Dashboard = () => {
    const { menuItemsObject } = useGlobalContextProvider();
    const { menuItems } = menuItemsObject;
    const[selectedMenu,setSelectedMenu] = useState<menuItemType | null>(null);
    let selectedComponent = null;

    useEffect(() => {
        menuItems.map((singleItem) => {
            if(singleItem.isSelected){
                setSelectedMenu(singleItem);
            }
        });
    },[menuItems]);

  return (
    <div className='flex'>Dashboard</div>
  )
}

export default Dashboard 