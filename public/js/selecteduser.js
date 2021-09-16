const tbody=document.querySelector('tbody');
const select=document.querySelector('select');
const api='/api/details';
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const customerid = urlParams.get('id')
const record = ()=>{
    fetch(api)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        const tr=document.createElement('tr');
        for (let i = 0; i < data.length; i++) {
            var option=document.createElement('option');
            for (const key in data[i]) {
                if (data[i]._id===customerid) {
                    
                    if (key==='_id') {
                        continue;
                    }
                    var td=document.createElement('td');
                    td.innerText=data[i][key];
                    tr.appendChild(td);
                }
                else{
                }
            }
            if (data[i]._id!=customerid) {
                option.innerText=data[i].name;
                option.setAttribute('value',`${data[i]._id}`);
                select.appendChild(option);
            }
        }
        tbody.appendChild(tr);
    })
    .catch(()=>{
        console.log('failed');
    })
}

document.getElementById('transferid').value=customerid;

function checkform() {
    if (document.transferdetails.transferto.value=="null") {
        alert("Select user");
        return false;
    }
    if(document.transferdetails.amount.value == "") {
        alert("Please enter amount");
        return false;
    }
    if(document.transferdetails.amount.value <= 0) {
        alert("Enter valid amount");
        return false;
    }
    document.transferdetails.submit();
}

record();