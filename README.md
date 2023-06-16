
# Pokédex en Angular usando PokéAPI

![Alt text](https://github.com/DreamyBit/PokedexAngular/blob/master/docs/pokedex_1.png?sanitize=true)

## Características

- Datos actualizados en tiempo real mediante [PokéAPI][pokeapi].
- Posibilidad de personalizar la navegación mediante cambios en paginado, filtrado responsivo, y tres tipos de ordenamiento: por ID, alfabéticamente ascendiente, y alfabéticamente descendiente.
- Permite revisar los detalles de cualquier Pokémon al hacerles clic.
- Tablas responsivas ante distintas resoluciones de pantalla.

## Requisitos e instalación

El presente proyecto utiliza angular y por ello requiere de la instalación previa de [Node.js][node].

En caso de querer instalar el proyecto mediante [git][git] se debe utilizar el comando:
```shell
git clone https://github.com/DreamyBit/PokedexAngular
```
Para instalar las dependencias, desde la carpeta donde fue descargado el proyecto se debe ejecutar el comando:
```shell
npm install --legacy-peer-deps
```

Una vez se encuentran instaladas las dependencias para ejecutar el proyecto se debe utilizar el comando:
```shell
ng serve --open
```

## Imagenes

La búsqueda no se ve afectada por capitalización de letras.
![Alt text](https://github.com/DreamyBit/PokedexAngular/blob/master/docs/pokedex_search_filter.png?sanitize=true)

El modal muestra información detallada del Pokémon seleccionado.
![Alt text](https://github.com/DreamyBit/PokedexAngular/blob/master/docs/pokedex_modal.png?sanitize=true)

También se ajusta a resoluciones menores
![Alt text](https://github.com/DreamyBit/PokedexAngular/blob/master/docs/pokedex_modal_small.png?sanitize=true)

## Paquetes

```
@angular-devkit/architect____________0.1601.0
@angular-devkit/build-angular________16.1.0
@angular-devkit/core_________________16.1.0
@angular-devkit/schematics___________16.1.0
@angular/cli__________________________16.1.0
@schematics/angular__________________16.1.0
rxjs___________________________________7.8.1
typescript_____________________________5.1.3
```

## Licencia

GNU General Public License v3.0

   [pokeapi]: <https://pokeapi.co>
   [node]: <https://nodejs.org/en>
   [git]: <https://git-scm.com/downloads>
   [gitguide]: <https://github.com/DreamyBit/LandCoverageEE-R/blob/main/docs/Guia%20Script%20-%20Covertura%20de%20suelo%20usando%20Earth%20Engine%20y%20R.pdf>
   [repo]: <https://github.com/DreamyBit/LandCoverageEE-R>
