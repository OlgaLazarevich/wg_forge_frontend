import trTemplate from './tableTr.template.js';


import userDetailTemplate from './userDetails.template.js';



import orders from '../data/orders.json';

import users from '../data/users.json';

import companies from '../data/companies.json';




function cardNumberFormat(str){
  return `${str.slice(0,3)}********${str.slice(10,14)}`
}

function dateFormat(str){
  return `${new Date(str*1000).toLocaleDateString("en-US")} ${new Date(1513808027*1000).toLocaleTimeString("en-US")}`
}

function getGender (gender) {

  return gender === "Female"? "Ms." : "Mr."

}

function getUserInfo(id){
  let user = users.filter(function(item) {

    if ( item.id === id == true) return item.id
    else return

  });




  let company = companies.filter(function(item) {

    if ( item.id === user[0].company_id == true) return item.id
    else return

  });

  // console.log(company);


   
  return `
  ${getGender(user[0].gender)} 
  ${user[0].first_name} 
  ${user[0].last_name}
  ${userDetailTemplate(user[0], company)}
  `
}


console.log(getUserInfo(20));


let el = orders.reduce(function(sum, current) {
  return sum + trTemplate(current.id,
      current.transaction_id, 
      getUserInfo(current.user_id),
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