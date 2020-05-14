const { Apple } = require('..');
const { toHaveAttribute, toBeInTheDocument } = require('@testing-library/jest-dom/matchers');

expect.extend({ toHaveAttribute, toBeInTheDocument });

beforeEach( () => {
});

describe('', () => {
  it('Stworzono klasę Apple', async () => {
    const antonowka = new Apple();
    expect(antonowka).toBeDefined;
  })

  it('Poprawnie ustawiono parametry Apple', async () => {
    const antonowka = new Apple('antonowka', 'red', 5);
    expect(antonowka.name).toBe('antonowka');
    expect(antonowka.color).toBe('red');
    expect(antonowka.sweetness).toBe(5);
  })
});
