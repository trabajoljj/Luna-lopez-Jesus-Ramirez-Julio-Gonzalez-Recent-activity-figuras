function suma(){;
    var a=0; 
    var b=0;
    var suma=0;
a=parseInt(prompt("Por favor ingrese el primer valor"));
b=parseInt(prompt("Por favor ingrese el segundo valor"));
suma= a+b;
alert("el resultado de la suma es "+suma);
}
function operacionesBasicas(){
    var r=0;
    var m=0;
    var s=0;
    var d=0;
    var a=0;
    var b=0;
    a=parseInt(prompt("por favor ingresar el primer valor"));
    b=parseInt(prompt("por favor ingrese el segundo valor"));
    r= a-b;
    m= a*b;
    s= a+b;
    d= a/b;
    alert("El resultado de la resta es: "+r+"\n"+"El resultado de la multiplicacion es: "+m+"\n"+
    "El resultado de la suma es: "+s+"\n"+"El resultado de la division es: "+d);
    
}
function PromedioDeNotas(){
    var a=0;
    var b=0;
    var c=0;
    var d=0;
    var e=0;
    var f=0;
    var g=0;
    var h=0;
    a=parseFloat(prompt("por favor ingresar la primera nota"));
    b=parseFloat(prompt("por favor ingresar la segunda nota"));
    c=parseFloat(prompt("por favor ingresar la tercera nota"));
    d=parseFloat(prompt("por favor ingresar la cuarta nota"));
    e=parseFloat(prompt("por favor ingresar la quinta nota"));
    f=parseFloat(prompt("Por favor ingresar la sexta nota"));
    g=parseFloat(prompt("Por favor ingresar la septima nota"));
    h=(a+b+c+d+e+f+g)/7;
    alert("la nota promedio es: " +h);
    if (h>=6.1) {
        alert("Se aprobo la materia");
        
    }else{
        alert("No aprobo la materia");

    }
}
function inversionDeCapital (){
    var DineroI=0;
    var axosIn=0;
    var tasain=1.7;
    var mesesIn=0;
    var ganancia=0;
    var DineroR=0;
    DineroI=parseInt(prompt("Ingrese el Dinero a invertir"));
    axosIn=parseInt(prompt("Ingrese la cantidad de años"))
    mesesIn= (axosIn*12);
    DineroR= DineroI*(tasain*mesesIn);
    ganancia=(DineroR-DineroI);
    alert("El dinero recibido fue de: " +DineroR)
    alert("La ganancia recibida es de: " +ganancia)
    
}
function Mayor_de_dos_numeros(){
    var n1=0;
    var n2=0;
    n1=parseInt(prompt("Ingrese el primer numero"));
    n2=parseInt(prompt("Ingrese el segundo numero"));
    if (n1==n2){
        alert("Los numeros son iguales, por favor ingrese nuevos numeros")
    }
    if (n1<n2) { alert(n2+ " Es el numero mayor")}
    else {
        alert(n1+ " Es el numero mayor")
    }
}

  
function Menor_De_tres_numeros(){

    var n1=0;
    var n2=0;
    var n3=0;
    n1=parseInt(prompt("Ingrese el primer numero"));
    n2=parseInt(prompt("Ingrese el segundo numero"));
    n3=parseInt(prompt("Ingrese el tercer numero"));
    if (n1<n2&&n1<n3) {
        alert(n1+" Es el numero menor")
    } else {
        if(n3<n2&& n3<n1){
            alert(n3+" Es el numero menor")
        }
        else{
            alert(n2+" Es el numero menor ")
        }
    }
}
function Area_de_un_triangulo(){
    var a=0;
    var b=0;
    var ar=0;
    b=parseFloat(prompt("Ingrese el valor de la Base"));
    a=parseFloat(prompt("Ingrese el valor de la Altura"));
    ar=(b*a)/2
    alert("El Area del triangulo es: "+ar);

}
function AoDeNacimiento(){
    var an=0;
    var a=0;
    var e=0;
    a=parseInt(prompt("Ingrese año actual"));
    e=parseInt(prompt("Ingrese edad por favor"));
    an=a-e
    alert("Su año de nacimiento es: "+an);
}
function Circulo(){
var figura= document.getElementById("figura");
figura.classList.toggle("Circulo");
}
function Rectangulo(){
var figura= document.getElementById("figura");
figura.classList.toggle("Rectangulo");
}

function Gif(){
var figura= document.getElementById("figura");
figura.classList.toggle("Gif");
}
function Izquierda(){
var figura= document.getElementById("figura");
figura.classList.toggle("Izquierda");
}
function Derecha(){
var figura= document.getElementById("figura");
figura.classList.toggle("Derecha");
}
function Arriba(){
var figura= document.getElementById("figura");
figura.classList.toggle("Arriba");
}
function Abajo(){
var figura= document.getElementById("figura");
figura.classList.toggle("Abajo");
}
function Diagonal(){
var figura= document.getElementById("figura");
figura.classList.toggle("Diagonal");
}
function Rombo(){
var figura= document.getElementById("figura");
figura.classList.toggle("Rombo");
    }
     