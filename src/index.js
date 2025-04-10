"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SandwichBuilder_1 = require("./models/SandwichBuilder");
const SandwichDirector_1 = require("./models/SandwichDirector");
const builder = new SandwichBuilder_1.SandwichBuilder();
const director = new SandwichDirector_1.SandwichDirector(builder);
director.construirSandwichClasico();
const sandwich = builder.build();
console.log(sandwich.obtenerDescripcion());
