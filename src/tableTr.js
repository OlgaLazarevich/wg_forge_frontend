import template from './tableTr.template.js';


import orders from '../data/orders.json';

console.log (orders[1]);


function cardNumberFormat(str){
  return `${str.slice(0,3)}********${str.slice(10,14)}`
}

function dateFormat(str){
  return `${new Date(str*1000).toLocaleDateString("en-US")} ${new Date(1513808027*1000).toLocaleTimeString("en-US")}`
}


let el = orders.reduce(function(sum, current) {
  return sum + template(current.id,
      current.transaction_id, 
        current.user_id,
        dateFormat(current.created_at),
        current.total,
        cardNumberFormat(current.card_number),
        current.card_type,
        current.order_country, 
        current.order_ip)
}, '');






class TableTr {
  static draw() {

console.log(document.getElementById("tbody"));

    const contentEl = document.getElementById("tbody");
    contentEl.insertAdjacentHTML('beforeend', el);
  }
}

export default TableTr;