function Bkash() {
    this.makePayment = (amount) => {
        console.log(`Bkash Payment: Amount ${amount}`);
    }
}

function Nagad() {
    this.makePayment = (amount) => {
        console.log(`Nagad Payment: Amount ${amount}`);
    }
}

function Visa() {
    this.makePayment = (amount) => {
        console.log(`Visa Payment: Amount ${amount}`);
    }
}

function Ecommerce() {
    this.paymentMethod = null;
    this.setPaymentMethod = (paymentMethod) => {
        this.paymentMethod = paymentMethod;
    }
    this.buyProduct = (price, quantity) => {
        console.log(`Price: ${price} Quantity: ${quantity}`);
        this.paymentMethod.makePayment(price * quantity);
    }
}

let ecommerce = new Ecommerce();

ecommerce.setPaymentMethod(new Bkash());
ecommerce.buyProduct(10, 2);

ecommerce.setPaymentMethod(new Nagad());
ecommerce.buyProduct(15, 1);

ecommerce.setPaymentMethod(new Visa());
ecommerce.buyProduct(10.50, 7);
