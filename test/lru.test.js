/* global afterEach, describe, it */
const should = require('should')

const Cache = require('..')

describe('Least recently used expiration', function () {
  const cache = new Cache({max: 3})

  it('should limit the number of entries', function () {
    cache.set('a', 1)
    cache.set('b', 2)
    cache.set('c', 3)
    cache.set('d', 4)
    cache.size.should.equal(3)
  })

  it('should retain the most recent entries', function () {
    cache.set('a', 1)
    cache.set('b', 2)
    cache.set('c', 3)
    cache.set('d', 4)
    should.equal(cache.get('a'), undefined)
  })

  it('should update element status when get', function () {
    cache.set('a', 1)
    cache.set('b', 2)
    cache.set('c', 3)
    cache.get('a')
    cache.set('d', 4)
    should.notEqual(cache.get('a'), undefined)
    should.equal(cache.get('b'), undefined)
  })

  afterEach(function () {
    cache.clear()
  })
})
