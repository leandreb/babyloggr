
export default class ExpressionModel {
  constructor(quantity = 0) {
    this.id = new Date().toUTCString();
    this.timestamp = new Date().toUTCString();
    this.quantity = Number(quantity);
  }
}
