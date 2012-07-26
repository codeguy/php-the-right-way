---
title: Desarrollo Guiado por Comportamiento
isChild: true
---

## Desarrollo Guiado por Comportamiento

Existen dos tipos diferentes de Desarrollo Guiado por Comportamiento (BDD, por sus siglas en inglés): SpecBDD y StoryBDD. SpecBDD se enfoca en el comportamiento o funcionamiento técnico o de parte del código, mientras que StoryBDD se enfoca en el funcionamiento de negocios, el comportamiento de las características o las interacciones. PHP proporciona armazones para estos dos tipos de BDD.

Con el StoryBDD, se escriben historias legibles que describen el comportamiento de su aplicación. Estas historias pueden ser ejecutadas como pruebas en contra de su aplicación. El armazón que se utiliza en PHP para StoryBDD se llama Behat, el cual fue inspirado por el proyecto [Cucumber](http://cukes.info/) de Ruby e implementa el Gherking DSL para describir el comportamiento de características.

Con el SpecBDD, se escriben las especificaciones que describen como su código debe de funcionar. En vez de probar una función o método, solo se describe como la función o método se tiene que comportar. PHP ofrece el armazón [PHPSpec](http://www.phpspec.net/) para este propósito. Este armazon fue inspirado por el proyecto [RSpec](http://rspec.info/) de Ruby.

### Enlaces de BDD

* [Behat](http://behat.org/) el armazón de StoryBDD para PHP
* [PHPSpec](http://www.phpspec.net/) el armazón deSpecBDD paraPHP
* [Codeception](http://www.codeception.com) es un armazón completo para pruebas que utiliza los principios de BDD
