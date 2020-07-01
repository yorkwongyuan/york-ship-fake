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
import React, { useState, useEffect, useRef } from 'react';
import Input from '../Input/input';
import Icon from '../Icon/icon';
import useDebounce from '../../hooks/useDebounce';
import useClickoutside from '../../hooks/useClickoutside';
import ClassNames from 'classnames';
export var AutoComplete = function (props) {
    var fetchSuggestion = props.fetchSuggestion, onSelect = props.onSelect, renderOption = props.renderOption, value = props.value, restProps = __rest(props, ["fetchSuggestion", "onSelect", "renderOption", "value"]);
    var _a = useState([]), suggestions = _a[0], setSuggestions = _a[1];
    var _b = useState(value), inputValue = _b[0], setInputValue = _b[1];
    var _c = useState(false), isLoading = _c[0], setIsLoading = _c[1];
    var _d = useState(-1), highLight = _d[0], setHighLight = _d[1];
    var componentRef = useRef(null);
    useClickoutside(componentRef, function () {
        setSuggestions([]);
        setHighLight(-1);
    });
    var trigger = useRef(false);
    var debounceValue = useDebounce(inputValue, 500);
    useEffect(function () {
        if (debounceValue) {
            var result = fetchSuggestion(debounceValue);
            if (result instanceof Promise) {
                setIsLoading(true);
                result.then(function (data) {
                    setSuggestions(data);
                    setIsLoading(false);
                });
            }
            else {
                setSuggestions(result);
            }
        }
        else {
            setSuggestions([]);
        }
    }, [fetchSuggestion, debounceValue]);
    // 输入框change事件
    var handleChange = function (e) {
        var value = e.target.value.trim();
        setInputValue(value);
        trigger.current = true;
    };
    var handleClick = function (params) {
        if (onSelect) {
            onSelect(params);
        }
        setInputValue(params.value);
        setSuggestions([]);
        setHighLight(-1);
        trigger.current = false;
    };
    // 控制高亮index函数
    var highLightFunc = function (index) {
        if (index < 0)
            index = 0;
        if (index >= suggestions.length)
            index = suggestions.length - 1;
        setHighLight(index);
    };
    // 键盘点击事件
    var handleKeyDown = function (e) {
        switch (e.keyCode) {
            case 13:
                if (suggestions[highLight]) {
                    handleClick(suggestions[highLight]);
                }
                break;
            case 38:
                highLightFunc(highLight - 1);
                break;
            case 40:
                highLightFunc(highLight + 1);
                break;
            default:
                break;
        }
    };
    var renderChild = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("ul", null, suggestions.map(function (item, index) {
                var cnames = ClassNames('suggestion-item', {
                    'is-active': index === highLight
                });
                return (React.createElement("li", { onClick: function () { return handleClick(item); }, className: cnames, key: index }, renderOption ? renderOption(item) : item.value));
            }))));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { ref: componentRef },
            React.createElement(Input, __assign({ onChange: handleChange, value: inputValue, onKeyDown: handleKeyDown }, restProps)),
            isLoading && React.createElement(Icon, { icon: "spinner", spin: true }),
            suggestions.length > 0 && renderChild())));
};
export default AutoComplete;
