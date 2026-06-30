const form = document.getElementById("bookingForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const booking = {

            nama: document.getElementById("nama").value,
            hp: document.getElementById("hp").value,
            layanan: document.getElementById("layanan").value,
            catatan: document.getElementById("catatan").value

        };

        let data = JSON.parse(localStorage.getItem("booking")) || [];

        data.push(booking);

        localStorage.setItem("booking", JSON.stringify(data));

        alert("Booking berhasil disimpan!");

        form.reset();

    });

}

const table = document.getElementById("tableData");

if (table) {

    let data = JSON.parse(localStorage.getItem("booking")) || [];

    data.forEach((item, index) => {

        table.innerHTML += `

<tr>

<td>${index + 1}</td>
<td>${item.nama}</td>
<td>${item.hp}</td>
<td>${item.layanan}</td>
<td>${item.catatan}</td>

</tr>

`;

    });

}