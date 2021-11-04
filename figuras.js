function pCuadrado(lado){
    return lado * 4;
}
function aCuadrado(lado){
    return lado**2;
}
function pTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
}
function aTriangulo(base, altura){
    return (base*altura)/2;
}
function pCirculo(radius){
    return 2*(Math.PI)*(radius);
}
function aCirculo(){
    return (Math.PI)*(radius**2);
}

// ----- Funciones ejecutadas en el DOM ----- //

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const lado = input.value;

    const perimetro = pCuadrado(lado);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const lado = input.value;
    
    const area = aCuadrado(lado);
    alert(area);
}
