/* global afterEach, describe, it */
const should = require('should')

const Cache = require('..')

describe('Basic map-like functionality', function () {
  const cache = new Cache({})

  it('should allow existing keys to be found', function () {
    cache.set('a', 42)
    cache.has('a').should.equal(true)
    cache.set('b', undefined)
    cache.has('b').should.equal(true)
  })

  it('should not find non existent keys', function () {
    cache.has('z').should.equal(false)
  })

  it('should return this when setting values', function () {
    cache.set('c', 77).should.equal(cache)
  })

  it('should allow existing keys to be retrieved', function () {
    cache.set('a', 42)
    cache.get('a').should.equal(42)
    cache.set('b', null)
    should.equal(cache.get('b'), null)
  })

  it('should return undefined for missing keys', function () {
    should.equal(cache.get('z'), undefined)
  })

  it('should allow keys to be deleted', function () {
    cache.set('a', 23)
    cache.delete('a').should.equal(true)
    should.equal(cache.get('a'), undefined)
  })

  it('should return false when deleting non-existent keys', function () {
    cache.delete('a').should.equal(false)
  })

  it('should allow keys to be cleared', function () {
    cache.set('a', 23)
    cache.clear()
    should.equal(cache.get('a'), undefined)
  })

  it('should support key iteration', function () {
    cache.set('a', 42)
    cache.set('b', 42)
    cache.set('c', 42)
    let count = 0
    let keys = cache.keys()
    while (keys.next() && count < 10) {
      ++count
    }
    count.should.equal(3)
  })

  it('should support forEach looping', function () {
    cache.set('a', 42)
    cache.set('b', 42)
    cache.set('c', 42)
    let count = 0
    cache.forEach(() => ++count)
    count.should.equal(3)
  })

  afterEach(function () {
    cache.clear()
  })
})
