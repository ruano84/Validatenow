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
      &lt;input type=&quot;text&quot; class=&quot;req num&quot; /&gt; &lt;!-- Campo requerido que solo acepta n&uacute;meros --&gt;
      &lt;input type=&quot;text&quot; class=&quot;req email&quot; /&gt; &lt;!-- Campo requerido de tipo email --&gt;
      &lt;input type=&quot;text&quot; class=&quot;num&quot; /&gt; &lt;!-- Campo no requerido que solo acepta n&uacute;&ordm;meros, solo valida este campo cuando has introducido un valor --&gt;
      &lt;input type=&quot;text&quot; class=&quot;email&quot; /&gt; &lt;!-- Campo no requerido de tipo email, solo valida este campo cuando has introducido un valor --&gt;
      &lt;input type=&quot;submit&quot; /&gt;
&lt;/form&gt;</code></pre>

#Sintaxis:
* * *

La manera de invocar Validatenow es la siguiente:

	$("form[name=nombreformulario]").validatenow( metodo, [opciones] );

El par&aacute;rametro <code>metodo</code> acepta un String, los m&eacute;todos que puedes utilizar son los siguientes:
	
1. "init": Invocas a Validatenow para que valide el formulario de acuerdo a las clases de css que agregaste en tu código html. Este m&eacute;todo acepta un segundo par&aacute;metro de tipo objeto o null, que puede tener los siguientes llaves de nombre:

- req &lt;String&gt;: Clase css a utilizar para indicar a Validatenow que un campo es requerido (Ojo: no utilizar el punto al comienzo del string). Valor por defecto: "req".
- errorClass &lt;String&gt;: Clase css con que se estilizará un campo de input en caso de que Validatenow verifique que su valor no coincide con el formato requerido (Ojo: no utilizar el punto al comienzo del string). Valor por defecto: "error.msg".
- errorMsg &lt;String&gt;: Clase css con que se identificará el mensaje de error que se mostrará en caso de que Validatenow verifique que el formulario no es válido (Ojo: no utilizar el punto al comienzo del string). Valor por defecto: "error.msg".
- onError &lt;Function&gt;: Callback a llamar en caso de que Validatenow encuentre al formulario inválido. Nota: Si este valor es asignado, Validatenow no mostrará el mensaje de error identificado por <code>errorMsg</code> autom&aacute;ticamente.
- onSubmit  &lt;Function&gt;: Callback a llamar en caso de que Validatenow verifique que el formulario sea v&aacute;- Nota: Al asignar esta funci&oacute;n, el submit del formulario no se har&aacute; autom&aacute;ticamente, a menos que el valor de retorno de la funci&oacute; sea <code>true</code>. Es ideal para utilizar adicionalmente una llamada a AjaxSubmit, por ejemplo.

2. "reset": Vacía los valores de los campos del formulario, ocultando el mensaje de error identificado por <code>erroMsg</code> y los estilos asignados con <code>errorMsg</code>. No acepta el par&aacute;metro de opciones.
3. "clean": Casi idéntico al método <code>reset</code>, solo que deja los valores de los campos del formulario intacto.

#Errores conocidos
***

-Al utilizar el método <code>reset</code>, se borrará también el valor de todos los input de tipo hidden, usar con precaución

// English version coming soon