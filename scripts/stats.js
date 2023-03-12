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

        for (i = 0; i < data.events.length; i++) {
            if (!categories.includes(data.events[i].category)) { categories.push(data.events[i].category) }
        }

        for (i = 0; i < categories.length; i++) {
            categoriesrevenue_u[i] = 0;
            categoriesattendance_u[i] = 0;
            categoriesrevenue_p[i] = 0;
            categoriesattendance_p[i] = 0;
        }

        function categoryCheck() {

            for (j = 0; j < data.events.length; j++) {
 
                for (i = 0; i < categories.length; i++) {

                    if (Date.parse(data.currentDate) > Date.parse(data.events[j].date)) {
                 
                        if (data.events[j].category == categories[i]) {
                            if ((parseInt(data.events[j].price) * parseInt(data.events[j].assistance)) > parseInt(categoriesrevenue_u[i])) {
                                categoriesrevenue_u[i] = parseInt(data.events[j].price) * parseInt(data.events[j].assistance);
                            }
                            if (((parseInt(data.events[j].assistance) * 100) / parseInt(data.events[j].capacity)) > parseInt(categoriesattendance_u[i])) {
                                categoriesattendance_u[i] = ((parseInt(data.events[j].assistance) * 100) / parseInt(data.events[j].capacity))
                            }
                        
                        }
                    } else if (Date.parse(data.currentDate) > Date.parse(data.events[j].date)) {
                        if (data.events[j].category == categories[i]) {
                            if ((parseInt(data.events[j].price) * parseInt(data.events[j].assistance)) > parseInt(categoriesrevenue_p[i])) {
                                categoriesrevenue_p[i] = parseInt(data.events[j].price) * parseInt(data.events[j].assistance);
                            }
                            if (((parseInt(data.events[j].assistance) * 100) / parseInt(data.events[j].capacity)) > parseInt(categoriesattendance_p[i])) {
                                categoriesattendance_p[i] = ((parseInt(data.events[j].assistance) * 100) / parseInt(data.events[j].capacity))
                            }
                        }
                    }
                }
            }
            }

        categoryCheck();

        let USDollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        let tr1Element = document.getElementById("tr1");
        tr1Element.insertAdjacentHTML('afterEnd', '<tr><td>' + data.events[idhigh].name + '</td><td>' + data.events[idlow].name + '</td><td>' + data.events[idmax].name + '</td></tr>')
        let tr2Element = document.getElementById("tr2");
        let tr3Element = document.getElementById("tr3");

        for (i = categories.length - 1; i >= 0; i--) {
            tr2Element.insertAdjacentHTML('afterEnd', '<tr><td>' + categories[i] + '</td><td>' + USDollar.format(categoriesrevenue_u[i]) + '</td><td>' + categoriesattendance_u[i].toFixed(2) + ' %</td></tr>')
        }

        for (i = categories.length - 1; i >= 0; i--) {
            tr3Element.insertAdjacentHTML('afterEnd', '<tr><td>' + categories[i] + '</td><td>' + USDollar.format(categoriesrevenue_p[i]) + '</td><td>' + categoriesattendance_p[i].toFixed(2) + ' %</td></tr>')
        }

    } catch {
        console.log('API Error')
    }
}
getData();