
//Binary Utility: https://gist.github.com/belohlavek/90771ccccb11100e76d1
var Util = {
	toBinary: function(input) {
		var result = "";
		for (var i = 0; i < input.length; i++) {
			var bin = input[i].charCodeAt().toString(2);
			result += Array(8 - bin.length + 1).join("0") + bin;
		} 
		return result;
	},

	toAscii: function(input) {
		var result = "";
		var arr = input.match(/.{1,8}/g);
		for (var i = 0; i < arr.length; i++) {
			result += String.fromCharCode(parseInt(arr[i], 2).toString(10));
		}
		return result;
	}
}

function formatBinaryBits(s) {
    return s.toString().replace(/\d{8}(?=.)/g, '$& ');
}

function UnFormatBinaryBits(s) {
    return s.toString().replace(/\s/g, '');
}

function rot13E(str) {
  var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  var index     = x => input.indexOf(x);
  var translate = x => index(x) > -1 ? output[index(x)] : x;
  return str.split('').map(translate).join('');
}

function rot13D(str) {
  var input     = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  var output    = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var index     = x => input.indexOf(x);
  var translate = x => index(x) > -1 ? output[index(x)] : x;
  return str.split('').map(translate).join('');
}

function Encode(data) {
  var encode = btoa(btoa(btoa(data)));
  var encode2 = rot13E(encode);
  encode = Util.toBinary(encode2);
  encode2 = btoa(encode);
  encode = rot13E(encode2);
  encode2 = Util.toBinary(encode);
  encode = formatBinaryBits(encode2);
  
  return encode;
}

function Decode(data) {
  data = UnFormatBinaryBits(data);
  var decode = Util.toAscii(data);
  var decode2 = rot13D(decode);
  decode = atob(decode2);
  decode2 = Util.toAscii(decode);
  decode = rot13D(decode2);
  decode2 = atob(atob(atob(decode)));

  return decode2;
}
