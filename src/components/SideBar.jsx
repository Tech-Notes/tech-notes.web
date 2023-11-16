import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import TwoContentSB from "./TwoContentSB";
import ThreeContentSB from "./ThreeContentSB";

const SideBar = () => {
  return (
    <div class="w-1/4 h-full px-1 border-r border-slate-200 bg-slate-400 md:w-1/6 flex flex-col">
      <div class="border-b border-slate-300">
        <TwoContentSB icon={faDashboard} title={"Dashboard"} indexPage={"Dashboard"}/>
        <ThreeContentSB icon={faBox} title={"Inventory"} indexPage={"InventOne"}/>
        <ThreeContentSB icon={faCartShopping} title={'Sales'} indexPage={"SaleOne"}/>
        <ThreeContentSB icon={faStar} title={'Loyalty System'} indexPage={"LoyaltyOne"} />
      </div>
      
      <div>
        <TwoContentSB icon={faRocket} title={"Post Queue"} indexPage={"PostQueue"} />
        <TwoContentSB icon={faUser} title={"User Managements"} indexPage={"UserManagement"} />
      </div>
    </div>
  );
}

export default SideBar;
