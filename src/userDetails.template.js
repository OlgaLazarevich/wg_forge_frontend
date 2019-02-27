export default function (
    user,
    company

) {


    return `
    <div class="user-details">
            <p>Birthday: ${user.birthday}</p>
            <p><img src="${user.avatar}" width="100px"></p>
            <p>Company: <a href="${company.length != 0 ? company[0].url : ''}"></a>${company.length != 0 ? company[0].title : ""}</a></p>
            <p>Industry: ${company.length != 0 ? company[0].industry : ''}</p>
        </div>
    `
}
