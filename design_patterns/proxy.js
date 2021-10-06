// External API service
class CryptoCurrency {
    constructor() {
    }

    static getValue(coin) {
        console.log(`Calling External API... for ${coin}`);
        switch (coin) {
            case 'Bitcoin':
                return 100;
            case 'Etherium':
                return 80;
            case 'Taka':
                return 10;
            case 'Gold':
                return 90;
        }
    }
}

class CryptoCurrencyProxy {
    cache = {};

    getValue(coin) {
        if (this.cache[coin] === undefined) {
            this.cache[coin] = CryptoCurrency.getValue(coin);
        }
        return this.cache[coin];
    }
}

const proxy = new CryptoCurrencyProxy();
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Etherium"));
console.log(proxy.getValue("Etherium"));
console.log(proxy.getValue("Etherium"));
console.log(proxy.getValue("Taka"));
console.log(proxy.getValue("Taka"));