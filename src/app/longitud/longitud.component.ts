import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-longitud',
  templateUrl: './longitud.component.html',
  styleUrls: ['../style/main.css','./longitud.component.css']
})
export class LongitudComponent implements OnInit {
  menuView:boolean = true;

  unidad:string[] = ['Metro', 'M'];
  valorAConvertir:number = 1;
  valorUnit = {
    nanometro: 0,
    milimetro: 0,
    micrometro: 0,
    centimetro: 0,
    metro: 0,
    pulgada: 0,
    pie: 0,
    yarda: 0,
    milla: 0,
    millaNautica: 0
  }

  obtenerValorInput(e){
    this.valorAConvertir = e.path[0].value;
    this.convertir(this.unidad[0], this.valorAConvertir);
  }

  convertir(unidad:string, valor:number){
   
      if(unidad=="Metro"){
        this.valorUnit.nanometro = valor * 1e+9;
        this.valorUnit.milimetro = valor * 1000;
        this.valorUnit.micrometro = valor * 1e+6;
        this.valorUnit.centimetro = valor * 100;
        this.valorUnit.metro = valor * 1;
        this.valorUnit.pulgada = valor * 39.37;
        this.valorUnit.pie = valor * 3.28084;
        this.valorUnit.yarda = valor * 1.094;
        this.valorUnit.milla = valor / 1609;
        this.valorUnit.millaNautica = valor * 39.37;
      }
      else if(unidad=="Nanometro"){
        this.valorUnit.nanometro = valor * 1;
        this.valorUnit.milimetro = valor * 1e-6;
        this.valorUnit.micrometro = valor * 0.001;
        this.valorUnit.centimetro = valor * 1e-7;
        this.valorUnit.metro = valor * 1e-9;
        this.valorUnit.pulgada = valor * 3.937e-8;
        this.valorUnit.pie = valor * 3.2808e-9;
        this.valorUnit.yarda = valor * 1.0936e-9;
        this.valorUnit.milla = valor * 6.2137e-13;
        this.valorUnit.millaNautica = valor * 5.3996e-13;
      }
      else if(unidad=="Milimetro"){
        this.valorUnit.nanometro = valor * 1e+6;
        this.valorUnit.milimetro = valor * 1;
        this.valorUnit.micrometro = valor * 1000;
        this.valorUnit.centimetro = valor * 0.1;
        this.valorUnit.metro = valor * 0.001;
        this.valorUnit.pulgada = valor * 0.0393701;
        this.valorUnit.pie = valor * 0.00328084;
        this.valorUnit.yarda = valor * 0.00109361;
        this.valorUnit.milla = valor * 6.2137e-7;
        this.valorUnit.millaNautica = valor * 5.3996e-7;
      }
      else if(unidad=="Micrometro"){
        this.valorUnit.nanometro = valor * 1000;
        this.valorUnit.milimetro = valor * 0.001;
        this.valorUnit.micrometro = valor * 1;
        this.valorUnit.centimetro = valor * 1e-4  ;
        this.valorUnit.metro = valor * 1e-6;
        this.valorUnit.pulgada = valor * 3.937e-5;
        this.valorUnit.pie = valor * 3.2808e-6;
        this.valorUnit.yarda = valor * 1.0936e-6;
        this.valorUnit.milla = valor * 6.2137e-10;
        this.valorUnit.millaNautica = valor * 5.3996e-10;
      }
      else if(unidad=="Centimetro"){
        this.valorUnit.nanometro = valor *1e+7;
        this.valorUnit.milimetro = valor * 10;
        this.valorUnit.micrometro = valor * 10000;
        this.valorUnit.centimetro = valor * 1;
        this.valorUnit.metro = valor * 0.01;
        this.valorUnit.pulgada = valor * 0.393701;
        this.valorUnit.pie = valor * 0.0328084;
        this.valorUnit.yarda = valor * 0.0109361;
        this.valorUnit.milla = valor * 6.2137e-6;
        this.valorUnit.millaNautica = valor * 5.3996e-6;
      }
      else if(unidad=="Pulgada"){
        this.valorUnit.nanometro = valor * 2.54e+7;
        this.valorUnit.milimetro = valor * 25.4;
        this.valorUnit.micrometro = valor * 25400;
        this.valorUnit.centimetro = valor * 2.54;
        this.valorUnit.metro = valor * 0.0254;
        this.valorUnit.pulgada = valor * 1;
        this.valorUnit.pie = valor * 0.0833333;
        this.valorUnit.yarda = valor *0.0277778;
        this.valorUnit.milla = valor * 1.5782840909e-5;
        this.valorUnit.millaNautica = valor * 1.3715e-5;
      }
      else if(unidad=="Pie"){
        this.valorUnit.nanometro = valor * 3.048e+8;
        this.valorUnit.milimetro = valor * 304.8;
        this.valorUnit.micrometro = valor * 304800;
        this.valorUnit.centimetro = valor * 30.48;
        this.valorUnit.metro = valor * 0.3048;
        this.valorUnit.pulgada = valor * 12;
        this.valorUnit.pie = valor * 1;
        this.valorUnit.yarda = valor * 0.333333;
        this.valorUnit.milla = valor * 0.000189394;
        this.valorUnit.millaNautica = valor * 0.000164579;
      }
      else if(unidad=="Yarda"){
        this.valorUnit.nanometro = valor * 9.144e+8;
        this.valorUnit.milimetro = valor * 914.4;
        this.valorUnit.micrometro = valor * 914400;
        this.valorUnit.centimetro = valor * 91.44;
        this.valorUnit.metro = valor * 0.9144;
        this.valorUnit.pulgada = valor * 36;
        this.valorUnit.pie = valor * 3;
        this.valorUnit.yarda = valor * 1;
        this.valorUnit.milla = valor * 0.000568182;
        this.valorUnit.millaNautica = valor * 0.000493737;
      }
      else if(unidad=="Milla"){
        this.valorUnit.nanometro = valor * 1.609e+12;
        this.valorUnit.milimetro = valor * 1.609e+6;
        this.valorUnit.micrometro = valor * 1.609e+9;
        this.valorUnit.centimetro = valor * 160934;
        this.valorUnit.metro = valor * 1609.34;
        this.valorUnit.pulgada = valor * 63360;
        this.valorUnit.pie = valor * 5280;
        this.valorUnit.yarda = valor * 1760;
        this.valorUnit.milla = valor * 1;
        this.valorUnit.millaNautica = valor * 0.868976;
      }
      else if(unidad=="Milla Nautica"){
        this.valorUnit.nanometro = valor * 1.852e+12;
        this.valorUnit.milimetro = valor * 1.852e+6;
        this.valorUnit.micrometro = valor * 1.852e+9;
        this.valorUnit.centimetro = valor * 185200;
        this.valorUnit.metro = valor * 1852;
        this.valorUnit.pulgada = valor * 72913.4;
        this.valorUnit.pie = valor * 6076.12;
        this.valorUnit.yarda = valor * 2025.37;
        this.valorUnit.milla = valor * 1.15078;
        this.valorUnit.millaNautica = valor * 1;
      }
    
  }

