import SideBar from "../component/components/SideBar";

const menuItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Contact", path: "/contact" },
  { id: 4, name: "Services", path: "/services" },
];

function Sidebardata() {
  return (
    <div>
      <SideBar menuItems={menuItems} />
      
    </div>
  );
}

export default Sidebardata;
