import TableTr from './tableTr';





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
        <td class="user_data"><a href="#">${user_id}</a></td>
        <td>${created_at}</td>
        <td>$${total}</td>
        <td>${card_number}</td>
        <td>${card_type}</td>
        <td>${order_country} (${order_ip})</td>
    </tr>
    `
}


