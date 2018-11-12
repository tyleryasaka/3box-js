const KeyValueStore = require('./keyValueStore')

class ProfileStore extends KeyValueStore {
  constructor (orbitdb, name) {
    super(orbitdb, name)
  }

  async set (key, value) {
    return super.set(key, value)
  }

  async all () {
    super._requireLoad()
    const entries = await this._db.all()
    let allSimple = {}
    Object.keys(entries).map(key => { allSimple[key] = entries[key].value })
    return allSimple
  }
}

module.exports = ProfileStore
