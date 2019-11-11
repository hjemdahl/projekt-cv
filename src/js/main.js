// Projekt - Webbutveckling III - Moa Hjemdahl 2019

//Eventlistener
window.onload = getPortfolio;

//Function to get portfolio from REST
function getPortfolio() {
    const url = 'http://studenter.miun.se/~mohj1800/projekt/rest/cv.php/api/portfolio';

    fetch(url)
    .then((res) => res.json())
    .then((data) => {

        let output = '';

        //Loop trough rows
        data.forEach(row => {
            output +=`
            <div class="portfolioRow">
                <h3>${row.title}</h3>
                <a href="${row.url}"><img class="portfolioPic" src="${row.img}"></a>
                <p class="portfolioInfo"><td>${row.info}</td></p>
            </div>
            `;
        })
        document.getElementById('portfolio').innerHTML = output;
    })
    // Catch error if exists and writes to console
    .catch((err) => console.log(err))

    getStudies();
}

//Function to get studies from REST
function getStudies() {
    const url = 'http://studenter.miun.se/~mohj1800/projekt/rest/cv.php/api/studies';

    fetch(url)
    .then((res) => res.json())
    .then((data) => {

        //Varable for table
        let output = '<tr><th>Skola/Utbildning</th><th>Kurs</th><th>Start</th><th>Stopp</th></tr>';

        //Loop trough studies
        data.forEach(studie => {
            output +=`
                <tr>
                    <td>${studie.school}/${studie.program}</td>
                    <td>${studie.course}</td>
                    <td>${studie.startDate}</td>
                    <td>${studie.endDate}</td>
                </tr>
            `;
        })
    document.getElementById('studiesTable').innerHTML = output;
    })
    // Catch error if exists and writes to console
    .catch((err) => console.log(err))

    getWork();
}

//Function to get work from REST
function getWork() {
    const url = 'http://studenter.miun.se/~mohj1800/projekt/rest/cv.php/api/work';

    fetch(url)
    .then((res) => res.json())
    .then((data) => {

        //Varable for table
        let output = '<tr><th>Roll</th><th>Arbetsgivare</th><th>Start</th><th>Stopp</th></tr>';

        //Loop trough work
        data.forEach(job => {
            output +=`
                <tr>
                    <td>${job.role}</td>
                    <td>${job.employee}</td>
                    <td>${job.startDate}</td>
                    <td>${job.endDate}</td>
                </tr>
            `;
        })
    document.getElementById('workTable').innerHTML = output;
    })
    // Catch error if exists and writes to console
    .catch((err) => console.log(err))
}