import React, { createContext, useState, Children, cloneElement } from 'react';
import classNames from 'classnames';
export var MenuContext = createContext({ index: '0' });
/**
 * # Menu组件的使用方法
 * ~~~ js
 * import {Menu} from 'Menu'
 * ~~~
 */
export var Menu = function (props) {
    var defaultIndex = props.defaultIndex, mode = props.mode, className = props.className, onSelect = props.onSelect, disabled = props.disabled, children = props.children, defaultOpenSubMenus = props.defaultOpenSubMenus;
    var classes = classNames('my-menu', className, {
        'is-disabled': disabled,
        'is-horizon': mode === 'horizon',
        'is-vertical': mode === 'vertical'
    });
    var _a = useState(defaultIndex), currentIndex = _a[0], setIndex = _a[1];
    // 传递给子组件的点击事件
    var handleClick = function (index) {
        setIndex(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    // 传递给子组件的context
    var passedContext = {
        index: currentIndex ? currentIndex : '0',
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubMenus: defaultOpenSubMenus
    };
    var renderChildren = function () {
        return Children.map(children, function (child, index) {
            var el = child;
            var displayName = el.type.displayName;
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return cloneElement(el, { index: index.toString() });
            }
            else {
                console.error('节点错误');
            }
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("ul", { className: classes, "data-testid": "test-menu" },
            React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren()))));
};
Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizon',
    disabled: false,
    defaultOpenSubMenus: []
};
export default Menu;
