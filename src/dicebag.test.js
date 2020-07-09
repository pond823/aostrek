const dicebag = require(`./dicebag`)


test('dicebag generates 10 numbers', () => {

    results = dicebag(10)

    expect(results.length).toBe(10); 
});

test('dicebag generates 100 numbers between 1 and 6', () => {

    results = dicebag(100)

    expect(results.length).toBe(100); 

    results.forEach(element => {
        expect(element).toBeGreaterThan(0)
        expect(element).toBeLessThan(7)
    });
});

