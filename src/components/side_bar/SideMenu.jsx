import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useNavigate} from "react-router";
import {faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Box , Div, Text} from '../../base';

const SideMenu = ({menu,currentPath,setCurrentPath}) => {

  const navigate= useNavigate();

  const clickMenuHandler=()=>{
    !menu.subMenu ? navigate(menu.href): setCurrentPath(prev=> prev === menu.href ? "" :menu.href)
  }

  return (
    <Div>
      <Box onClick={clickMenuHandler} className="flex h-14 items-center p-3 gap-3">
        <FontAwesomeIcon icon={menu.icon} />
        <Text>{menu.title}</Text>
        {menu.subMenu && <div>{currentPath ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}</div> }
      </Box>
      
      {currentPath === menu.href && 
        menu.subMenu.map((subMenu)=>{
          return(
            <Box key={subMenu.key} onClick={()=>navigate(subMenu.href)} className="flex h-13 items-center p-2 gap-3 ml-4" >
              <FontAwesomeIcon icon={subMenu.icon} />
              <Text>{subMenu.title}</Text>
            </Box>
          )
        })
      }
    </Div>
  );
}

export default SideMenu;
