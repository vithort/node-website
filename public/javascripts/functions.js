function getCollections() {
    $.ajax({
        type: "GET",
        url: '/index',
    })
        .done(function (data) {
            alert(data.join(' '));
            generateSelect(data);
        })
}

function generateSelect(dataArr) {
    let mySelect = document.querySelector("#my-select");

    if (dataArr.length) {
        mySelect.hidden = false;
    }
    dataArr.forEach((obj, index) => {
        let opt = document.createElement("option");
        opt.value = obj.id;
        opt.innerHTML = obj.name;
        mySelect.appendChild(opt);
    });
}