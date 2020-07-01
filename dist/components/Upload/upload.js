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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React, { useRef, useState } from 'react';
import UploadList from './upload-list';
import Dragger from './dragger';
import axios from 'axios';
export var Upload = function (props) {
    var inputNode = useRef(null);
    var action = props.action, defaultFileLists = props.defaultFileLists, withCredentials = props.withCredentials, name = props.name, headers = props.headers, data = props.data, accept = props.accept, multiple = props.multiple, children = props.children, drag = props.drag, onProgress = props.onProgress, onSuccess = props.onSuccess, onError = props.onError, beforeUpload = props.beforeUpload, onChange = props.onChange, onRemove = props.onRemove;
    var _a = useState(defaultFileLists || []), fileLists = _a[0], setFileLists = _a[1];
    // 修改UploadFile中的某个值
    var updateFileLists = function (updateFile, fileObj) {
        setFileLists(function (prevLists) {
            return prevLists.map(function (file) {
                if (file.uid === updateFile.uid) {
                    return __assign(__assign({}, file), fileObj);
                }
                else {
                    return file;
                }
            });
        });
    };
    var handleClick = function () {
        if (inputNode.current) {
            inputNode.current.value = '';
        }
        if (inputNode.current) {
            inputNode.current.click();
        }
    };
    // post 上传方法
    var post = function (file) {
        var formData = new FormData();
        formData.append(name || 'file', file.raw);
        // 如果用户设置了传入的参数
        if (data) {
            Object.keys(data).forEach(function (key) {
                formData.append(key, data[key]);
            });
        }
        axios.post(action, formData, {
            headers: __assign(__assign({}, headers), { 'Content-Type': "multipart/form-data" }),
            withCredentials: withCredentials,
            onUploadProgress: function (e) {
                var percentage = Math.round((e.loaded * 100) / e.total) || 0;
                if (percentage < 100) {
                    if (onProgress) {
                        updateFileLists(file, { percentage: percentage, status: 'uploading' });
                        onProgress(percentage, file);
                    }
                }
            }
        }).then(function (res) {
            if (onSuccess) {
                updateFileLists(file, { status: 'success', response: res.data });
                onSuccess(res.data, file);
            }
            if (onChange) {
                onChange(file);
            }
        }).catch(function (err) {
            if (onError) {
                updateFileLists(file, { status: 'error', error: err });
                onError(err, file);
            }
            if (onChange) {
                onChange(file);
            }
        });
    };
    // 上传文件
    var uploadFiles = function (files) {
        var postFiles = Array.from(files);
        postFiles.forEach(function (file) {
            var _file = {
                uid: Date.now() + 'file-uid',
                name: file.name,
                status: 'ready',
                size: file.size,
                percentage: 0,
                raw: file
            };
            setFileLists(function (prevList) {
                return __spreadArrays([_file], prevList);
            });
            if (!beforeUpload) {
                post(_file);
            }
            else {
                var result = beforeUpload(_file);
                if (result && result instanceof Promise) {
                    result.then(function (file) {
                        post(_file);
                    });
                }
                else if (result !== false) {
                    post(_file);
                }
            }
        });
    };
    // 删除文件列表
    var handleRemove = function (file) {
        setFileLists(function (prevLists) {
            return prevLists.filter(function (item) { return item.uid !== file.uid; });
        });
        if (onRemove) {
            onRemove(file);
        }
    };
    // input的change事件
    var handleInputChange = function (e) {
        var files = e.target.files;
        if (files) {
            uploadFiles(files);
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { onClick: function () { return handleClick(); } },
            React.createElement("input", { type: "file", className: "input-file", style: { display: 'none' }, ref: inputNode, onChange: function (e) { return handleInputChange(e); }, multiple: multiple, accept: accept }),
            drag ?
                React.createElement(Dragger, { onFile: uploadFiles }, children)
                :
                    children,
            React.createElement(UploadList, { fileLists: fileLists, onRemove: handleRemove }))));
};
Upload.defaultProps = {
    name: 'file-haha',
    drag: false
};
export default Upload;
