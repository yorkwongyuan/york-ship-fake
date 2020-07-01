import React, { useState } from 'react';
import classNames from 'classnames';
export var Dragger = function (props) {
    var _a = useState(false), dragOver = _a[0], setDragOver = _a[1];
    var onFile = props.onFile, children = props.children;
    var klass = classNames('drag', {
        'is-drag-over': dragOver
    });
    // 拖拽/离开
    var handleDrag = function (e, over) {
        e.preventDefault();
        setDragOver(over);
    };
    // 投放
    var handleDrop = function (e) {
        e.preventDefault();
        var fileLists = e.dataTransfer.files;
        onFile(fileLists);
        setDragOver(false);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: klass, onDragOver: function (e) { return handleDrag(e, true); }, onDragLeave: function (e) { return handleDrag(e, false); }, onDrop: function (e) { return handleDrop(e); } }, children)));
};
export default Dragger;
