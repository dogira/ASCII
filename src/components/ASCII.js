import React from 'react';
import './ASCII.css';

const ASCII = () => {
  const art = [
    "                                             ._",
    "                                           ,(  `-.",
    "                                         ,': `.   `.",
    "                                       ,` *   `-.   \\",
    "                                     ,'  ` :+  = `.  `.",
    "                                   ,~  (o):  .,   `.  `.",
    "                                 ,'  ; :   ,(__) x;`.  ;",
    "                               ,'  :'  itz  ;  ; ; _,-'",
    "                             .'O ; = _' C ; ;'_,_ ;",
    "                           ,;  _;   ` : ;'_,-'   i'",
    "                         ,` `;(_)  0 ; ','       :",
    "                       .';6     ; ' ,-'~",
    "                     ,' Q  ,+ ;',-.'",
    "                   ,( :` ; _,-'~  ;",
    "                 ,~.`c _','",
    "               .';^_,-' ~",
    "             ,'_;-''",
    "            ,,~",
    "            i'",
    "            :",
    "          ',"
  ];

  const masterpiece = [];

  art.forEach(piece => masterpiece.push(<p class="ascii">{piece}</p>));

  return (
    <div class="container">
      <pre class="eight columns">
        {masterpiece}
      </pre>
    </div>
  );
}

export default ASCII;