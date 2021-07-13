import * as calc from './calc';

describe('Calc', () => {
  test('1: should return all clients id', () => {
    const res = calc.listClientsIds();
    expect(res.length).toBe(calc.clients.length);
  });

  test('2: should return all clients id order by tax number', () => {
    const res = calc.listClientsIdsSortByTaxNumber();
    expect(res.length).toBe(calc.clients.length);
    expect(res).toEqual([2, 3, 1, 4, 5, 6]);
  });

  test('3: should return all clients id order by total money in their banks', () => {
    const res = calc.sortClientsTotalBalances();
    expect(res.length).toBe(calc.clients.length);
    expect(res).toEqual([
      'VICTOR MANUEL ROJAS LUCAS',
      'ANDRES NADAL MOLINA',
      'JESUS RODRIGUEZ ALVAREZ',
      'SALVADOR ARNEDO MANRIQUEZ',
      'MOHAMED FERRE SAMPER',
      'HECTOR ACUÑA BOLAÑOS',
    ]);
  });

  /* test('should return 10 for add(6, 4)', () => {
    expect(calc.add(6, 4)).toBe(10);
  });

  test('should return 9 for add(10, -1)', () => {
    expect(calc.add(10, -1)).toBe(9);
  }); */
});
