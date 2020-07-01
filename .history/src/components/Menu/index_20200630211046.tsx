import {FC} from 'react'
import Menu,{MenuProps} from './my-menu'
import MenuItem,{MenuItemProps} from './my-menu-item'
import SubMenu,{SubMenuProps} from './my-submenu'

type IComponents = FC<MenuProps> & {
  item:FC<MenuItemProps>,
  subMenus:FC<SubMenuProps>
}

const TransformMenu:IComponents = {
  
}
