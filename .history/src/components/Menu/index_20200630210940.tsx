import Menu,{MenuProps} from './my-menu'
import MenuItem,{MenuItemProps} from './my-menu-item'
import SubMenu,{SubMenuProps} from './my-submenu'

type IComponents = MenuProps & {
  item:MenuItemProps,
  subMenus:SubMenuProps
}
