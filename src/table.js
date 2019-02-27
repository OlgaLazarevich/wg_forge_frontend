import template from './table.template.js';



class Table {
  static draw() {
    const contentEl = document.getElementById("app");
    contentEl.insertAdjacentHTML('beforeend', template);
  }

 
}

export default Table;