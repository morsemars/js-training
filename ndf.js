var testRaw = require('./raw.json');

console.log(testRaw);

function getEANList(spmList){
    return spmList.map(function(spm){
        return spm.SPM_Product_EAN
    });
}

module.exports = {
    ean: getEANList(testRaw)
}


/*
var fs = require('fs');
fs.readFile('C:\\Users\\Morse\\Documents\\Ideyatech Training\\Training Modules\\NodeJS\\autobridging\\autobridging\\raw.csv', 'utf8',function (error, data){
    if(error) console.log(error);
    var data = data.split("\r\n");
    var headers = [];
    var raw = [];

    for(row of data){
        var currentRow = row.split(',');
        console.log(currentRow);
        if(headers.length == 0){
            for(column of currentRow){
                 headers.push(column);
            }
            console.log(headers);
        }else{
            var rowObj = {}
            for(i = 0; i < currentRow.length; i++){
                console.log(headers[i], currentRow[i]);
                var header = headers[i]
                if(header == 'SPM_NDF_FCC'){
                    rowObj[header] = 0;
                }else if(header == 'QtyFct') {
                    rowObj[header] = 1;
                }else{
                    rowObj[header] = currentRow[i];
                }
            }
            raw.push(rowObj);
        }
    }

    fs.writeFile('raw.json', JSON.stringify(raw), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

});
*/