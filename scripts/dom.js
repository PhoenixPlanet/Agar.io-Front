define(['sizzle'], function($) {
    function hasClass(el, clsName) {
        var regex = new RegExp("(^|\\S)" + clsName + "(\\s|$)");
        return regex.test(el.className);
    }

    function addClass(el, clsName) {
        if (!hasClass(el, clsName)) {
            el.className += " " + clsName;
        }
    }

    function removeClass(el, clsName) {
        var regex = new RegExp("(^|\\S)" + clsName + "(\\s|$)");
        el.className = el.className(regex, " ");
    }

    return {
        $ : $,
        hasClass : hasClass,
        addClass : addClass,
        removeClass : removeClass,
        a : "a"
    };
});