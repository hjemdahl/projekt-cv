"use strict";function getPortfolio(){fetch("http://studenter.miun.se/~mohj1800/projekt/rest/cv.php/api/portfolio").then(function(t){return t.json()}).then(function(t){var n="";t.forEach(function(t){n+='\n            <div class="portfolioRow">\n                <h3>'.concat(t.title,'</h3>\n                <a href="').concat(t.url,'"><img class="portfolioPic" src="').concat(t.img,'"></a>\n                <p class="portfolioInfo"><td>').concat(t.info,"</td></p>\n            </div>\n            ")}),document.getElementById("portfolio").innerHTML=n}).catch(function(t){return console.log(t)}),getStudies()}function getStudies(){fetch("http://studenter.miun.se/~mohj1800/projekt/rest/cv.php/api/studies").then(function(t){return t.json()}).then(function(t){var n="<tr><th>Skola/Utbildning</th><th>Kurs</th><th>Start</th><th>Stopp</th></tr>";t.forEach(function(t){n+="\n                <tr>\n                    <td>".concat(t.school,"/").concat(t.program,"</td>\n                    <td>").concat(t.course,"</td>\n                    <td>").concat(t.startDate,"</td>\n                    <td>").concat(t.endDate,"</td>\n                </tr>\n            ")}),document.getElementById("studiesTable").innerHTML=n}).catch(function(t){return console.log(t)}),getWork()}function getWork(){fetch("http://studenter.miun.se/~mohj1800/projekt/rest/cv.php/api/work").then(function(t){return t.json()}).then(function(t){var n="<tr><th>Roll</th><th>Arbetsgivare</th><th>Start</th><th>Stopp</th></tr>";t.forEach(function(t){n+="\n                <tr>\n                    <td>".concat(t.role,"</td>\n                    <td>").concat(t.employee,"</td>\n                    <td>").concat(t.startDate,"</td>\n                    <td>").concat(t.endDate,"</td>\n                </tr>\n            ")}),document.getElementById("workTable").innerHTML=n}).catch(function(t){return console.log(t)})}window.onload=getPortfolio;
//# sourceMappingURL=main.js.map
