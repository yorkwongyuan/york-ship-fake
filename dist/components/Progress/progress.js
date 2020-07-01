import React from 'react';
export var Progress = function (props) {
    var strokeHeight = props.strokeHeight, percentage = props.percentage, styles = props.styles, showText = props.showText, theme = props.theme;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "progress-bar", style: styles },
            React.createElement("div", { className: "progress-outer" },
                React.createElement("div", { className: "progress-inner progress-inner-theme-" + theme, style: { width: percentage + "%", height: strokeHeight + "px" } }, showText && percentage + "%")))));
};
Progress.defaultProps = {
    strokeHeight: 15,
    showText: true,
    theme: "primary"
};
export default Progress;
