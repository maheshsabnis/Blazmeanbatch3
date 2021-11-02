function MyUtilities() {
    function privateFunction(){
        console.log('HHAHHAHAHAHIIIIIHOOOO');
    }
    return {
        getLength: function (str) {
            return str.length;
        },
        sort: function (arr) {
            if (arr.length > 0 || arr !== undefined) {
                return arr.sort(function (a, b) { return a - b; });
            }
            return 0;
        },
        reverse: function (arr) {
            if (arr.length > 0 || arr !== undefined) {
                return arr.sort(function (a, b) { return b - a; });
            }
            return 0;
        },
        changeCase: function (str, c) {
            switch (c) {
                case 'U':
                    str = str.toUpperCase();
                    break;
                case 'L':
                    str = str.toLowerCase();
                    break;
                default:
                    str = str;    
            }

            return str;
        } 
    };
};