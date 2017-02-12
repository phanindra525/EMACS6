'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mortgage = function () {
    function Mortgage(principal, years, rate) {
        _classCallCheck(this, Mortgage);

        this.principal = principal;
        this.years = years;
        this.rate = rate;
    }

    _createClass(Mortgage, [{
        key: 'calculateMonthlyPayment',
        value: function calculateMonthlyPayment() {
            var monthlyRate = this.rate / 100 / 12;

            // var to let 
            var monthlyPayment = this.principal * monthlyRate / (1 - Math.pow(1 / (1 + monthlyRate), this.years * 12));
            return { monthlyRate: monthlyRate, monthlyPayment: monthlyPayment };
        }
    }, {
        key: 'calculateTotalPayment',
        value: function calculateTotalPayment(monthlyPayment) {
            return this.years * 12 * monthlyPayment;
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

    }]);

    return Mortgage;
}();

document.getElementById('calcBtn').addEventListener('click', function () {
    var principal = document.getElementById("principal").value;
    var years = document.getElementById("years").value;
    var rate = document.getElementById("rate").value;

    var mortgage = new Mortgage(principal, years, rate);

    var _mortgage$calculateMo = mortgage.calculateMonthlyPayment(),
        monthlyRate = _mortgage$calculateMo.monthlyRate,
        monthlyPayment = _mortgage$calculateMo.monthlyPayment;

    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
    //amortization.forEach(month => console.log(month));
    var totalPayment = mortgage.calculateTotalPayment(monthlyPayment);
    document.getElementById("totalPayment").innerHTML = 'this is my total payment :(\n        cx dsf\n         ' + totalPayment + ' ';

    generateRandomNumber().then(function (result) {
        console.log("success : " + result);
    }).catch(function (error) {
        console.log("error: " + error);
    });
});

function generateRandomNumber() {
    return new Promise(function (resolve, reject) {
        var randomNumber = Math.floor(Math.random() * 10 + 1);
        if (randomNumber > 5) {
            resolve(randomNumber);
        } else {
            reject(randomNumber);
        }
    });
}
