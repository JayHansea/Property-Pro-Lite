/* eslint-disable no-underscore-dangle */
class Model {
  static get table() {
    return '';
  }

  static get schema() {
    return {
      id: Number,
    };
  }

  static get rules() {
    return {
      id: 'required',
    };
  }


  set attributes(attributes) {
    for (const attributeName in attributes) {
      const attribute = attributes[attributeName];
      if (attributes.hasOwnProperty(attributeName)) {
        if (!strictTypeOf(attribute, this.constructor.schema[attributeName])) {
          throw new Error(`Schema not followed: attribute type of attribute "${attributeName}" not same as schema type (${this.constructor.schema[attributeName]})`);
        }
        attributes[attributeName] = (strictTypeOf(attribute, 'string')) ? attribute.trim() : attribute;
      }
    }

    this._attributes = attributes;
  }

  get attributes() {
    return this._attributes;
  }

  constructor(attributes = {}) {
    this._attributes = {};
    this.attributes = attributes;
  }

  static relatesTo(modelClass, key) {
    this.relationships[modelClass.name] = { type: 'one', link: key };
    modelClass.relationships[this.name] = { type: 'many', link: key };
  }

  static get primaryKey() {
    return 'id';
  }

  merge(extraAttributes = {}) {
    this.attributes = Object.assign({}, this.attributes, extraAttributes);

    return this;
  }
}

Model.relationships = {};

export default Model;
