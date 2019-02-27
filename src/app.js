// this is an example of improting data from JSON
import orders from '../data/orders.json';

import Table from './table';

import TableTr from './tableTr';



function viewUserDitail (e) {

    e.preventDefault();


    console.log(e.currentTarget.nextElementSibling.classList.toggle("view"));

}

function sortTable () {

    document.getElementById('tbody').innerHTML = "";

    setTimeout(TableTr.draw(), 0);
    
    console.log(orders);


    orders.sort(function(a, b) {


        if (a.total > b.total) {
            return 1;
          }
          if (a.total < b.total) {
            return -1;
          }
          // a должно быть равным b
          return 0;
      });

      console.log(orders);

}

export default (function () {
    // YOUR CODE GOES HERE
    // next line is for example only

    document.getElementById("app").innerHTML = "<h1>Hello WG Forge</h1>";



    setTimeout(Table.draw(), 1000);
    setTimeout(TableTr.draw(), 2000);
    console.log(orders);

    let userList = document.querySelectorAll(".user_data>a");
    

        for (let i = 0 ; i < 222 ; i++ ){

            userList[i].addEventListener("click", viewUserDitail); 

        }


        document.getElementById('order_Amount').addEventListener("click", sortTable);;


}());
