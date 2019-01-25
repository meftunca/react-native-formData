export default class Formdata {
  constructor() {
    this.form = {};
    this.FormData = new FormData();
  }

  set(key, value) {
    this.form[key] = value;
  }
  get(key) {
    return this.form[key];
  }
  getAll() {
    return this.form;
  }
  clear() {
    this.form = {};
  }
  delete(key) {
    delete this.form[key];
  }
  serialize() {
    const str = [];
    for (let p in this.form)
      if (this.form.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(this.form[p]));
      }
    return str.join("&");
  }
  create() {
    for (let [key, value] of Object.entries(this.form)) {
      this.FormData.append(key, value);
    }
    return this.FormData;
  }
}
