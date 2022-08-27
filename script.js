
const RPI = 0.048;
const fixed = 0.03;

let annuityDue = class {
  constructor(PMT, Period, Time, Rate) {
    this.PMT = parseFloat(PMT, 10)
    this.Period = parseFloat(Period, 10)
    this.Time = parseFloat(Time, 10)
    this.Rate = parseFloat(Rate, 10)
  };
  get present () {
    return this.presentValue();
  };

  get future () {
    return this.futureValue();
  };
  
  futureValue() {
    let DFfv = -1+(1+(this.Rate/this.Period))**((this.Time*this.Period))*(1/((this.Rate)/this.Period));
    let dueFv = (1 + (this.Rate / this.Period));
    let fv = this.PMT * DFfv * dueFv;
    return Math.round(fv)
  };
  presentValue () {
    let DFpv = (1 - (1 + (this.Rate / this.Period)) ** (-this.Time * this.Period)) / (this.Rate / this.Period);
    let duePv = (1 + (this.Rate / this.Period));
    let pv = this.PMT * DFpv * duePv;
    return Math.round(pv)
  };
};

// Why did we use querySelector?
// QuerySelector is used to get our user input
// Which return a HTML object 
// We used value to get the actually values

function myFunction() {
  let pay = document.querySelector("#Payments");
let number = document.querySelector("#Period");
let time = document.querySelector("#Years");
let interest = document.querySelector("#Rate");
  
  let results = new annuityDue(pay.value, number.value, time.value, interest.value);
  let message = document.querySelector("#present");
  message.innerHTML = `The present value is: £ ${results.present}`
};


  

// const form = document.getElementById("calculator")


// form.addEventListener("submit", logValue)

