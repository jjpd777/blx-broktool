<html>
<h1 align="center">GYO AdminTemplate</h1> <br>
<p align="center">
  <a href="https://gitpoint.co/">
    <img alt="GYO Solutions" title="GitPoint" src="http://gyo-solutions.com/logo.png" width="250" height="125">
  </a>
</p>

<p align="center">
  Template para generar paneles administrativos con AngularJS y PHP
</p>

<p align="center">
  <a href="#instalacion">Instalación</a> •
  <a href="#features">Features</a> •
  <a href="#creditos">Creditos</a> •
  <a href="#usage">Uso</a> •
  <a href="#releases">Historico de Cambios</a> •
  <a href="#license">Licencia</a>
</p>

## Instalación

```shell
0. git clone https://gaboluque@bitbucket.org/gyo1/panel-gyo.git
1. Install the NodeJS dependencies: `npm install`.
2. Install the Bower dependencies: `bower install`.
3. Run the gulp build task: `gulp build`.
4. Run the gulp default task: `gulp`. This will build any changes made automatically, and also run a live reload server on [http://localhost:8888](http://localhost:8888).

```

---

## Features

Algunas de las cosas que se pueden hacer con el proyecto:

* Administración de usuarios
* Dashboard de estadisticas

<p align="center">
  <img src = "https://i.imgur.com/1MJ6MzO.png" width=700>
</p>


![Recordit GIF](http://g.recordit.co/hYjqx8eliy.gif)
----------------------------------------------------

## Credits

This software uses code from several open source packages.

- [Bootstrap](http://angular-ui.github.io/bootstrap/versioned-docs/1.3.2/)
- [AngularJS](https://angularjs.org/)
- [Angular Chart JS](http://jtblin.github.io/angular-chart.js/)
- [Angular Confirm](https://craftpip.github.io/angular-confirm/)

---

## Uso

###Crear un apartado

1. Crea una carpeta en templates/app/{nombre del apartado}
2. Crea el template HTML dentro de la carpeta
3. Crea un controller en la carpeta js/controllers/{nombre del controller}
4. Agrega un estado en el archivo /js/routes.js de la siguiente manera:
``` javascript
    .state('app.dashboard', {
                    url: '/dashboard',
                    controller: 'dashboardCtrl',
                    templateUrl: 'templates/app/Dashboard/dashboard.html'
                })

```
4. Agrega la ruta en el sidebar en el archivo /templates/app/app.html :
``` html
   
    <li class="sidebar-list">
        <a ui-sref="app.dashboard">Dashboard <span class="menu-icon fa fa-bar-chart"></span></a>
    </li>

```


Segundo uso

```javascript
// code away!

let generateProject = project => {
  let code = [];
  for (let js = 0; js < project.length; js++) {
    code.push(js);
  }
};
```


Tercer uso

```javascript
// code away!

let generateProject = project => {
  let code = [];
  for (let js = 0; js < project.length; js++) {
    code.push(js);
  }
};
```

---
## Historico de Cambios

* Fecha 23/02/2018: Primer version
  - Inicio de sesion
  - Administracion de usuarios
  - Vista de dashboard

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2015 Â© <a href="http://fvcproductions.com" target="_blank">FVCproductions</a>.

</html>