# MalNet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build --prod --base-href https://user.github.io/Malnet/`

replace user with github username.

move dist/Malnet/* to dist folder

Run ngh to publish change

follow instructions here https://dzone.com/articles/how-to-deploy-an-angular-application-to-github

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Installing Dependencies

Run npm  install,

modify following node_module file

force-graph/src/index.d.ts

add below comment.

// @ts-ignore
export type ForceGraphInstance = ForceGraphGenericInstance<ForceGraphInstance>;

## Project configuration changes

assets/config/about.json <br>
assets/config/citations.json <br>
assets/config/downloads.json <br>
assets/config/faq.json <br>
assets/config/graph.json <br>
assets/config/home.json <br>
assets/config/image.json <br>
assets/config/particles.json <br>
assets/config/stats.json <br>
assets/config/team.json <br>

## Graphs and Image files for plots

assets/graph/
assets/image/

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
