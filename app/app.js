
//Juana
let sellerJuana = document.getElementById("Juana");
let totalVentasJuana = 0;



sellerJuana.addEventListener("click", function () {
   let venta = prompt('Que producto vendio Juana?  Ingresa el costo del perfume: \n Aqua: 250,  Emocion: 180,  Alegria: 160, Frescura: 150');

   if (venta === "250" || venta === "180" || venta === "160" || venta === "150") {
      alert("Producto Ingresado");
      let ventaNumero = parseFloat(venta)
      totalVentasJuana += ventaNumero;
      alert(`Juana lleva ${totalVentasJuana} vendido`);

   } else {
      alert("No es un perfume o  no es el costo del perfume")
   }

   console.log(`Juana lleva vendido ${totalVentasJuana}`);

});

//Pedro
let sellerPedro = document.getElementById("Pedro");
let totalVentasPedro = 0;



sellerPedro.addEventListener("click", function () {
   let venta1 = prompt("Que producto vendio Pedro? Ingresa el costo del perfume: \n Aqua: 250,  Emocion: 180,  Alegria: 160,  Frescura: 150");

   if (venta1 === "250" || venta1 === "180" || venta1 === "160" || venta1 === "150") {
      alert("Producto Ingresado");
      let ventaNumero1 = parseFloat(venta1)
      totalVentasPedro += ventaNumero1;
      alert(`Pedro lleva ${totalVentasPedro} vendido`);

   } else {
      alert("No es un perfume o  no es el costo del perfume")
   }
   console.log(`Pedro lleva vendido ${totalVentasPedro}`);
});

let sellerJuana1 = "Juana"
let sellerPedro1 = "Pedro"
let theBestSeller = document.getElementById("employeeOfTheMonth");
theBestSeller.addEventListener("click", function () {
   let winner ="";


   if (totalVentasJuana > totalVentasPedro) {

      alert(` FELICIDADES! el vendedor del mes es ${sellerJuana1}`);
      console.log(`FELICIDADES! el vendedor del mes es ${sellerJuana1}`);
      winner = sellerJuana1;

   } else if (totalVentasJuana < totalVentasPedro) {
      alert(` FELICIDADES! el vendedor del mes es ${sellerPedro1}`);
      console.log(`FELICIDADES! el vendedor del mes es ${sellerPedro1}`);
      winner=sellerPedro1;

   }else{
      alert(`No se ha registrado ninguna venta`);
      console.log(`No se ha registrado ninguna venta`);
   }

   let employeeWinner = ` Total de Ventas de Juana:${totalVentasJuana}  \n\n Total de Ventas de Pedro:${totalVentasPedro}\n  FELICIDADES! el Empleado del Mes es ${winner}`
   document.getElementById("result").innerHTML = employeeWinner;
   console.log(`Total de Ventas de Juana:${totalVentasJuana}  \n\n Total de Ventas de Pedro:${totalVentasPedro}\n   FELICIDADES! el Empleado del Mes es ${winner} `)
})




