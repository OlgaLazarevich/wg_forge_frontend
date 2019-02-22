import template from './tableTr.template.js';

class TableTr {
  static draw() {

console.log(document.getElementById("tbody"));

    const contentEl = document.getElementById("tbody");
    contentEl.insertAdjacentHTML('beforeend', template("transaction_id"));
  }
}

export default TableTr;