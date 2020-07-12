import indicateHealth from './app';

test('индикатор healthy, если здоровье более 50', () => {
  expect(indicateHealth({ health: 90 })).toBe('healthy');
});

test('индикатор wounded, если здоровье равно 50', () => {
  expect(indicateHealth({ health: 50 })).toBe('wounded');
});

test('индикатор wounded, если здоровье от 50 и до 15', () => {
  expect(indicateHealth({ health: 25 })).toBe('wounded');
});

test('индикатор wounded, если здоровье равно 15', () => {
  expect(indicateHealth({ health: 15 })).toBe('wounded');
});

test('индикатор critical, если здоровье менее 15', () => {
  expect(indicateHealth({ health: 5 })).toBe('critical');
});
