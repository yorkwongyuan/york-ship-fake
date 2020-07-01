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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon/icon';
/**
 * ~~~ js
 * import Input from 'input'
 * ~~~
 */
export var Input = function (props) {
    var _a;
    var className = props.className, disabled = props.disabled, append = props.append, prepand = props.prepand, icon = props.icon, size = props.size, restProps = __rest(props, ["className", "disabled", "append", "prepand", "icon", "size"]);
    var classes = classNames('my-input', className, (_a = {
            'is-disabled': disabled
        },
        _a["is-" + size] = size,
        _a));
    // 修正初始值为undefined
    var fixedValue = function (value) {
        if (typeof value === 'undefined' || value === null) {
            return '';
        }
        return value;
    };
    // 防止同时存在value和defaultValue
    if ('value' in props) {
        delete restProps['defaultValue'];
        restProps.value = fixedValue(props.value);
    }
    return (React.createElement(React.Fragment, null,
        prepand && React.createElement("div", null, prepand),
        icon && React.createElement("div", null,
            React.createElement(Icon, { icon: icon })),
        React.createElement("input", __assign({ className: classes, disabled: disabled }, restProps)),
        append && React.createElement("div", null, append)));
};
Input.defaultProps = {
    disabled: false,
    size: "lg"
};
export default Input;
