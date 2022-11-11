// The main goal is to write an algorithm to calculate "TAEG" of a loan based on different parameters.

function calculateTaeg(loan, duration, nominalRate, warrantyFees, applicationFees, insuranceRate) {
    // Conversion of the nominal rate in pourcentage
    let nominalRateConversion = nominalRate / 100;

    let monthlyPayment = loan * (nominalRateConversion*(1-(Math.pow((1+nominalRateConversion),(-duration/12)))));    
    let insuranceCost = ((insuranceRate / 100) * loan * duration/12);    
    let interestsCost = monthlyPayment * (duration)- loan ;
    let totalCost = (insuranceCost + interestsCost) + warrantyFees + applicationFees;

    // Final calculation of the TAEG
    return ((((totalCost + loan) - loan) / loan) * monthlyPayment / 100).toFixed(2);
}

export default calculateTaeg;