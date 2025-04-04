
let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87 
};

function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}

function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
}

function fromYenToPound(yens) {
    let euros = yens / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
}

module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};