  toggleView(){
    this.menuView = !this.menuView;
  }
  mostrar(e){
   if(e.path[0].innerText == "Nanometro"){
    this.unidad[0]='Nanometro';
    this.unidad[1]='Nn';

   }
   else if(e.path[0].innerText == "Metro"){
    this.unidad[0]='Metro';
    this.unidad[1]='M';

   }
   else if(e.path[0].innerText == "Milimetro"){
    this.unidad[0]='Milimetro';
    this.unidad[1]='Mm';

   }
   else if(e.path[0].innerText == "Micrometro"){
    this.unidad[0]='Micrometro';
    this.unidad[1]='μm';

   }
   
   else if(e.path[0].innerText == "Centimetro"){
    this.unidad[0]='Centimetro';
    this.unidad[1]='CM';

   }
   else if(e.path[0].innerText == "Pulgada"){
    this.unidad[0]='Pulgada';
    this.unidad[1]='IN';

   }
   else if(e.path[0].innerText == "Pie"){
    this.unidad[0]='Pie';
    this.unidad[1]='FT';

   }
   else if(e.path[0].innerText == "Yarda"){
    this.unidad[0]='Yarda';
    this.unidad[1]='YD';

   }
   else if(e.path[0].innerText == "Milla"){
    this.unidad[0]='Milla';
    this.unidad[1]='M';

   }
   else if(e.path[0].innerText == "Milla Nautica"){
    this.unidad[0]='Milla Nautica';
    this.unidad[1]='MN';

   }
   
   this.toggleView();
   this.convertir(this.unidad[0], this.valorAConvertir);
  }
  constructor() { }

  ngOnInit() {
    this.convertir(this.unidad[0], this.valorAConvertir);
  }

}
