var UIGenerator = function(){
    this.generateList = function(dataSource) {
        var option;
        for(var i in dataSource){
            option+= '<option value="' + dataSource[i] + '">' + dataSource[i] + '</option>'; 
        }
        return option;
    };
    this.generateTable = function(dataSource){
         
        if(dataSource === undefined || dataSource.length === 0)
            return 'No Records to Display';
        // Read all Keys from the 0th record of the array
        var columns = Object.keys(dataSource[0]);
        var table = '<table>';
        var thead='<thead><tr>';
        // generate Columns
        for(var i in columns){
            thead+='<th>' + columns[i] + '</th>';
        }
        thead+= '</tr></thead>';
        table += thead;

        // generate rows
        var tbody="<tbody>";
        for(var r in dataSource) {
            // the inner loop wil be executed for each record in dataSource
            tbody += '<tr>';
            for(var h in columns){
                // dataSource[r], each record from dataSource
                // dataSource[r][columns[h]]: The value of each property of each record in dataSOurce
                tbody += '<td>' + dataSource[r][columns[h]] + '</td>';
            }
            tbody += '</tr>';
            console.log(tbody);
        }
        tbody += '</tbody>';
        table += tbody;
        table += '</table>';


        return table;
    }
};