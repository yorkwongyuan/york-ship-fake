test('test common', () => {
  expect(2 + 2).toBe(4)
  expect(2 + 2).not.toBe(1)
})
test('true or false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('test number', () => {
  expect(4).toBeGreaterThan(3)
  expect(3).toBeLessThan(5)
})

// toEqual专门用来计算对象的值是否相同
test('test object', () => {
  expect({ name: 'york' }).toEqual({ name: 'york' })
})