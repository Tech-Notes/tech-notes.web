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
    <div class="w-1/4 h-full border-2 border-r-slate-100 md:w-1/6 flex flex-col">
      <div class="border-b border-slate-300">
        <TwoContentSB icon={faDashboard} title={"Dashboard"}/>
        <ThreeContentSB icon={faBox} title={"Inventory"} arrowIcon={faChevronRight} />
        <ThreeContentSB icon={faCartShopping} title={'Sales'} arrowIcon={faChevronRight} />
        <ThreeContentSB icon={faStar} title={'Sales'} arrowIcon={faChevronRight} />
      </div>
      
      <TwoContentSB icon={faRocket} title={"Post Queue"} />
      <TwoContentSB icon={faUser} title={"User Managements"} />
      <div>

      </div>
    </div>
  );
}

export default SideBar;
