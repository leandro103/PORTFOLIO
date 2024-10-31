import SocialNetworks from "./SocialNetworks";

import Avatar from "../img/Avatar.jpg";

import "../styles/components/sidebar.sass";
import InformationContainer from "./informationContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar"> 
      <img src={Avatar} alt="Leandro de Jesus" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks/>
     <InformationContainer/>
      <a href="" className="btn">Download currículo</a>
    </aside>
  );
};

export default Sidebar;
