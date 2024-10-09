import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Producto{
  id: Number,
  precio:Number,
  nombre: String,
  descripcion: String,
  imagen: String,
  categoria: String
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
  productos :Producto[]=[
    {
      id:1,
      precio:1000,
      nombre:"Banco Karfas cedro",
      descripcion:" Medida (mm) 1000x450x450 (Ancho x profundidad x alto ),  1200x450x450 (Ancho x profundidad x alto )",
      categoria:"Mueble",
      imagen:"/assets/Sillas - Bancos - Sillones1.png",
    },
    {
      id:2,
      precio:1000,
      nombre:"Banqueta Zante Paraiso",
      descripcion:"Medida (mm) 340 x 340 x 1000 (Ancho x profundidad x alto )",
      categoria:"Mueble",
      imagen:"/assets/Sillas - Bancos - Sillones2.png"
    },
    {
      id:3,
      precio:1000,
      nombre:"Juego sillones exterior con almohadones",
      descripcion:" Medida (mm) Sillon individual 70x80x70 (ancho x alto x prof) + Sillon 3 cuerpos 180x80x70 (ancho x alto x prof)",
      categoria:"Rack TV",
      imagen:"/assets/Sillas - Bancos - Sillones3.png"
    },
    {
      id:4,
      precio:1000,
      nombre:"Comoda Lazio",
      descripcion:"Medida (mm) 120 x 700 x 400 (ancho x alto x prof)",
      categoria:"Rack TV",
      imagen:"/assets/cajonera1.png"
    },
    {
      id:5,
      precio:1000,
      nombre:"Mesa Dakota",
      descripcion:"Medida (mm) 800 x 800 (diametro x altura) , 1000 x 800 (diametro x altura)",
      categoria:"Rack TV",
      imagen:"/assets/mesa1.jpg"
    },
    {
      id:6,
      precio:1000,
      nombre:"Mesa Mykonos Cedro",
      descripcion:"Medidas (mm) 1200x700x800 (Ancho x profundidad x alto )",
      categoria:"Rack TV",
      imagen:"/assets/mesa2.png"
    },
    {
      id:7,
      precio:1000,
      nombre:"Cajonera Kendall Paraíso",
      descripcion:"Medida (mm) 400x450x690 (Ancho x profundidad x alto )",
      categoria:"Rack TV",
      imagen:"/assets/cajonera2.png"
    },
    {
      id:8,
      precio:1000,
      nombre:"Escritorio Vancouver en L Paraiso",
      descripcion:"Medida (mm) 1600x600x750 L de 600×600 (Ancho x profundidad x alto )",
      categoria:"Rack TV",
      imagen:"/assets/escritorio1.png"
    },
    {
      id:9,
      precio:1000,
      nombre:"Escritorio Santorini Paraíso",
      descripcion:"Medida (mm) 1000x500x750 (Ancho x profundidad x alto )",
      categoria:"Rack TV",
      imagen:"/assets/escritorio2.png"
    },
    {
      id:10,
      precio:1000,
      nombre:"Escritorio Brent Paraiso",
      descripcion:" Medida (mm) 1400x600x750 (Ancho x profundidad x alto )",
      categoria:"Rack TV",
      imagen:"/assets/escritorio3.png"
    },
    {
      id:11,
      precio:1000,
      nombre:"Mesa Reuniones Quinn Paraíso",
      descripcion:"Medida (mm) 1200x700x800 (Ancho x profundidad x alto )",
      categoria:"Rack TV",
      imagen:"/assets/mesa3.png"
    },
    {
      id:12,
      precio:1000,
      nombre:"Rack TV Ferguson Cedro",
      descripcion:" Medida (mm) 200 x 180 x 40 (ancho x alto x prof) (Alto de torres) parte central 70cm x alto",
      categoria:"Rack TV",
      imagen:"/assets/RackTV1.png"
    },
    {
      id:13,
      precio:1000,
      nombre:"Rack TV Orlando Paraiso",
      descripcion:"Medida (mm) 2000 x 800 x 400 (ancho x alto x profundidad)",
      categoria:"Rack TV",
      imagen:"/assets/RackTV2.jpg"
    },
    {
      id:13,
      precio:1000,
      nombre:"Estantería Babel Paraíso",
      descripcion:"Medida (mm) 700x280x1700(Ancho x profundidad x alto )",
      categoria:"Estanteria",
      imagen:"/assets/estanteria1.png"
    },
    {
      id:14,
      precio:1000,
      nombre:"Estanteria baja Marsella Paraíso",
      descripcion:"Medida (mm) 1800x400x1200 (Ancho x profundidad x alto )",
      categoria:"Estanteria",
      imagen:"/assets/estanteria2.png"
    },
    {
      id:15,
      precio:1000,
      nombre:"Estantería Franklin Paraiso",
      descripcion:"Medida (mm) 1200 x 350 x 1800 (ancho x prof x alto)",
      categoria:"Estanteria",
      imagen:"/assets/estanteria3.png"
    },
    {
      id:16,
      precio:1000,
      nombre:"Estantería Turin",
      descripcion:"Medida (mm) 850x350x2250 (Ancho x profundidad x alto )",
      categoria:"Estanteria",
      imagen:"/assets/estanteria4.png"
    },
    {
      id:17,
      precio:1000,
      nombre:"Mesa ratona Dustin",
      descripcion:"Medida (mm) 600 x 400 y 400 x 380 (circunferencia x altura)",
      categoria:"Mesa Ratona",
      imagen:"/assets/mesaratona1.jpg"
    },
    {
      id:18,
      precio:1000,
      nombre:"Mesa Ratona Harrison Paraiso",
      descripcion:"Medida (mm) 800x500x400 (Ancho x profundidad x alto )",
      categoria:"Mesa Ratona",
      imagen:"/assets/mesaratona2.png"
    },
    {
      id:19,
      precio:1000,
      nombre:"Cristalero Lincoln Cedro",
      descripcion:"Medida (mm) 800 x 1700 x 400 (ancho x alto x profundidad)",
      categoria:"Cristalero",
      imagen:"/assets/cristalero1.png"
    },
    {
      id:20,
      precio:1000,
      nombre:"Barra California Paraíso",
      descripcion:"Medida (mm) 1600x700x1000 (Ancho x profundidad x alto )",
      categoria:"Barra",
      imagen:"/assets/barra1.png"
    },
    {
      id:21,
      precio:1000,
      nombre:"Barra Italo Paraiso",
      descripcion:"Medida (mm) 1500x600x1000 (Ancho x profundidad x alto )",
      categoria:"Barra",
      imagen:"/assets/barra2.png"
    },
    {
      id:22,
      precio:1000,
      nombre:"Barra Dallas Cedro",
      descripcion:"Medida (mm) 1500x700x1000 (Ancho x profundidad x alto )",
      categoria:"Barra",
      imagen:"/assets/barra3.png"
    },
    {
      id:23,
      precio:1000,
      nombre:"Recibidor perchero KIBO",
      descripcion:"Medida (mm) 500x300x1800 (Ancho x profundidad x alto )",
      categoria:"Recibidor",
      imagen:"/assets/recibidor1.png"
    },
    {
      id:24,
      precio:1000,
      nombre:"Recibidor Caná Cedro",
      descripcion:"Medida (mm) 1000x250x1000 (Ancho x profundidad x alto )",
      categoria:"Recibidor",
      imagen:"/assets/recibidor2.png"
    },
    {
      id:25,
      precio:1000,
      nombre:"Recibidor Varena Paraiso",
      descripcion:"Medidas (mm) 1000x250x1000 (Ancho x profundidad x alto )",
      categoria:"Recibidor",
      imagen:"/assets/recibidor3.png"
    },
    {
      id:26,
      precio:1000,
      nombre:"Elevación monitor Estándar Paraíso",
      descripcion:"Medida (mm) 1600x600x750 L de 600×600 (Ancho x profundidad x alto )",
      categoria:"",
      imagen:"/assets/escritorio4.png"
    },
    {
      id:27,
      precio:1000,
      nombre:"Mesa de luz London",
      descripcion:"Medida (mm) 400x450x690 (Ancho x profundidad x alto)",
      categoria:"Mesa Ratona",
      imagen:"/assets/mesaratona3.png"
    },
    {
      id:28,
      precio:1000,
      nombre:"Vajillero Cameron Paraíso",
      descripcion:"Medida (mm) 1800x450x900 (Ancho x profundidad x alto )",
      categoria:"Vajillero",
      imagen:"/assets/vajillero1.png"
    },
    {
      id:29,
      precio:1000,
      nombre:"Escritorio Vancouver Paraíso",
      descripcion:"Medida (mm) 1000x500x750 (Ancho x profundidad x alto )",
      categoria:"Escritorio",
      imagen:"/assets/escritorio5.png"
    }
  ]

}
