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
import React, { useState } from 'react';
import Input from '../Input/input';
export var AutoCompleteInput = function (props) {
    var onSelect = props.onSelect, value = props.value, fetchSuggestions = props.fetchSuggestions, renderOption = props.renderOption, restProps = __rest(props, ["onSelect", "value", "fetchSuggestions", "renderOption"]);
    var _a = useState(value), inputValue = _a[0], setInputValue = _a[1];
    var _b = useState([]), suggestion = _b[0], setSuggestion = _b[1];
    // onChange事件
    var handleChange = function (e) {
        var value = e.target.value.trim();
        setInputValue(value);
        if (value) {
            var result = fetchSuggestions(value);
            setSuggestion(result);
        }
        else {
            setSuggestion([]);
        }
    };
    // 选择
    var handleSelect = function (str) {
        if (onSelect) {
            onSelect(str);
        }
        setInputValue(str);
        setSuggestion([]);
    };
    // 渲染下拉组件部分
    var renderChild = function () {
        return (React.createElement("ul", null, suggestion.map(function (item, index) {
            return (React.createElement("li", { key: index, onClick: function () { return handleSelect(item); } }, renderOption ? renderOption(item) : item));
        })));
    };
    return (React.createElement("div", null,
        React.createElement(Input, __assign({ onChange: handleChange, value: inputValue }, restProps)),
        suggestion.length > 0 && renderChild()));
};
export default AutoCompleteInput;
