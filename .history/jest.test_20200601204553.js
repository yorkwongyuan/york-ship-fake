test('test common', () => {
  expect(2 + 2).toBe(4)
  expect(2 + 2).not.toBe(1)
})
test('true or false', () => {
  expect(1).toBeTruthy()
  expect(1).toBeFalsy()
})