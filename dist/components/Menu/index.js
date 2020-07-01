import Menu from './my-menu';
import MenuItem from './my-menu-item';
import SubMenu from './my-submenu';
var TransformMenu = Menu;
TransformMenu.Item = MenuItem;
TransformMenu.SubMenu = SubMenu;
export default TransformMenu;
