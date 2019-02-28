export default function (
    

) {


    var grid = document.getElementById('grid');

    grid.onclick = function(e) {
      if (e.target.tagName != 'TH') return;

      // Если TH -- сортируем
      sortGrid(e.target.cellIndex, e.target.getAttribute('data-type'));
    };

    function sortGrid(colNum, type) {
      var tbody = grid.getElementsByTagName('tbody')[0];

      // Составить массив из TR
      var rowsArray = [].slice.call(tbody.rows);


      

      // определить функцию сравнения, в зависимости от типа
      var compare;

      switch (type) {
         
        case 'user_info':
          compare = function(rowA, rowB) {

            // console.log(rowB.cells[colNum].querySelector(".user-name").innerHTML);
           
            if (rowA.cells[colNum].querySelector(".user-name").innerHTML < rowB.cells[colNum].querySelector(".user-name").innerHTML) {
                return -1;
              }
            if (rowA.cells[colNum].querySelector(".user-name").innerHTML > rowB.cells[colNum].querySelector(".user-name").innerHTML) {
                return 1;
              }
            return 0;
        };
          break;

          case 'order_amount':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
          };

          break; 

          case 'card_type':
            compare = function(rowA, rowB) {

              if (rowA.cells[colNum].innerHTML <  rowB.cells[colNum].innerHTML) {
                return -1;
              }
            if (rowA.cells[colNum].innerHTML >  rowB.cells[colNum].innerHTML) {
                return 1;
              }
            return 0;
            };

            
  
          break; 

        card_type
    
      }

      // сортировать
      rowsArray.sort(compare);

      // Убрать tbody из большого DOM документа для лучшей производительности
      grid.removeChild(tbody);

      // добавить результат в нужном порядке в TBODY
      // они автоматически будут убраны со старых мест и вставлены в правильном порядке
      for (var i = 0; i < rowsArray.length; i++) {
        tbody.appendChild(rowsArray[i]);
      }

      grid.appendChild(tbody);

    }

}


