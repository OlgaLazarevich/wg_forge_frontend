// export default `
// <tr id="order_11">
//     <td>8292e007-4682-idkfa-a404-eed9662fa5cc</td>
//     <td class="user_data">15</td>
//     <td>21/12/2017, 1:13:47 AM</td>
//     <td>$453.47</td>
//     <td>30********4733</td>
//     <td>diners-club-carte-blanche</td>
//     <td>IS (211.145.96.59)<td>
// </tr>
// `;



export default function (id, 
    transaction_id, 
    user_id,
    created_at,
    total,
    card_number,
    card_type, 
    order_country, 
    order_ip) {

    return `
    <tr id="order_${id}">
        <td>${transaction_id}</td>
        <td class="user_data">${user_id}</td>
        <td>${created_at}</td>
        <td>$${total}</td>
        <td>${card_number}</td>
        <td>${card_type}</td>
        <td>${order_country} (${order_ip})</td>
    </tr>
    `
}


