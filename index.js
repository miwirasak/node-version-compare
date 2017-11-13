
function compare (v1, v2) {
    var flag1 = v1.indexOf('-') > -1;
    var flag2 = v2.indexOf('-') > -1;
    var arr1 = split(flag1, v1);
    var arr2 = split(flag2, v2);
    arr1 = convertToNumber(arr1);
    arr2 = convertToNumber(arr2);
    var len = Math.max(arr1.length, arr2.length);
    for (var i = 0; i < len; i ++) {
        if (arr1[i] === undefined) {
            return -1
        } else if (arr2[i] === undefined) {
            return 1
        }
        if (arr1[i] > arr2[i]) {
            return 1
        } else if(arr1[i] < arr2[i]) {
            return -1
        }else if(arr1[i] != arr2[i] && beginWithInt(arr1[i]) && beginWithInt(arr2[i]) ){
        	var intArr1 = parseInt(arr1[i]);
        	var intArr2 = parseInt(arr2[i]);
        	if(intArr1 > intArr2){
        		return 1;
        	}else if(intArr1 < intArr2){
        		return -1
        	}
        }
    }
    return 0;
}

function split (flag, version) {
    var result = [];
    if (flag) {
        var tail = version.split('-')[1];
        var _version = version.split('-')[0];
        result = _version.split('.');
        tail = tail.split('.');
        result = result.concat(tail);
    } else {
        result = version.split('.');
    }
    return result;
}

function convertToNumber (arr) {
    return arr.map(function (el) {
        return isNaN(el) ? el : parseInt(el);
    });
}

function beginWithInt (testInt) {
	var intRegex = /^\d+/;
	if(intRegex.test(testInt)) {
	    return 1;
	}else{
		return 0;
	}
}

module.exports = compare;


