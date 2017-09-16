/* global afterEach, describe, it */
const should = require('should')

const Cache = require('..')

describe('Time to live expiration', function () {
  const cache = new Cache({ttl: 10})

  it('should expire keys', function (done) {
    cache.set('a', 23)
    cache.get('a').should.equal(23)
    setTimeout(() => {
      should.equal(cache.get('a'), undefined)
      done()
    }, 20)
  })

  it('should return valid size on expired keys', function (done) {
    cache.set('a', 23)
    setTimeout(() => {
      cache.size.should.equal(0)
      done()
    }, 20)
  })

  afterEach(function () {
    cache.clear()
  })
})
