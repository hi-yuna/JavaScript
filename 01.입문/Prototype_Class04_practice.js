class Food {
    constructor(name) {
        this.name = name;
        this.brands = [];
    }
    addBrand(brand) {
        this.brands.push(brand);
    }
    print() {
        console.log(`${this.name}을/를 파는 음식점들:`);
        console.log(this.brands.join(', '));
    }
}

const Pizza = new Food('피자');
Pizza.addBrand('피자헛');
Pizza.addBrand('도미노피자');

const Chicken = new Food('치킨');
Chicken.addBrand('굽네치킨');
Chicken.addBrand('BBQ');

Pizza.print();
Chicken.print();