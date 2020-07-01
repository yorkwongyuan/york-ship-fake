import { useState, useEffect } from 'react';
function useDebounce(value, delay) {
    if (delay === void 0) { delay = 300; }
    // 注意这里的value,每次输入改变,是不会触发debounce的修改的,只有setDebounce才能修改
    var _a = useState(value), debounce = _a[0], setDebounce = _a[1];
    useEffect(function () {
        var timer = setTimeout(function () {
            setDebounce(value);
        }, delay);
        return function () { return clearTimeout(timer); };
    }, [value, delay]);
    return debounce;
}
export default useDebounce;
