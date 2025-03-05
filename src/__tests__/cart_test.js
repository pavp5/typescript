import Cart from '../cart';
import Movie from '../movie';

test('testing class Cart method add', () => {
    const cart = new Cart();
    cart.add(new Movie(1, 'Мстители', 50, 2012, 'США', 'slogan', 'fantasy', '137 мин'));
    cart.add(new Movie(2, 'Неуловимые мстители', 40, 1967, 'CCCP', 'slogan', 'fantasy', '143 мин'));
    expect(cart.items.length).toEqual(2);
});

test('testing class Cart method del', () => {
    const cart = new Cart();
    cart.add(new Movie(1, 'Мстители', 50, 2012, 'США', 'slogan', 'fantasy', '137 мин'));
    cart.add(new Movie(2, 'Неуловимые мстители', 40, 1967, 'CCCP', 'slogan', 'fantasy', '143 мин'));
    cart.del(2)
    expect(cart.items.length).toEqual(1);
});

test('testing class Cart method sumPrice without discount', () => {
    const cart = new Cart();
    cart.add(new Movie(1, 'Мстители', 50, 2012, 'США', 'slogan', 'fantasy', '137 мин'));
    cart.add(new Movie(2, 'Неуловимые мстители', 40, 1967, 'CCCP', 'slogan', 'fantasy', '143 мин'));
    expect(cart.sumPrice()).toEqual(90);
});

test('testing class Cart method sumPrice with discount', () => {
    const cart = new Cart();
    cart.add(new Movie(1, 'Мстители', 50, 2012, 'США', 'slogan', 'fantasy', '137 мин'));
    cart.add(new Movie(2, 'Неуловимые мстители', 40, 1967, 'CCCP', 'slogan', 'fantasy', '143 мин'));
    expect(cart.sumPrice(25)).toBeCloseTo(67.5);
});