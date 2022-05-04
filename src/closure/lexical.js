const billCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++)
    };
    return displayCount;
};

const myDisplayCount = billCount(1);
myDisplayCount();
myDisplayCount();
myDisplayCount();

const myOtherDisplayCount = billCount(10);
myOtherDisplayCount();
myOtherDisplayCount();