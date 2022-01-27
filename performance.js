const Interval = 1000;

const begin = new Date();

let total = 0;

function guid2() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

while ((new Date()) - begin <= Interval){
    guid2();
    total++;
}

console.log(total);