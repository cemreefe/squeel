class Squeel {
  constructor() {
    this.nodeType = ''
    this.class = ''
    this.id = ''
    this.attributes = []
  }

  select(nodeType='') {
    this.nodeType = nodeType;
    return this;
  }

  where(attr, op, value) {
    if (op === '=' && attr === 'class') {
      this.class = value;
    }
    else if (op === '=' && attr === 'id') {
      this.id = value;
    }
    else {
      this.attributes[attr] = (op, value)
    }
    return this;
  }

  run() {
    return document.querySelectorAll(this.compileQuery());
  }

  compileQuery() {
    var query = this.nodeType;

    if (this.class.length !== 0) {
      query += `.${this.class}`
    }
    if (this.id.length !== 0) {
      query += `#${this.id}`
    }
    for (const attr in this.attributes) {
      var positiveQuery = ''

      if (this.attributes[attr][1] === null) {
        positiveQuery = `[${attr}]`
      }
      else if (attr === 'class') {
        positiveQuery = `.${this.attributes[attr][1]}`
      }
      else if (attr === 'id') {
        positiveQuery = `#${this.attributes[attr][1]}`
      }
      else {
        positiveQuery = `[${attr}=${this.attributes[attr][1]}]`
      }

      if (this.attributes[attr][0] === '=') {
        query += positiveQuery;
      }
      else if (this.attributes[attr][0] === '!=') {
        query += `:not(${positiveQuery})`
      }
    }
    return query;
  }
}
