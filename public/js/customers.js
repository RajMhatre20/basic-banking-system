const tbody=document.querySelector('tbody');
const api='http://localhost:3000/api/details';
const record = ()=>{
    fetch(api)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        for (let i = 0; i < data.length; i++) {
            const tr=document.createElement('tr');
            for (const key in data[i]) {
                if (key==='_id') {
                    continue;
                }
                var td=document.createElement('td');
                td.innerText=data[i][key];
                tr.appendChild(td);
            }
            var button=document.createElement('button');
            button.innerText='Transact';
            button.setAttribute('onclick', `window.location.href='customers/selecteduser/?id=${data[i]._id}'`);
            td=document.createElement('td');
            td.appendChild(button);
            tr.appendChild(td);
            tbody.appendChild(tr);
            console.log(tr);
           
        }
        console.log(data);
    })
    .catch(()=>{
        console.log('failed');
    })
}
record();

