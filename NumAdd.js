function NumberAddition(str) {
  var result = 0,
      temp = 0;
  function isNumeric(c) {
    return !isNaN(parseFloat(c)) && isFinite(c);
  }
  for ( i = 0; i < str.length; i++ ) {
    if ( isNumeric( str[i] ) ) {
      temp = temp * 10;
//       this is string coersion turning a string into a number by *1
      temp = temp + ( str[i] * 1 );
      console.log("this is the number " + temp);
    }
    else { 
      if ( temp !== 0 ){
      result = result + temp;
      }
      temp = 0;
    }
  }
  result = result + temp;
  console.log(result);
  return result;
}

NumberAddition("88ftp3gg1t");