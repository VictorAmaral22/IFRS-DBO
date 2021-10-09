// youtube.js // 0.1 pts

let url = 'https://www.youtube.com/watch?v=KMU0tzLwhbE';
// your algorithm here
let sp = url.split('watch?v=');
url = 'http://youtu.be/' + sp[1];
console.log(url); // http://youtu.be/KMU0tzLwhbE
console.assert(url === 'http://youtu.be/KMU0tzLwhbE');

url = 'https://www.youtube.com/watch?v=AdFU6l4fL_E'
// your algorithm here
sp = url.split('watch?v=');
url = 'http://youtu.be/' + sp[1];
console.log(url); // http://youtu.be/AdFU6l4fL_E
console.assert(url === 'http://youtu.be/AdFU6l4fL_E');

url = 'https://www.youtube.com/watch?v=coNfzdUOw40';
// your algorithm here
sp = url.split('watch?v=');
url = 'http://y2u.be/' + sp[1];
console.log(url); // http://y2u.be/coNfzdUOw40
console.assert(url === 'http://y2u.be/coNfzdUOw40');

url = 'https://www.youtube.com/watch?v=EhkitMSi-ow';
// your algorithm here
sp = url.split('watch?v=');
url = 'http://y2u.be/' + sp[1];
console.log(url); // http://y2u.be/EhkitMSi-ow
console.assert(url === 'http://y2u.be/EhkitMSi-ow');
