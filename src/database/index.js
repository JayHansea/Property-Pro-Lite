/* eslint-disable new-cap */
/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable no-multi-assign */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable guard-for-in */
/* eslint-disable no-cond-assign */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-bitwise */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
global.isLiteralFalsey = variable => (variable === '' || variable === false || variable === 0);

global.checkTypeName = (target, type) => {
  let typeName = '';
  if (isLiteralFalsey(target)) {
    typeName = (typeof target);
  } else {
    typeName = String(target && target.constructor.name);
  }
  return Boolean(typeName.toLowerCase().indexOf(type) + 1);
};

global.strictTypeOf = (value, type) => {
  let result = false;

  type = type || [];

  if (typeof type === 'object') {
    if (typeof type.length !== 'number') {
      return result;
    }

    let bitPiece = 0;
    type = [].slice.call(type);

    type.forEach((_type) => {
      if (typeof _type === 'function') {
        _type = (_type.name || _type.displayName).toLowerCase();
      }
      bitPiece |= Number(checkTypeName(value, _type));
    });

    result = Boolean(bitPiece);
  } else {
    if (typeof type === 'function') {
      type = (type.name || type.displayName).toLowerCase();
    }

    result = checkTypeName(value, type);
  }

  return result;
};

global.database = {
  _store: {},
  _model: null,
  _bindings: {},
  listInline() {
    return JSON.stringify(
      this.list(),
      null,
      '\t',
    );
  },
  list() {
    return this._store;
  },
  connectAndLoad(fs){
      if (fs.existsSync('./db.json')) {
        return false;
      }
      this._store = JSON.parse(fs.readFileSync('./db.json', 'utf8'));
  },
  offloadAndDisconnect(fs){
      if (fs.existsSync('./db.json')) {
        return false;
      }
      
      return strictTypeOf(fs.writeFileSync('./db.json', this.listInline(), 'utf8'), 'undefined');
  },
  _isEmpty(obj) {
    for (const okey in obj) {
      if (obj.hasOwnProperty(okey)) { return false; }
    }
    return true;
  },
  using(model) {
    this._model = model;
    return this;
  },
  delete(modelClass, conditions = {}) {
    if (!strictTypeOf(modelClass, 'function')) {
      return -1;
    }

    this._bindings[modelClass.name] = conditions;

    if (!strictTypeOf(this._store[modelClass.table], 'array')) {
      return null;
    }

    let hasCond = true;

    if ((hasCond = this._isEmpty(conditions))) {
      modelClass.last_insert_id = 0;
      return (this._store[modelClass.table].length = 0);
    }

    const _copy = this._store[this._model.constructor.table].slice(0);
    this._store[modelClass.table] = _copy.map((row) => {
      let groupOn = hasCond ? 0 : 1;

      for (const field in conditions) {
        const val = condition[field];
        if (conditions.hasOwnProperty(field)) {
          if (row[field]) {
            groupOn &= Number(row[field] === val);
          }
        }
      }

      return (groupOn) ? null : row;
    }).filter(row => strictTypeOf(row, 'null'));

    return this._store[modelClass.table].length;
  },
  read(modelClass, conditions = {}) {
    if (!strictTypeOf(modelClass, 'function')) {
      return null;
    }

    this._bindings[modelClass.name] = conditions;

    if (!strictTypeOf(this._store[modelClass.table], 'array')) {
      return null;
    }

    return {
      _rows: (this._store[modelClass.table].filter((row) => {
        let groupOn = 1;
        // conditions = this._bindings[modelClass.name]

        for (const field in conditions) {
          const val = conditions[field];
          if (conditions.hasOwnProperty(field)) {
            if (row[field]) {
              groupOn &= Number(row[field] === val);
            }
          }
        }

        return Boolean(groupOn);
      }).map(row => new modelClass(row))
      ),
      first() {
        return this._rows[0];
      },
      last() {
        return this._rows[this.rows.length - 1];
      },
    };
  },
  write(mode = 'insert', conditions = {}) {
    if (strictTypeOf(this._model, ['null', 'undefined', 'array', 'object', 'boolean', 'date'])) {
      return -1;
    }

    this._bindings[this._model.constructor.name] = conditions;

    if (!strictTypeOf(this._store[this._model.constructor.table], 'array')) {
      this._store[this._model.constructor.table] = [];
    }

    if (mode == 'insert') {
      this._model.attributes.id = this._model.constructor.last_insert_id = this._store[this._model.constructor.table].length + 1;
      return this._store[this._model.constructor.table].push(this._model.attributes);
    }

    if (mode == 'update') {
      const _copy = this._store[this._model.constructor.table].slice(0);
      this._store[this._model.constructor.table] = _copy.map((row) => {
        let groupOn = this._isEmpty(conditions) ? 0 : 1;
        // conditions = this._bindings[this._model.constructor.name]

        for (const field in conditions) {
          const val = conditions[field];
          if (conditions.hasOwnProperty(field)) {
            if (row[field]) {
              groupOn &= Number(row[field] === val);
            }
          }
        }

        return (groupOn) ? Object.assign({}, row, this._model.attributes) : row;
      });

      return this._store[this._model.constructor.table].length;
    }
  },
};

const stub = {db_version:'0.0.1'}

export default stub;
