import React from 'react';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import axios from 'axios';
library.add(fas);
var App = function () {
    var handleChange = function (e) {
        var files = e.target.files;
        if (files) {
            var file = files[0];
            var formData = new FormData();
            formData.append(file.name, file);
            axios.post('https://jsonplaceholder.typicode.com/posts', formData, {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            }).then(function (res) {
                console.log(res, 'res');
            });
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "app" },
            React.createElement("div", null,
                React.createElement("input", { type: "file", onChange: function (e) { return handleChange(e); } })))));
};
export default App;
