var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState, Children, useContext, cloneElement } from 'react';
import { MenuContext } from './my-menu';
import classNames from 'classnames';
import Transition from '../Transition/transition';
import Icon from '../Icon/icon';
var SubMenu = function (_a) {
    var index = _a.index, title = _a.title, className = _a.className, children = _a.children;
    var context = useContext(MenuContext);
    var openMenus = context.defaultOpenSubMenus;
    var isOpend = (index && context.mode === 'vertical') ? openMenus.includes(index) : false;
    var _b = useState(isOpend), isOpen = _b[0], setIsOpen = _b[1];
    var classes = classNames(className, {
        'is-active': context.index === index,
        'is-opened': isOpen,
        'is-vertical': context.mode === 'vertical'
    });
    // 点击事件是点一次取一次反
    var handleClick = function (e) {
        e.preventDefault();
        setIsOpen(!isOpen);
    };
    // 鼠标事件拥有明确的true还是false
    var timer;
    var handleMouse = function (e, toggle) {
        e.preventDefault();
        clearTimeout(timer);
        timer = setTimeout(function () {
            setIsOpen(toggle);
        }, 300);
    };
    var clickEvents = context.mode === 'vertical' ? { onClick: handleClick } : {};
    var mouseEvents = context.mode === 'horizon' ? {
        onMouseEnter: function (e) { handleMouse(e, true); },
        onMouseLeave: function (e) { handleMouse(e, false); }
    } : {};
    var renderChildren = function () {
        var subMenuClasses = classNames('my-submenu', {
            'is-open': isOpen,
        });
        var childrenElements = Children.map(children, function (child, i) {
            var childrenElement = child;
            var displayName = childrenElement.type.displayName;
            if (displayName === 'MenuItem') {
                return cloneElement(childrenElement, { index: index + "-" + i });
            }
            else {
                console.error('submenu节点错误了');
            }
        });
        return (React.createElement(Transition, { in: isOpen, animation: "zoom-in-top", timeout: 300 },
            React.createElement("ul", { className: subMenuClasses }, childrenElements)));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("li", __assign({ className: classes }, mouseEvents),
            React.createElement("div", __assign({ className: "my-submenu__title" }, clickEvents),
                title,
                React.createElement(Icon, { theme: "secondary", className: "my-menu__icon", icon: "angle-down" })),
            React.createElement("div", null, renderChildren()))));
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;
