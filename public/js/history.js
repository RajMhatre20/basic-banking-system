const tbody=document.querySelector('tbody');
const api='http://localhost:3000/api/history';
const record = ()=>{
    fetch(api)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        for (let i = data.length-1; i >=0; i--) {
            const tr=document.createElement('tr');
            var td=document.createElement('td');
            td.innerText=i+1;
            tr.appendChild(td);
            for (const key in data[i]) {
                if (key==='_id' || key==='__v') {
                    continue;
                }
                td=document.createElement('td');
                td.innerText=data[i][key];
                tr.appendChild(td);
            }
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

