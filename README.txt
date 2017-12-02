Solo ante el peligro.
Para este ejercicio no partes de una base, eso sí, Google y las diapos siempre están ahí.

Bien, realiza una página web sencilla (sin apenas maquetacion, eso déjalo para el final) donde hay 2 vistas principales y una vista individual.
Nada más llegar a la web el usuario se encuentra con la vista Home, donde observará una lista de móviles.

Si el usuario clicka en el nombre del móvil navegará a una vista individual de dicho móvil.
Además, hay otra página principal a la que se puede acceder desde la navbar. Esta es la página de “Lista de deseados” .
En esta vista el usuario verá una lista con los móviles que ha ido marcando como deseados.

Y por último, realiza la vista individual de un móvil donde aparecerán más detalles de dicho móvil y la foto en grande. Además, habrá un botón de “Añadir a deseados” en la vista.

Fíjate en los mockups para definir la estructura!

Requerimientos: Separa la lógica de la carga de los móviles y los favoritos a una factoría "PhonesFactory".
Esta factoría tiene que tener como mínimo los métodos getAll, get, setDesired y getDesired.
Para empezar esta factoría guardará los cambios en LocalStorage.
El getAll devolverá de momento un array con 7 móviles introducidos por ti.

Los campos mínimos de estos móviles han de ser :
    id: , name: , brand:  , photo : , memory :  , screen : , bluetooth : , OS :
