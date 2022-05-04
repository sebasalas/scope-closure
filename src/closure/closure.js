

const moneyBox = (coins) => {
    var saveCoins = 0; // Reset
    saveCoins += coins;
    console.log(`moneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

const moneyBox = () => {
    debugger;
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox : $${saveCoins}`);
    }
    return countCoins;
};

let myMoneyBox = moneyBox();
debugger;

myMoneyBox(4); //4
myMoneyBox(6); //10
myMoneyBox(10); //20