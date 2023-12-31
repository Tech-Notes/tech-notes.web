import { faJs } from '@fortawesome/free-brands-svg-icons';
import {
  faBox,
  faCartShopping,
  faDashboard,
  faRocket,
  faStar,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Div } from '../base';
import SideMenu from './SideMenu';

const sideMenuList = [
  {
    title: 'Dashboard',
    icon: faDashboard,
    id: Math.random() * 100,
    href: '/dashboard'
  },
  {
    title: 'Inventory',
    icon: faBox,
    id: Math.random() * 100,
    href: '/inventory',
    subMenu: [
      {
        title: 'Products',
        icon: faJs,
        href: '/inventory/products',
        id: Math.random() * 100
      }
    ]
  },
  {
    title: 'Sales',
    icon: faCartShopping,
    id: Math.random() * 100,
    href: '/sales',
    subMenu: [
      {
        title: 'Customers',
        icon: faJs,
        href: '/sales/customers',
        id: Math.random() * 100
      }
    ]
  },
  {
    title: 'Loyalty System',
    icon: faStar,
    id: Math.random() * 100,
    href: '/loyalty',
    subMenu: [
      {
        title: 'System',
        icon: faJs,
        href: '/loyalty/system',
        id: Math.random() * 100
      }
    ]
  },
  {
    title: 'Post Queue',
    icon: faRocket,
    id: Math.random() * 100,
    href: '/postqueue'
  },
  {
    title: 'User Management',
    icon: faUser,
    id: Math.random() * 100,
    href: '/usermanagement'
  }
];

const SideBar = () => {
  const [currentPath, setCurrentPath] = useState();

  return (
    <Div className="h-full p-2 border-r border-gray-200 dark:border-gray-600 cursor-pointer">
      {sideMenuList?.map((menu) => {
        return (
          <SideMenu
            key={menu.id}
            menu={menu}
            currentPath={currentPath}
            setCurrentPath={setCurrentPath}
          />
        );
      })}
    </Div>
  );
};

export default SideBar;
