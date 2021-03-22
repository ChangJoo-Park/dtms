import { dtms } from '../../src/index'

test('0.2s to 200 milliseconds', () => {
  expect(dtms('0.2s')).toBe(200)
})

test('2s to 2000 milliseconds', () => {
  expect(dtms('2s')).toBe(2000)
})

test('0s to 0 milliseconds', () => {
  expect(dtms('0s')).toBe(0)
})

test('100ms to 100 milliseconds', () => {
  expect(dtms('100ms')).toBe(100)
})

test('-2s to -2000milliseconds', () => {
  expect(dtms('-2s')).toBe(-2000)
})

test('-200ms to -200 milliseconds', () => {
  expect(dtms('-200ms')).toBe(-200)
})

// Failed
test('1m is invalid transition duration', () => {
  const t = () => {
    dtms('1m')
  };
  expect(t).toThrow(TypeError);
})

test('empty string is invalid', () => {
  const t = () => {
    dtms('')
  };
  expect(t).toThrow(TypeError);
})

test('string doesn\' have numberpart is invalid [s]', () => {
  const t = () => {
    dtms('s')
  };
  expect(t).toThrow(TypeError);
})

test('string doesn\' have numberpart is invalid [ms]', () => {
  const t = () => {
    dtms('ms')
  };
  expect(t).toThrow(TypeError);
})
