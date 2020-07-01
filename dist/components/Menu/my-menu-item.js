import React, { useContext } from 'react';
import classnames from 'classnames';
import { MenuContext } from './my-menu';
var MenuItem = function (props) {
    var index = props.index, disabled = props.disabled, className = props.className, children = props.children;
    var context = useContext(MenuContext);
    var classes = classnames('my-menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    });
    var handleClick = function () {
        if (context.onSelect && !disabled && typeof index === 'string') {
            context.onSelect(index);
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("li", { onClick: handleClick, className: classes }, children)));
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;
