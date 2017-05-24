# es6-lru-cache


A cache that can exhibit both least recently used (LRU) and max time to live (TTL) eviction policies.

## Usage

```
yarn add es6-lru-cache
```

Use it as a max capacity LRU cache:

```
const cache = new Cache({max: 3});
```

Or use it as a TTL cache:

```
const cache = new Cache({ttl: 1000 * 60});
```

Or do both, and initialize with existing data

```
var existing = {'a': 1, 'b': 2};
const cache = new Cache({ttl: 1000 * 60, max: 3, data: existing})
```

## Performance

The cache is backed by a `Map` as well as a custom linked-list. This makes the following performance.

| Operation | Runtime |
| --------- | ------- |
| delete(key)  | O(1)    |
| get(key)  | O(1)    |
| has(key)  | O(1)    |
| set(key, value) | O(1) |
| size()    | O(n)`*`  |

`*` size() runs an eviction pass which may evict up to all entries before returning the new size.

## Is it good?

> Yes
