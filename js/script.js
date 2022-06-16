let varPrinted;

for(i=0;i<100;i++){

    if(i%3===0 && i%5===0) //verifico fin da subito se il numero è divisibile per 3 e 5
    {
        varPrinted=`FizzBuzz`;
    }
    else{                   
        if(i%5===0)         //verifico se è solo divisibile per 5
        {
            varPrinted=`Buzz`;
        }
    
        else if(i%3===0)     //verifico se è solo divisibile per 3
        {
            varPrinted=`Fizz`;
        }
    
        else{               //non è divisibile ne per 3 e ne per 5, stampo il contatore
            varPrinted=i;
        }
    }
    console.log(varPrinted);
}