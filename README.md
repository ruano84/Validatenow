// Versión en Español

Validatenow es un pequeño plugin para jQuery para validar formularios de html de manera rápida. Por ahora solo valida elementos <code>&lt;input type="text"&gt;</code> y <code>&lt;textarea&gt;</code>, en un futuro cercano agregaré soporte a otros elementos inputs.

#Modo de uso:
* * *

1. Declara una versión de jQuery dentro del <code>&lt;head&gt;</code> de tu página (preferiblemente la última). Ejemplo:

    <pre><code>&lt;head&gt;
  &lt;script src=&quot;http://code.jquery.com/jquery-latest.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;/head&gt;</code></pre>

2. Declara el js del plugin validatenow luego del de jQuery. Ejemplo:

    <pre><code>&lt;head&gt;
  &lt;script src=&quot;http://code.jquery.com/jquery-latest.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
  &lt;script src=&quot;/ruta/del/plugin/jquery.validatenow.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;/head&gt;</code></pre>

3. Dentro de la función que responde al evento ready de document, haz la llamada de validate now. Ejemplo:

    <pre><code>&lt;head&gt;
  &lt;script src=&quot;http://code.jquery.com/jquery-latest.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
  &lt;script src=&quot;/ruta/del/plugin/jquery.validatenow.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
  &lt;script type=&quot;text/javascript&quot;&gt;
    $(document).ready(function (){
      $(form#iddelform).validatenow({
        errorClass: "error",
        req: "req",
        onError: function (){
          $(".mensajeerror").show();
        }
      });
    })
  &lt;/script&gt;
&lt;/head&gt;</code></pre>

4. Añade las clases necesarias en tu html para que validatenow reconozca los datos requeridos y sus tipos. Ejemplo:

    <pre><code>&lt;form id=&quot;iddelform&quot;&gt;
      &lt;input type=&quot;text&quot; /&gt; &lt;!-- Campo no requerido --&gt;
      &lt;input type=&quot;text&quot; class=&quot;req&quot; /&gt; &lt;!-- Campo requerido de texto --&gt;
      &lt;input type=&quot;text&quot; class=&quot;req num&quot; /&gt; &lt;!-- Campo requerido que solo acepta n&Atilde;&ordm;meros --&gt;
      &lt;input type=&quot;text&quot; class=&quot;req email&quot; /&gt; &lt;!-- Campo requerido de tipo email --&gt;
      &lt;input type=&quot;text&quot; class=&quot;num&quot; /&gt; &lt;!-- Campo no requerido que solo acepta n&Atilde;&ordm;meros, solo valida este campo cuando has introducido un valor --&gt;
      &lt;input type=&quot;text&quot; class=&quot;email&quot; /&gt; &lt;!-- Campo no requerido de tipo email, solo valida este campo cuando has introducido un valor --&gt;
      &lt;input type=&quot;submit&quot; /&gt;
&lt;/form&gt;</code></pre>

#Sintaxis:
* * *



// English version coming soon