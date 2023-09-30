const checkStringLength = function(str, maxLength){
  return str.length <= maxLength;
};

const isPalindrom = function(str){
  const newStr = str.replaceAll(' ','').toLowerCase();
  let result = '';
  for(let i = newStr.length-1; i >= 0; i--){
    const symbol = newStr[i];
    result += symbol;
  }
  return newStr === result;
};

const findDigits = function(obj){
  const str = obj.toString();
  let result = '';

  for(let i = 0; i < str.length; i++){
    const symbol = Number.parseInt(str[i], 10);
    if(Number.isInteger(symbol)){
      result += symbol;
    }
  }
  return result.length > 0 ? Number.parseInt(result, 10) : NaN;
};
