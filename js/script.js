/* https://youtu.be/42TShjXR0m0 */

function insert(num) {
    document.getElementById('display').innerHTML += num;
}

function clean() {
    document.getElementById('display').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resposta = document.getElementById('display').innerHTML;
    if (resposta) {
        document.getElementById('display').innerHTML = eval(resposta);
        return
    }
}

