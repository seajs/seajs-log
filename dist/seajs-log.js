define("seajs/seajs-log/1.0.1/seajs-log",[],function(){var a=seajs.data;seajs.log=function(b,c){window.console&&(c||a.debug)&&console[c||(c="log")]&&console[c](b)}});
seajs.require("seajs/seajs-log/1.0.1/seajs-log");
