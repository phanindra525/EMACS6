class Mortgage {
    

    constructor(principal, years, rate) {
        this.principal = principal;
        this.years = years;
        this.rate = rate;
        
    }


    calculateMonthlyPayment(){
            var monthlyRate = this.rate / 100 / 12;

        // var to let 
        let monthlyPayment = this.principal *monthlyRate / (1 - (Math.pow(1 / (1 +monthlyRate),  this.years * 12)));
        return {monthlyRate, monthlyPayment};
    };

    calculateTotalPayment(monthlyPayment)  {
        return this.years *12 * monthlyPayment;
    }

    // calculateAmortization () {
    //     let {monthlyRate, monthlyPayment} = this.calculateMonthlyPayment();
    //     let balance = principal;
    //     let amortization = [];
    //     for (let y=0; y<years; y++) {
    //         let interestY = 0;  //Interest payment for year y
    //         let principalY = 0; //Principal payment for year y
    //         for (let m=0; m<12; m++) {
    //             let interestM = balance * monthlyRate;       //Interest payment for month m
    //             let principalM = monthlyPayment - interestM; //Principal payment for month m
    //             interestY = interestY + interestM;
    //             principalY = principalY + principalM;
    //             balance = balance - principalM;
    //         }
    //         amortization.push({principalY, interestY, balance});
    //     }
    //     return {monthlyPayment, monthlyRate, amortization};
    // }

}





document.getElementById('calcBtn').addEventListener('click', () => {
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;

    let mortgage = new Mortgage(principal, years, rate);
    let {monthlyRate, monthlyPayment} = mortgage.calculateMonthlyPayment();
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
    //amortization.forEach(month => console.log(month));
    let totalPayment = mortgage.calculateTotalPayment(monthlyPayment);
    document.getElementById("totalPayment").innerHTML = `this is my total payment :(
        cx dsf
         ${totalPayment} `;

    generateRandomNumber().then((result) => {
        console.log("success : "+result);
    }).catch ((error)=> {
        console.log("error: "+ error);
    })

});


function generateRandomNumber() {
    return new Promise((resolve, reject) => {
        var randomNumber = Math.floor((Math.random() * 10) + 1)
        if(randomNumber > 5) {
            resolve(randomNumber);

        } else {
            reject (randomNumber);
        }
    })
}



