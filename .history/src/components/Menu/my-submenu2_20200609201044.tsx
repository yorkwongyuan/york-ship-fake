import React, { useState } from 'react'
import { MenuContext } from './my-menu'

interface SubMenus {
  index?: number;
  title: string;
  className?: string;
}