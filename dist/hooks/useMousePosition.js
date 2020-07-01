import { useEffect, useState } from 'react';
var useMousePosition = function () {
    var _a = useState({ x: 0, y: 0 }), position = _a[0], setPosition = _a[1];
    var func = function (e) {
        setPosition({ x: e.clientX, y: e.clientY });
    };
    useEffect(function () {
        document.addEventListener('mousemove', func);
        return function () {
            document.removeEventListener('mousemove', func);
        };
    }, []);
    return position;
};
export default useMousePosition;
