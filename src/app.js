// this is an example of improting data from JSON
import orders from '../data/orders.json';

import Table from './table';

import TableTr from './tableTr';

// console.log(orders);

export default (function () {
    // YOUR CODE GOES HERE
    // next line is for example only

    document.getElementById("app").innerHTML = "<h1>Hello WG Forge</h1>";



    setTimeout(Table.draw(), 1000);
    setTimeout(TableTr.draw(), 2000);
    //  Table.draw();
    // TableTr.draw();

}());
