const api='/api/history';
const paid=document.getElementById('paid-amount');
const record = ()=>{
    fetch(api)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        const amount=data[(data.length)-1].amount;
        paid.innerText=amount;
    })
    .catch(()=>{
        console.log('failed');
    })}

record();