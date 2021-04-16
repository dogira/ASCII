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

  art.forEach(piece => masterpiece.push(<li class="ascii">{piece}</li>));

  return (
    <div class="container">
      <pre class="eight columns">
        <ul>
          {masterpiece}
        </ul>
      </pre>
    </div>
  );
}

export default ASCII;