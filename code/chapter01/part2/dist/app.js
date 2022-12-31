System.register("m", [], function (exports_1, context_1) {
    "use strict";
    var h, b, c;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("h", h = "你好");
            b = 20;
            c = 'hello';
            console.log(b, c);
        }
    };
});
System.register("app", [], function (exports_2, context_2) {
    "use strict";
    var a;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            a = 10;
            console.log(a);
        }
    };
});
