<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Chief;

class ChiefSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $chiefs = [
            ['name'=>'Gastón Acurio','cuisine'=>'Peruvian','image'=>'public/chiefs/chief-1.jpg','facebook'=>'https://www.facebook.com/gastonacurio','twitter'=>'https://twitter.com/gaston_acurio?lang=es','instagram'=>'https://www.instagram.com/gastonacurio/?hl=es'],
            ['name'=>'Mitsuharu Tsumura','cuisine'=>'Peruvian','image'=>'public/chiefs/chief-2.jpg','facebook'=>'https://www.facebook.com/MitsuharuMaido','twitter'=>'https://twitter.com/mitsuharu_maido','instagram'=>'https://www.instagram.com/mitsuharu_maido/?hl=es'],
            ['name'=>'Pía León','cuisine'=>'Peruvian','image'=>'public/chiefs/chief-3.jpg','facebook'=>'https://www.facebook.com/P%C3%ADa-Le%C3%B3n-116409874017714/','twitter'=>'','instagram'=>'https://www.instagram.com/pialeonkjolle/?hl=es'],
            ['name'=>'Samuel Lodero','cuisine'=>'French','image'=>'public/chiefs/chief-4.jpg','facebook'=>'','twitter'=>'','instagram'=>''],
            ['name'=>'Javier Wong','cuisine'=>'Peruvian','image'=>'public/chiefs/chief-5.jpg','facebook'=>'https://www.facebook.com/ChezJavierWong','twitter'=>'https://twitter.com/javier_wong','instagram'=>'https://www.instagram.com/javierwong__/?hl=es'],
            ['name'=>'Toshiro Konishi','cuisine'=>'Peruvian','image'=>'public/chiefs/chief-6.jpg','facebook'=>'https://www.facebook.com/toshirokonishiachicaprecio/','twitter'=>'','instagram'=>''],
            ['name'=>'Marilú Madueño','cuisine'=>'Peruvian','image'=>'public/chiefs/chief-7.jpg','facebook'=>'https://www.facebook.com/marilu.madueno.3','twitter'=>'https://twitter.com/marilumadueno','instagram'=>'https://www.instagram.com/marilumaduenococina/?hl=es']
        ];

        foreach($chiefs as $chief) 
        {
            Chief::create($chief);
        }
    }
}
