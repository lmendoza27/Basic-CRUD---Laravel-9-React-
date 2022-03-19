<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Recipe;

class RecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $recipes = [
            ['name'=>'Cebiche del Amor','image'=>'public/recipes/recipe-1.jpg','description'=>'En Perú existen distintos cebiches cuyas recetas varían dependiendo de la región. Los hay sólo de pescado y aquellos que incorporan otros productos del mar como ostiones y almejas. Sin embargo, la cebolla, el ají, un poco de sal y el limón piurano son fundamentales en la preparación.','id_chief'=>1],
            ['name'=>'Tortilla de Maíz Morado','image'=>'public/recipes/recipe-2.jpg','description'=>'Perú es una de las regiones del mundo con mayor biodiversidad de maíz. Entre sus cultivos se distinguen especies de colores, tamaños y sabores completamente distintos entre sí, lo que le ha permitido aprovecharlos en un sinnúmero de platillos.','id_chief'=>1],
            ['name'=>'Anticucho de Pulpo','image'=>'public/recipes/recipe-3.jpg','description'=>'Este platillo data de la época virreinal y originalmente se prepara con corazones de res cortados en trozos que se ensartan en un palillo a modo de brocheta, sin embargo, en la actualidad la receta puede elaborarse a base de pollo, pescado, mariscos o cuy, dependiendo de la región.','id_chief'=>1],
            ['name'=>'Carapulcra','image'=>'public/recipes/recipes-4.jpg','description'=>'Este es uno de los platillos peruanos de mayor tradición. Se trata de un potaje de origen indígena hecho con papa sancochada que se guisa con carne de chancho -cerdo- o gallina. En la preparación también se emplea ají panca y mirasol -dos tipos de ají muy especiales en Perú-, ajo y especias.','id_chief'=>2],
            ['name'=>'Esfera de Chocolate','image'=>'public/recipes/recipe-5.jpg','description'=>'En Astrid y Gastón una sopresa espera a la hora del postre: una esfera sensible de chocolate que al bañarse con crema de chocolate caliente muestra sus secretos al interior, una espuma nitro de limón y crutones de orégano. Es la creación de la chef Astrid Gutsche, quien cierra con un postre maravilloso.','id_chief'=>2],
            ['name'=>'Cebiche del Huerto','image'=>'public/recipes/recipe-6.jpg','description'=>'En este plato, los productos de huerto se preparan al estilo de un cebiche, de este modo, la zanahoria, el camote y la quinoa se acompañan con leche de tigre de alcachofa para obtener un platillo totalmente vegetariano.','id_chief'=>3],
            ['name'=>'Papa Cambray a la Huancaína','image'=>'public/recipes/recipe-7.jpg','description'=>'Existen varias historias sobre esta preparación, una de las más famosas cuenta que durante la construcción del Ferrocarril Central del Perú, los obreros se alimentaban con un plato de papas sancochadas que se bañaban con una salsa de queso con rocoto -un ají peruano de color rojo intenso- y leche. En ocasiones se acompaña con un poco de huevo duro.','id_chief'=>4],
            ['name'=>'Sudado','image'=>'public/recipes/recipe-8.jpg','description'=>'El sudado de pescado es un platillo de mucho sabor. La tradición en el norte marca prepararlo con mero o con tollito mantequero que se marina en chicha -una bebida alcohólica que se obtiene principalmente de la fermentación del maíz-, mientras que en el sur y en Lima -la capital del país- se hace a base de cojinova, corvina o chita.','id_chief'=>4],
            ['name'=>'Medallones de Cerdo con salsa de Jamaica','image'=>'public/recipes/recipe-9.jpg','description'=>'Plato de carne con 6 porciones. Sírvelos con la Ensalada tropical de repollo y mango.','id_chief'=>5],
            ['name'=>'Perfecto Salmón asado a la Bruschetta','image'=>'public/recipes/recipe-10.jpg','description'=>'¡No hay necesidad de una baguette para hacer esta sabrosa bruschetta! En esta versión, los tomates picados, el ajo y la albahaca acompañan a un filete de salmón perfectamente asado.','id_chief'=>5],
            ['name'=>'Extasiante Cheesecake de Chocolate','image'=>'public/recipes/recipe-11.jpg','description'=>'Viene con 12 porciones. Los dulces hacen más placentera una dieta balanceada, pero atente al tamaño de la porción.','id_chief'=>6],
            ['name'=>'Salteado Ardiente de Pollo','image'=>'public/recipes/recipe-12.jpg','description'=>'Decóralo con rebanadas de cebollita verde justo antes de servirlo.','id_chief'=>7]
        ];

        foreach($recipes as $recipe) 
        {
            Recipe::create($recipe);
        }
    }
}
