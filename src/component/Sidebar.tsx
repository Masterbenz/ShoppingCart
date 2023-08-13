import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem, FaHeart , FaGithub  } from "react-icons/fa";
import { Navbar } from "./Navbar"
import react , {useState} from "react"
import { Link } from 'react-router-dom';

export const Sidebar = () => {

    const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked : any) => {
    setCollapsed(checked);
  };


  const handleImageChange = (checked : any) => {
    setImage(checked);
  };

  const handleToggleSidebar = (checked : any) => {
    setToggled(checked);
  };

    return (
        <div style={{height: "100vh" ,  position: 'sticky',
        top: 0}}>
        <ProSidebar 
        collapsedWidth={500}
         rtl={rtl}
         collapsed={collapsed}
         toggled={toggled}
         breakPoint="md"
         onToggle={handleToggleSidebar}
        >
            <SidebarHeader>
            <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            justifyContent:'center',
            display: 'flex'
          }}
        >
      ASDCORE
        </div>
            </SidebarHeader>
            <SidebarContent >
            <Menu iconShape="square">
                
                <MenuItem active={window.location.pathname === "/AdminStore/"} icon={<FaGem />}>   <Link to="/AdminStore" /> Store</MenuItem>
                <MenuItem  active={window.location.pathname === "/About/"} icon={<FaGem />}>  <Link to="/about" /> About</MenuItem>
                <MenuItem  active={window.location.pathname === "/"} icon={<FaGem />}>  <Link to="/" /> Dashboard</MenuItem>
            </Menu>
            </SidebarContent>
            <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
             Masterbenz
            </span>
          </a>
        </div>
      </SidebarFooter>
        </ProSidebar>
        </div>
    )



}