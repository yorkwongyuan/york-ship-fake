import React from 'react';
import Progress from '../Progress/progress';
import Icon from '../Icon/icon';
export var UploadList = function (props) {
    var fileLists = props.fileLists, onRemove = props.onRemove;
    return (React.createElement(React.Fragment, null,
        React.createElement("ul", null, fileLists.map(function (file) {
            return (React.createElement("li", { key: file.uid, className: "upload-list" },
                React.createElement("span", { className: "upload-filename upload-filename-" + file.status },
                    React.createElement(Icon, { icon: "file-alt", theme: "secondary" }),
                    file.name),
                React.createElement("span", { className: "upload-list__file-icon" },
                    file.status === "uploading" && React.createElement(Icon, { icon: "spinner", spin: true }),
                    file.status === "success" && React.createElement(Icon, { icon: "check-circle", theme: "primary" }),
                    file.status === "error" && React.createElement(Icon, { icon: "times-circle", theme: "danger" })),
                React.createElement("span", { className: "upload-list__del-btn", onClick: function () { return onRemove(file); } },
                    React.createElement(Icon, { icon: "times" })),
                file.percentage,
                React.createElement("div", null, file.status === "uploading" && React.createElement(Progress, { theme: "primary", percentage: file.percentage, showText: true }))));
        }))));
};
export default UploadList;
