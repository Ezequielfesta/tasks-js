//AMAZING EVENTS API
//------------------
let url_api = "https://mindhub-xj03.onrender.com/api/amazing";

async function getData() {
    try {

        let answer = await fetch(url_api)
        let data = await answer.json()

        let high = data.events[0].assistance;
        let low = data.events[0].assistance;
        let max = data.events[0].capacity;
        var idhigh = 0;
        var idlow = 0;
        var idmax = 0;

        for (i = 0; i < data.events.length; i++) {
            if (Date.parse(data.currentDate) > Date.parse(data.events[i].date)) {
                if (data.events[i].assistance > high) {
                    high = data.events[i].assistance;
                    idhigh = i;
                }
                if (data.events[i].assistance < low) {
                    low = data.events[i].assistance;
                    idlow = i;
                }
                if (data.events[i].capacity > max) {
                    max = data.events[i].capacity;
                    idmax = i;
                }
            }
        }

        var categories = [];
        var categoriesrevenue_u = [];
        var categoriesattendance_u = [];
        var categoriesrevenue_p = [];
        var categoriesattendance_p = [];
        var counter1 = [];
        var counter2 = [];

        for (i = 0; i < data.events.length; i++) {
            if (!categories.includes(data.events[i].category)) { categories.push(data.events[i].category) }
        }

        for (i = 0; i < categories.length; i++) {
            categoriesrevenue_u[i] = 0;
            categoriesattendance_u[i] = 0;
            categoriesrevenue_p[i] = 0;
            categoriesattendance_p[i] = 0;
        }

        function categoryDate() {

            for (j = 0; j < categories.length; j++) {
                counter1[j] = 0
                counter2[j] = 0
                for (i = 0; i < data.events.length; i++) {

                    if (Date.parse(data.currentDate) < Date.parse(data.events[i].date)) { // Upcoming Event

                        if (data.events[i].category == categories[j]) {
                            categoriesrevenue_u[j] = categoriesrevenue_u[j] + (Number(data.events[i].price) * Number(data.events[i].estimate));
                            counter1[j]++
                            categoriesattendance_u[j] = categoriesattendance_u[j] + ((Number(data.events[i].estimate) * 100) / Number(data.events[i].capacity))
                        }
                    } else if (Date.parse(data.currentDate) > Date.parse(data.events[i].date)) { // Past Event

                        if (data.events[i].category == categories[j]) {
                            categoriesrevenue_p[j] = categoriesrevenue_p[j] + (Number(data.events[i].price) * Number(data.events[i].assistance));
                            counter2[j]++
                            categoriesattendance_p[j] = categoriesattendance_p[j] + ((Number(data.events[i].assistance) * 100) / Number(data.events[i].capacity))
                        }
                    }
                }
                categoriesattendance_u[j] = categoriesattendance_u[j] / counter1[j]
                categoriesattendance_p[j] = categoriesattendance_p[j] / counter2[j]
                if (categoriesrevenue_u[j] == 0) { categoriesattendance_u[j] = 0 }
                if (categoriesrevenue_p[j] == 0) { categoriesattendance_p[j] = 0 }
            }
        }
        categoryDate();

        let USDollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        let tr1Element = document.getElementById("tr1");
        tr1Element.insertAdjacentHTML('afterEnd', '<tr><td>' + data.events[idhigh].name + '</td><td>' + data.events[idlow].name + '</td><td>' + data.events[idmax].name + '</td></tr>')
        let tr2Element = document.getElementById("tr2");
        let tr3Element = document.getElementById("tr3");

        for (i = categories.length - 1; i >= 0; i--) {
            if (categoriesrevenue_u[i] == 0 && categoriesattendance_u[i] == 0)
            { tr2Element.insertAdjacentHTML('afterEnd', '<tr><td>' + categories[i] + '</td><td>No events</td><td>No events</td></tr>') }
            else { tr2Element.insertAdjacentHTML('afterEnd', '<tr><td>' + categories[i] + '</td><td>' + USDollar.format(categoriesrevenue_u[i]) + '</td><td>' + categoriesattendance_u[i].toFixed(2) + ' %</td></tr>') }
        }

        for (i = categories.length - 1; i >= 0; i--) {
            if (categoriesrevenue_p[i] == 0 && categoriesattendance_p[i] == 0) { tr3Element.insertAdjacentHTML('afterEnd', '<tr><td>' + categories[i] + '</td><td>No events</td><td>No events</td></tr>') } else { tr3Element.insertAdjacentHTML('afterEnd', '<tr><td>' + categories[i] + '</td><td>' + USDollar.format(categoriesrevenue_p[i]) + '</td><td>' + categoriesattendance_p[i].toFixed(2) + ' %</td></tr>') }
        }

    } catch {
        console.log('API Error')
    }
}
getData();