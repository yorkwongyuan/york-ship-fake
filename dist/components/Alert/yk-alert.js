import React from 'react';
import ClassNames from 'classnames';
export var AlertType;
(function (AlertType) {
    AlertType["Success"] = "success";
    AlertType["Default"] = "default";
    AlertType["Danger"] = "danger";
    AlertType["Warning"] = "warning";
})(AlertType || (AlertType = {}));
export var AlertSize;
(function (AlertSize) {
    AlertSize["Large"] = "large";
    AlertSize["Medium"] = "medium";
    AlertSize["Small"] = "small";
    AlertSize["Min"] = "min";
})(AlertSize || (AlertSize = {}));
var Alert = function (props) {
    var _a;
    var alertType = props.alertType, title = props.title, className = props.className, alertSize = props.alertSize, content = props.content;
    var classes = ClassNames('alert', className, (_a = {},
        _a["alert-" + alertType] = alertType,
        _a["alert-" + alertSize] = alertSize,
        _a));
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classes },
            React.createElement("div", { className: "alert__title" }, title),
            React.createElement("div", { className: "alert__content" }, content))));
};
export default Alert;
