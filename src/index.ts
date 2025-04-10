import { SandwichBuilder } from "./models/SandwichBuilder";
import { SandwichDirector } from "./models/SandwichDirector";

const builder = new SandwichBuilder();
const director = new SandwichDirector(builder);

director.construirSandwichClasico();

const sandwich = builder.build();

console.log(sandwich.obtenerDescripcion());
