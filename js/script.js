let varPrinted;
const wrapperRow = document.getElementById(`wrapper-row`)

for (i = 1; i <= 100; i++) {
    let newBox = document.createElement('div');
    if (i % 3 === 0 && i % 5 === 0) //verifico fin da subito se il numero è divisibile per 3 e 5
    {
        varPrinted = `FizzBuzz`;          //inserisco la parola FizzBuzz nel box
        newBox.classList.add('red');    //inserisco classe a sfondo rosso
    }
    else if (i % 5 === 0)         //verifico se è solo divisibile solo per 5
    {
        varPrinted = `Buzz`;              //inserisco la parola Buzz nel box
        newBox.classList.add('yellow'); //inserisco classe a sfondo giallo
    }

    else if (i % 3 === 0)     //verifico se è solo divisibile solo per 3 
    {
        varPrinted = `Fizz`;              //inserisco la parola Fizz nel box
        newBox.classList.add('blue');   //inserisco classe a sfondo blu
    }

    else {               //non è divisibile ne per 3 e ne per 5, stampo il contatore
        varPrinted = i;
    }

//console.log(varPrinted);

//ogni box sarà 2/12 largo rispetto al container
newBox.classList.add('col-2');

//inserisco il valore all'interno del box
newBox.innerHTML = varPrinted;

//introduco nella row una nuova col-2
wrapperRow.append(newBox);
}