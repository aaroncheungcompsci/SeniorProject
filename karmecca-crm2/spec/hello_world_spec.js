
function getOpposite(bool){
return !bool;
}

function add(x,y){
    return x + y;
}

function minus(x,y){
    return x - y;
}

describe('Write Your Test Group Descirptions Here', () => {
    it('Write Your Test Expectation Here', () => {
        //arrange
        let bool = false;

        //act
        const result = getOpposite(bool);

        //assert
        expect(result).toBe(true);
    })
});

describe('Add Functions', () => {
    it('Gets the Sum of 2 Numbers', () => {
        //arrange
        const num1 = 2;
        const num2 = 3;

        //act
        const result = add(num1,num2);

        //assert
        expect(result).toBe(5);
    });
})

describe('Minus Functions', () => {
    it('Gets the Sum of 2 Numbers', () => {
        //arrange
        const num1 = 5;
        const num2 = 4;

        //act
        const result = minus(num1,num2);

        //assert
        expect(result).toBe(1);
    });
})

