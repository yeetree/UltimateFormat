function binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}

function rot13(str) {
  var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  var index     = x => input.indexOf(x);
  var translate = x => index(x) > -1 ? output[index(x)] : x;
  return str.split('').map(translate).join('');
}

function Encode(data) {
  var encode = btoa(btoa(btoa(btoa(btoa(data)))));
  var encode2 = rot13(encode);
  encode = btoa(btoa(btoa(btoa(btoa(encode2)))));
  encode2 = rot13(encode);
  encode = btoa(btoa(btoa(btoa(btoa(encode2)))));
  encode2 = rot13(encode);
  encode = btoa(btoa(btoa(btoa(btoa(encode2)))));
  encode2 = rot13(encode);
  encode = btoa(btoa(btoa(btoa(btoa(encode2)))));
  encode2 = rot13(encode);
  encode = binary(encode2);
  
  encode2 = btoa(btoa(btoa(btoa(btoa(data)))));
  encode = rot13(encode2);
  encode2 = btoa(btoa(btoa(btoa(btoa(encode)))));
  encode = rot13(encode2);
  encode2 = btoa(btoa(btoa(btoa(btoa(encode)))));
  encode = rot13(encode2);
  encode2 = btoa(btoa(btoa(btoa(btoa(encode)))));
  encode = rot13(encode2);
  encode2 = btoa(btoa(btoa(btoa(btoa(encode)))));
  encode = rot13(encode2);
  encode2 = binary(encode);
  
  encode = btoa(btoa(btoa(btoa(btoa(data)))));
  encode2 = rot13(encode);
  encode = btoa(btoa(btoa(btoa(btoa(encode2)))));
  encode2 = rot13(encode);
  encode = btoa(btoa(btoa(btoa(btoa(encode2)))));
  encode2 = rot13(encode);
  encode = btoa(btoa(btoa(btoa(btoa(encode2)))));
  encode2 = rot13(encode);
  encode = btoa(btoa(btoa(btoa(btoa(encode2)))));
  encode2 = rot13(encode);
  encode = binary(encode2);
  
  encode2 = btoa(btoa(btoa(btoa(btoa(data)))));
  encode = rot13(encode2);
  encode2 = btoa(btoa(btoa(btoa(btoa(encode)))));
  encode = rot13(encode2);
  encode2 = btoa(btoa(btoa(btoa(btoa(encode)))));
  encode = rot13(encode2);
  encode2 = btoa(btoa(btoa(btoa(btoa(encode)))));
  encode = rot13(encode2);
  encode2 = btoa(btoa(btoa(btoa(btoa(encode)))));
  encode = rot13(encode2);
  encode2 = binary(encode);
  
  encode = btoa(btoa(btoa(btoa(btoa(data)))));
  encode2 = rot13(encode);
  encode = btoa(btoa(btoa(btoa(btoa(encode2)))));
  encode2 = rot13(encode);
  encode = btoa(btoa(btoa(btoa(btoa(encode2)))));
  encode2 = rot13(encode);
  encode = btoa(btoa(btoa(btoa(btoa(encode2)))));
  encode2 = rot13(encode);
  encode = btoa(btoa(btoa(btoa(btoa(encode2)))));
  encode2 = rot13(encode);
  encode = binary(encode2);
  
  return encode;
}
