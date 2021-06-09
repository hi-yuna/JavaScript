const dog = {
    _name : '멍멍이',
    set name(value) {
        console.log('이름이 바뀝니다..' + value);
        this._name = value;
    },
    get name() {
        console.log('_name을 조회합니다..');
        return this._name;
    }
};

console.log(dog._name);
dog.name = '뭉뭉이';
console.log(dog.name);