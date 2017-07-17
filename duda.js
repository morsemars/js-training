var DudaKeywordsModel = require('../models/dudaKeywordsModel');

var dudaKeywords;

function bridge(spmList, type, fccValue){
    var regex = buildRegex(type);
    console.log('Regex', regex);

    for(spm of spmList){
        console.log('spm', spm);
        for(column in regex){
            console.log('column, test: ', column, regex[column].test(spm[column]));
            if(regex[column].test(spm[column])){

                spm.SPM_NDF_FCC = fccValue;
                console.log('spm', spm);
                break;
            }
        }
    }
    
    return spmList;
}

function asIgnored(spmList){
    return bridge(spmList, 'blacklist', 999999);
}

function asPharma(spmList){
    return bridge(spmList, 'pharma', -2045);
}

function asCH(spmList){
    return bridge(spmList, 'consumerHealth', -2067);
}

function buildRegex(type){
    var columns = {};
    var regex = {};

    for(dudaKeyword of module.exports.dudaKeywords || []){
        if(dudaKeyword.type == type){
            for(column of dudaKeyword.columns){
            if(!columns.hasOwnProperty(column)) columns[column] = [];
                columns[column].push(dudaKeyword.keyword);
                columns[column] = columns[column].concat(dudaKeyword.synonyms);
            }
        }
    }

    for(column in columns){
        var rawRegex = '(' + columns[column].join("|") + ')+';
        regex[column] = new RegExp(rawRegex , 'i','u');
    }

    return regex;
}

module.exports = {
    dudaKeywords: dudaKeywords,
    asIgnored: asIgnored,
    asPharma: asPharma,
    asCH:asCH
}