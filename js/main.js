let calculateMonthlyPayment = (principal, years, rate)=>{
    if (rate) {
        var monthlyRate = rate / 100 / 12;
    }

    // var to let 
    let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));
    return {monthlyRate, monthlyPayment};
};

let calculateTotalPayment= (monthlyPayment, years) =>  {
    return years *12 * monthlyPayment;
}

let calculateAmortization = (principal, years, rate) => {
    let {monthlyRate, monthlyPayment} = calculateMonthlyPayment(principal, years, rate);
    let balance = principal;
    let amortization = [];
    for (let y=0; y<years; y++) {
        let interestY = 0;  //Interest payment for year y
        let principalY = 0; //Principal payment for year y
        for (let m=0; m<12; m++) {
            let interestM = balance * monthlyRate;       //Interest payment for month m
            let principalM = monthlyPayment - interestM; //Principal payment for month m
            interestY = interestY + interestM;
            principalY = principalY + principalM;
            balance = balance - principalM;
        }
        amortization.push({principalY, interestY, balance});
    }
    return {monthlyPayment, monthlyRate, amortization};
};


document.getElementById('calcBtn').addEventListener('click', () => {
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;
    let {monthlyPayment, monthlyRate, amortization} = calculateAmortization(principal, years, rate);
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
    amortization.forEach(month => console.log(month));
    let totalPayment = calculateTotalPayment(monthlyPayment, years);
    document.getElementById("totalPayment").innerHTML = totalPayment;

});
