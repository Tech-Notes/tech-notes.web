import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useColorScheme } from '../utils/ColorSchemeProvider';
import Icon from '../elementTags/Icon';
import NavContainer from '../elementTags/NavContainer';
import InnerDiv from '../elementTags/InnerDiv';
import ThumbNail from '../elementTags/thumbNail';

const NavBar = () => {

  const {isDark, setTheme}=useColorScheme();

  const iconClickHandler=()=>{
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <NavContainer>
      <InnerDiv level="1">
        <FontAwesomeIcon icon={faHouse} class="w-6"/>
      </InnerDiv>
      <InnerDiv level= "2">

        <div onClick={iconClickHandler}>
          <Icon level="2">
            {isDark ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
          </Icon>
        </div>
        
        <ThumbNail image="profile"></ThumbNail>
        
        <div>
         {"Thazin Naing"}
        </div>

        <Icon>
          <FontAwesomeIcon icon={faAngleDown} />
        </Icon>

      </InnerDiv>

    </NavContainer>
  );
}

export default NavBar;
