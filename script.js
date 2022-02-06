const selectFirst = document.querySelector('.select1');
const selectSecond = document.querySelector('.select2');

const form = document.querySelector('form');
const btnFormSubmit = document.querySelector('.submit-form');

const inp1 = document.querySelector('.inp1');
const inp2 = document.querySelector('.inp2');

const thanksBlock = document.querySelector('.thanks');

let arrSelectFirst = [];
let arrSelectSecond = [];

fetch('db.json')
.then((response) => {
    return response.json()
})
.then((data) => {
    let arr = [];
    arr = Object.values(data);

    arr.forEach(item => {
        let shifted = item.shift();
        arrSelectFirst.push(shifted);
        arrSelectSecond.push(item);
    })

    arrSelectFirst.forEach((item, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = item;
        selectFirst.appendChild(option);
    });
});

selectFirst.addEventListener('change', () => {
    if(selectFirst.value == 'sel') {
        selectSecond.textContent = '';
        const opt = document.createElement('option');
        opt.value = 'sel';
        opt.textContent = 'Выберите значение';
        selectSecond.append(opt);
    } else if (selectFirst.value == 0) {
        selectSecond.textContent = '';
        arrSelectSecond[0].forEach((item, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = item;
            selectSecond.appendChild(option);
        });
    } else if (selectFirst.value == 1) {
        selectSecond.textContent = '';
        arrSelectSecond[1].forEach((item, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = item;
            selectSecond.appendChild(option);
        });
    } else if (selectFirst.value == 2) {
        selectSecond.textContent = '';
        arrSelectSecond[2].forEach((item, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = item;
            selectSecond.appendChild(option);
        });
    }
    inp1.value = selectFirst.options[selectFirst.selectedIndex].textContent;
    inp2.value = selectSecond.options[selectSecond.selectedIndex].textContent;
    console.log(inp1.value);
    console.log(inp2.value);
});

selectSecond.addEventListener('change', () => {
    inp2.value = selectSecond.options[selectSecond.selectedIndex].textContent;
    console.log(inp2.value);
});

btnFormSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    submitForm();
})

const sendData = async (data) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "aplication/json"
        }
    });
    return await res.json();
};

const submitForm = () => {
    const formData = new FormData(form);
    const formBody = {};
     
    formData.forEach((val, key) => {
        formBody[key] = val;
    });
    sendData(formBody).then(data => {
        console.log(data);
    })

    thanksBlock.style.display = 'block';
    setTimeout(() => {
        thanksBlock.style.display = 'none';
    }, 4000);
};





