import * as test from 'blue-tape'
import { LocalStorage } from 'node-localstorage'

test('should implement the main interface', test => {
  let storage = new LocalStorage('./tmp')
  test.assert(storage.length === 0)
  storage.setItem('key', 'someString')
  storage.setItem('numberKey', 1)
  test.assert(storage.getItem('key') === 'someString')
  test.assert(storage.getItem('numberKey') === '1')
  test.assert(storage.length === 2)
  test.assert(storage.key(1) === 'numberKey')
  storage.clear()
  test.assert(storage.length === 0)
  test.end()
})
