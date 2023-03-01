function warnClient(transactions, noOfDays, offset) {
    const sumToOffset = transactions.slice(0,offset).reduce((a,b)=> a+b,0);
    let avg = sumToOffset/offset;
    let warnCount = 0;

    for(let i=offset; i<noOfDays; i++){
        const currentTransaction = transactions[i];
        if(currentTransaction >= (avg*2)){
            warnCount++;
        }
        avg = ((avg * i) + currentTransaction)/(i+1)
    }
    console.log(warnCount)
    return warnCount;
}

warnClient([2, 3, 4, 2, 3, 6, 8, 4, 5], 9, 5)
warnClient([1, 3, 4, 2, 3, 6, 8, 4, 5], 9, 1)

