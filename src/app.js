// this is an example of improting data from JSON
import orders from '../data/orders.json';

import Table from './table';

import TableTr from './tableTr';
import sortTable from './sortTable.js';




function viewUserDitail (e) {

    e.preventDefault();
    console.log(e.currentTarget.nextElementSibling.classList.toggle("view"));
}


export default (function () {
    // YOUR CODE GOES HERE
    // next line is for example only

    document.getElementById("app").innerHTML = "<h1>Hello WG Forge</h1>";



    setTimeout(Table.draw(), 1000);
    setTimeout(TableTr.draw(), 2000);

    let userList = document.querySelectorAll(".user_data>a");
    

        for (let i = 0 ; i < 222 ; i++ ){

            userList[i].addEventListener("click", viewUserDitail); 

        }


        

        sortTable();


    

}());
