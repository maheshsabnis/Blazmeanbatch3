var Module = (function(){
    // the 'str' is a local scope onlw within the Module
    // all functions of the module can access the 'str'
    var str = 'HH';

    function changeCase(s,c){
        str = s;    
        if(c === 'L' || c === 'l') return str.toLowerCase();
        if(c === 'U' || c === 'u') return str.toUpperCase();
        return str;
    }

    return {
        modifyCase: changeCase,
        strValue: str
    };

})();

