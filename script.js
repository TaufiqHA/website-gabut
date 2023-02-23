const batu = document.getElementById('batu');
const kertas = document.getElementById('kertas');
const gunting = document.getElementById( 'gunting');
const human = document.querySelector('#human');
const button = document.getElementById('button');
const com = document.getElementById('com');

let resultHuman;

function result(value)
{
    let suitValue = 0;

    switch (value.id)
    {
    case 'batu':
        suitValue = "img/batu.png";
        break;
    case 'gunting':
        suitValue = "img/gunting.png";
        break;
    case 'kertas':
        suitValue = "img/kertas.png";
        break;
    default:
        suitValue = 0;
    }

    human.src = suitValue;
    return value.id;
}

batu.addEventListener('click', () => {
    resultHuman = result(batu);
});

gunting.addEventListener('click', () => {
    resultHuman = result(gunting);
});

kertas.addEventListener('click', () => {
    resultHuman = result(kertas);
});

function win()
{
    const resultCom = Math.floor(Math.random() * 3);
    let comResult;

    switch(resultCom){
    case 0:
        comResult = "https://taufiqha.github.io/website-gabut/img/batu.png";
        break;
    case 1:
        comResult = "https://taufiqha.github.io/website-gabut/img/gunting.png";
        break;
    case 2:
        comResult = "https://taufiqha.github.io/website-gabut/img/kertas.png";
        break;
    default:
        comResult = "";
    }

    com.src = comResult;

    if (resultHuman === 'batu' && resultCom === 0)
    {
        alert('Seri! Play again');
    } else if (resultHuman === 'batu' && resultCom === 1){
        alert('Human Win!!!!');
    } else if (resultHuman === 'batu' && resultCom === 2){
        alert('Com Win!!!');
    } else if (resultHuman === 'gunting' && resultCom === 0){
        alert('Com Win!!!!');
    } else if (resultHuman === 'gunting' && resultCom === 1){
        alert('Seri! Play again');
    } else if (resultHuman === 'gunting' && resultCom === 2){
        alert('Human Win!!!');
    } else if (resultHuman === 'kertas' && resultCom === 0){
        alert('Human Win!!!!');
    } else if (resultHuman === 'kertas' && resultCom === 1){
        alert('Com Win!!!');
    } else if (resultHuman === 'kertas' && resultCom === 2){
        alert('Seri! Play again');
    } else {
       alert('Error');
    }
}

button.addEventListener('click', () => {win()});
