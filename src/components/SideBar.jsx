import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import TwoContentSB from "./TwoContentSB";
import ThreeContentSB from "./ThreeContentSB";
import SideContainer from "../elementTags/SideContainer";

const SideBar = () => {
  return (
    <SideContainer>
      <div class="border-b border-gray">
        <TwoContentSB icon={faDashboard} title={"Dashboard"} indexPage={"Dashboard"}/>
        <ThreeContentSB icon={faBox} title={"Inventory"} indexPage={"InventOne"}/>
        <ThreeContentSB icon={faCartShopping} title={'Sales'} indexPage={"SaleOne"}/>
        <ThreeContentSB icon={faStar} title={'Loyalty System'} indexPage={"LoyaltyOne"} />
      </div>
      
      <div>
        <TwoContentSB icon={faRocket} title={"Post Queue"} indexPage={"PostQueue"} />
        <TwoContentSB icon={faUser} title={"User Managements"} indexPage={"UserManagement"} />
      </div>
    </SideContainer>
  );
}

export default SideBar;
