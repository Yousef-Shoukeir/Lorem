function convert() {
    let input1 = document.getElementById('floatingInput').value;
    let result = document.getElementById('result');

    let multiply = input1 / 2.5;
    console.log(multiply);

    result.innerHTML = input1 + 'cm equals ' + multiply + ' inches';
}