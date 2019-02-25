import template from './tableTr.template.js';


import orders from '../data/orders.json';

console.log (orders[1]);


let el = orders.map(function(name) {
  return template(name.id,
      name.transaction_id, 
        name.user_id,
        name.created_at,
        name.total,
        name.card_number,
        name.card_type, 
        name.order_ip)
});






class TableTr {
  static draw() {

console.log(document.getElementById("tbody"));

    const contentEl = document.getElementById("tbody");
    contentEl.insertAdjacentHTML('beforeend', el);
  }
}

export default TableTr;