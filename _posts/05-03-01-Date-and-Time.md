---
title: Fecha y Hora
isChild: true
---

## Fecha y Hora

PHP dispone de una clase llamada **DateTIme** para asistir en la lectura, escritura, comparación y calculación de la fecha y hora. Existen muchas funciones en PHP relacionadas con la manipulación de la fecha y la hora, sin embargo, la clase **DateTime** provee una mejor interface orientada a objetos para los situaciones más comunes. También tiene la capacidad de utilizar los husos horarios; esta información no se considerará en esta corta introducción.

Para comenzar a trabajar con DateTime primero se convierte la cadena de texto que contiene la fecha y la hora a un objeto con el método de fabricación `createFromFormat()` o también se puede crear un objeto con `new \DateTime` que contendrá la fecha y hora actual. Después, puede utilizar el método `format()` para convertir el objeto DateTime de regreso a una cadena de texto e imprimirla:

{% highlight php %}
<?php
$fecha = '22. 11. 1968';
$inicio = \DateTime::createFromFormat('d. m. Y', $fecha);

echo "Fecha de Inicio: " . $inicio->format('m/d/Y') . "\n";
{% endhighlight %}

Se puede utilizar la clase DateInterval para realizar calculaciones con DateTime. La clase DateTime tiene métodos como `add()` y `sub()` que requieren que pase un DateInterval como argumento. Nunca escriba código que cuente con el mismo número de segundos en todos los días ya que los ajustes de los husos horarios y el horario de verano (daylight savings time) invalidaría esa suposición. En vez de eso, utilice los intervalos de fechas para hacer sus calculaciones. Para calcular la diferencia entre fechas utilice el método `diff()`. Este le devolverá un `return new DateInterval`, lo cual puede ser fácilmente impreso en la pantalla.

{% highlight php %}
<?php
// Crea una copia de $inicio y añade un mes y 6 días
$final = clone $inicio;
$final->add(new \DateInterval('P1M6D'));

$diff = $final->diff($inicio);
echo "Diferencia: " . $diff->format('%m mes, %d días (total: %a días)') . "\n";
// Diferencia: 1 mes, 6 días (total: 37 días)
{% endhighlight %}

Es posible comparar fácilmente los objetos DateTime:

{% highlight php %}
<?php
if($inicio < $final) {
    echo "¡El inicio sucede antes que el final!\n";
}
{% endhighlight %}
    
Este último ejemplo demuestra cómo se utiliza la clase DatePeriod para iterar sobre eventos periódicos. El objeto toma dos objetos DateTime, uno para el inicio y el otro para el final, y el intervalo que define el número de eventos periódicos que se devuelven. 

{% highlight php %}
<?php
// Imprimir todos los jueves entre $inicio y $final
$intervaloDePeriodo = \DateInterval::createFromDateString('first thursday');
$iteradorDePeriodo = new \DatePeriod($inicio, $intervaloDePeriodo, $final, \DatePeriod::EXCLUDE_START_DATE);
foreach($iteradorDePeriodo as $fecha)
{
    // Imprimir cada fecha en el periodo
    echo $fecha->format('m/d/Y') . " ";
}
{% endhighlight %}

* [Leer acerca de la clase DateTime][datetime]
* [Como formatear la fecha][dateformat] (Opciones de los formatos aceptados para una fecha)

[datetime]: http://php.net/manual/es/book.datetime.php
[dateformat]: http://php.net/manual/es/function.date.php
