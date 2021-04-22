$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
  });
const xhr = new XMLHttpRequest();
//fetching starts here
xhr.open('GET', 'https://api.covid19india.org/data.json', true);
//onload function runs here
xhr.onload = function () {
    if (this.status === 200) {
        var data = JSON.parse(this.responseText).statewise;
        var html = '';
        for (var i = 1; i < data.length - 1; i++) {
            if(i<19){
                html += `<tr>
                    <td style="color: white">${i}</td>
                    <td style="color: white">${data[i].state}</td>
                    <td style="color: rgb(0,255,255)">${data[i].confirmed}</td>
                    <td style="color: rgb(255,0,0)">${data[i].deaths}</td>
                    <td style="color: rgb(0,255,64)">${data[i].recovered}</td>
                    </tr>`
            }
            if(i>19){
                html += `<tr>
                    <td style="color: white">${i-1}</td>
                    <td style="color: white">${data[i].state}</td>
                    <td style="color: rgb(0,255,255)">${data[i].confirmed}</td>
                    <td style="color: rgb(255,0,0)">${data[i].deaths}</td>
                    <td style="color: rgb(0,255,64)">${data[i].recovered}</td>
                    </tr>`
            }

        }
        //populating the DOM
        document.getElementById('tbody').innerHTML = html
    }
    else {
        console.log("Some error occured")
    }
}
//API call is made here.
xhr.send()