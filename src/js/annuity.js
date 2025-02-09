// JavaScript source code
export class AnnuityDue {
    constructor(PMT, Period, Time, Rate) {
        this.PMT = parseFloat(PMT);
        this.Period = parseFloat(Period);
        this.Time = parseFloat(Time);
        this.Rate = parseFloat(Rate);
    }

    get present() {
        return this.calculatePresentValue();
    }

    get future() {
        return this.calculateFutureValue();
    }

    calculateFutureValue() {
        const ratePerPeriod = this.Rate / this.Period;
        const compoundFactor = (1 + ratePerPeriod) ** (this.Time * this.Period);
        const discountFactor = (compoundFactor - 1) / ratePerPeriod;
        return Math.round(this.PMT * discountFactor * (1 + ratePerPeriod));
    }

    calculatePresentValue() {
        const ratePerPeriod = this.Rate / this.Period;
        const discountFactor = (1 - (1 + ratePerPeriod) ** (-this.Time * this.Period)) / ratePerPeriod;
        return Math.round(this.PMT * discountFactor * (1 + ratePerPeriod));
    }
}
