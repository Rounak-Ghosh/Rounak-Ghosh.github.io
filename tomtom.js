var dynamicList = {
    Kolkata: ["Visakhapatnam", "Patna", "Ranchi"],
    Chennai: ["Bengaluru", "Coimbatore", "Hyderabad"],
    Bengaluru: ["Kochi", "Chennai", "Mumbai"],
    Mumbai: ["Panaji", "Bengaluru", "Ahmedabad"],
    Delhi: ["Ahmedabad", "Amritsar", "Lucknow"],
    Ahmedabad: ["Delhi", "Mumbai"],
    Kochi: ["Bengaluru", "Panaji"],
    Panaji: ["Mumbai", "Kochi"],
    Hyderabad: ["Visakhapatnam", "Chennai"],
    Visakhapatnam: ["Hyderabad", "Kolkata"],
    Ranchi: ["Kolkata"],
    Coimbatore: ["Chennai"],
    Amritsar: ["Delhi"],
    Lucknow: ["Delhi"],
};

function changeSource(value) {
    if (value.length == 0)
        document.getElementById("destination").innerHTML = "<options><options>";
    else {
        var options = "";
        for (categoryId in dynamicList[value]) {
            options +=
                "<option value = " +
                dynamicList[value][categoryId] +
                ">" +
                dynamicList[value][categoryId] +
                "</options>";
        }
        document.getElementById("destination").innerHTML = options;
    }
}

var currentCity = '';

function routeSelection() {

    var sourceCity = document.getElementById("source").value;
    var destinationCity = document.getElementById("destination").value;

    currentCity = sourceCity;

    if (sourceCity == "Mumbai" && destinationCity == "Panaji") 
        {mumbaipanaji();}
    else if (sourceCity == "Mumbai" && destinationCity == "Bengaluru")
        mumbaibengaluru();
    else if (sourceCity == "Mumbai" && destinationCity == "Ahmedabad")
        mumbaiahmedabad();
    else if (sourceCity == "Kolkata" && destinationCity == "Ranchi")
        kolkataranchi();
    else if (sourceCity == "Kolkata" && destinationCity == "Visakhapatnam")
        kolkatavisakhapatnam();
    else if (sourceCity == "Kolkata" && destinationCity == "Patna")
        kolkatapatna();
    else if (sourceCity == "Delhi" && destinationCity == "Ahmedabad")
        delhiahmedabad();
    else if (sourceCity == "Delhi" && destinationCity == "Amritsar")
        delhiamritsar();
    else if (sourceCity == "Delhi" && destinationCity == "Lucknow")
        delhilucknow();
    else if (sourceCity == "Chennai" && destinationCity == "Bengaluru")
        chennaibengaluru();
    else if (sourceCity == "Chennai" && destinationCity == "Coimbatore")
        chennaicoimbatore();
    else if (sourceCity == "Chennai" && destinationCity == "Hyderabad")
        chennaihyderabad();
    else if (sourceCity == "Bengaluru" && destinationCity == "Chennai")
        chennaibengaluru();
    else if (sourceCity == "Bengaluru" && destinationCity == "Kochi")
        bengalurukochi();
    else if (sourceCity == "Bengaluru" && destinationCity == "Mumbai")
        mumbaibengaluru();
    else if (sourceCity == "Kochi" && destinationCity == "Bengaluru")
        bengalurukochi();
    else if (sourceCity == "Kochi" && destinationCity == "Panaji")
        kochipanaji();
    else if (sourceCity == "Panaji" && destinationCity == "Kochi")
        kochipanaji();
    else if (sourceCity == "Panaji" && destinationCity == "Mumbai")
        mumbaipanaji();
    else if (sourceCity == "Ahmedabad" && destinationCity == "Delhi")
        delhiahmedabad();
    else if (sourceCity == "Ahmedabad" && destinationCity == "Mumbai")
        mumbaiahmedabad();
    else if (sourceCity == "Hyderabad" && destinationCity == "Chennai")
        chennaihyderabad();
    else if (sourceCity == "Hyderabad" && destinationCity == "Visakhapatnam")
        hyderabadvisakhapatnam();
    else if (sourceCity == "Visakhapatnam" && destinationCity == "Hyderabad")
        hyderabadvisakhapatnam();
    else if (sourceCity == "Visakhapatnam" && destinationCity == "Kolkata")
        kolkatavisakhapatnam();
    else if (sourceCity == "Ranchi" && destinationCity == "Kolkata")
        kolkataranchi();
    else if (sourceCity == "Coimbatore" && destinationCity == "Chennai")
        chennaicoimbatore();
    else if (sourceCity == "Amritsar" && destinationCity == "Delhi")
        delhiamritsar();
    else if (sourceCity == "Lucknow" && destinationCity == "Delhi")
        delhilucknow();
    else if (sourceCity == "Patna" && destinationCity == "Kolkata")
        kolkatapatna();
}


//  STORING CO-ORDINATES OF CITIES IN STRING
var mumbaiPT = "72.82073403153514,18.968811839306774";
var panajiPT = "73.82254549932092,15.480852322291586";
var bengaluruPT = "77.57564688590277,12.977194993545213";
var chennaiPT = "80.20203468527207,13.072174009472237";
var kolkataPT = "88.37022441723379,22.565325260528393";
var delhiPT = "77.21874774622229,28.632033993846747";
var ahmedabadPT = "72.59168141373704,23.01423819454735";
var kochiPT = "76.25121940494328,9.957762094990468";
var hyderabadPT = "78.47451411335726,17.36134177028312";
var visakhapatnamPT = "83.30794216495023,17.723127598211285";
var ranchiPT = "85.32185960852917,23.319301031753447";
var coimbatorePT = "76.96957454949472,11.016714989700386";
var amritsarPT = "74.86758072199787,31.63729868730837";
var lucknowPT = "80.9489444304064,26.846500967160434";
var patnaPT = "85.13034790259688,25.611200023723246";

//  STORING CO-ORDINATES OF CITIES IN ARRAY
var mumbai = [72.82073403153514, 18.968811839306774];
var panaji = [73.82254549932092, 15.480852322291586];
var bengaluru = [77.57564688590277, 12.977194993545213];
var chennai = [80.20203468527207, 13.072174009472237];
var kolkata = [88.37022441723379, 22.565325260528393];
var delhi = [77.21874774622229, 28.632033993846747];
var ahmedabad = [72.59168141373704, 23.01423819454735];
var kochi = [76.25121940494328, 9.957762094990468];
var hyderabad = [78.47451411335726, 17.36134177028312];
var visakhapatnam = [83.30794216495023, 17.723127598211285];
var ranchi = [85.32185960852917, 23.319301031753447];
var coimbatore = [76.96957454949472, 11.016714989700386];
var amritsar = [74.86758072199787, 31.63729868730837];
var lucknow = [80.9489444304064, 26.846500967160434];
var patna = [85.13034790259688, 25.611200023723246];
var zeromile = [79.07852831502758, 21.149745485932975];

//  STORING CO-ORDINATES OF EV STATIONS IN STRING
var puneEV = "73.74623527575844,18.623443414880715";
var kolhapurEV = "74.25916073745681,16.682210951027088";
var hubliEV = "75.1267302178941,15.360105856246953";
var devanagereEV = "75.90648310770523,14.345388033628938";
var suratEV = "72.93638928190641,21.28364273437724";
var bhubaneswarEV = "85.7765033271771,20.26048438028324";
var burdwanEV = "87.81269270154024,23.273091713247492";
var bodhgayaEV = "84.93005901508694,24.52532538421312";
var jaipurEV = "75.74825974308452,26.848084371257894";
var sirohiEV = "72.89152941509522,24.970704084002122";
var ajmerEV = "74.60463152161817,26.402693222502418";
var agraEV = "77.83595922505256,27.19048406537502";
var karnalEV = "76.94253171912283,29.575571805593494";
var ludhianaEV = "75.87567094283727,30.9226866290673";
var velloreEV = "79.12422952234452,12.899069980581796";
var krishnagiriEV = "78.2226046384457,12.501480184502142";
var vijaywadaEV = "80.64135403592857,16.452564485143522";
var salemEV = "77.81004910539166,11.462323037021314";
var coimbatoreEV = "76.85317747726329,10.85423532859382";
var kozhikodeEV = "75.80079457093937,11.186520636559658";
var mangaluruEV = "74.82893259218494,12.92296752604765";
var rajahmudryEV = "81.79814746967465,16.983130729643605";

//  STORING CO-ORDINATES OF EV STATIONS IN ARRAY
var punestation = [73.74623527575844, 18.623443414880715];
var kolhapurstation = [74.25916073745681, 16.682210951027088];
var hublistation = [75.1267302178941, 15.360105856246953];
var devanagerestation = [75.90648310770523, 14.345388033628938];
var suratstation = [72.93638928190641, 21.28364273437724];
var bhubaneswarstation = [85.7765033271771, 20.26048438028324];
var burdwanstation = [87.81269270154024, 23.273091713247492];
var bodhgayastation = [84.93005901508694, 24.52532538421312];
var jaipurstation = [75.74825974308452, 26.848084371257894];
var sirohistation = [72.89152941509522, 24.970704084002122];
var ajmerstation = [74.60463152161817, 26.402693222502418];
var agrastation = [77.83595922505256, 27.19048406537502];
var karnalstation = [76.94253171912283, 29.575571805593494];
var ludhianastation = [75.87567094283727, 30.9226866290673];
var vellorestation = [79.12422952234452, 12.899069980581796];
var krishnagiristation = [78.2226046384457, 12.501480184502142];
var vijaywadastation = [80.64135403592857, 16.452564485143522];
var salemstation = [77.81004910539166, 11.462323037021314];
var coimbatorestation = [76.85317747726329, 10.85423532859382];
var kozhikodestation = [75.80079457093937, 11.186520636559658];
var mangalurustation = [74.82893259218494, 12.92296752604765];
var rajahmudrystation = [81.79814746967465, 16.983130729643605];

//  CALIBRATING ROUTES WITH EV STATIONS
var mumbai_panaji = mumbaiPT + ":" + puneEV + ":" + kolhapurEV + ":" + panajiPT; // 2
var mumbai_bengaluru = mumbaiPT + ":" + puneEV + ":" + kolhapurEV + ":" + hubliEV + ":" + devanagereEV + ":" + bengaluruPT; // 4
var mumbai_ahmedabad = mumbaiPT + ":" + suratEV + ":" + ahmedabadPT; // 1
var kolkata_visakhapatnam = kolkataPT + ":" + bhubaneswarEV + ":" + visakhapatnamPT; // 1
var kolkata_ranchi = kolkataPT + ":" + burdwanEV + ":" + ranchiPT; // 1
var kolkata_patna = kolkataPT + ":" + burdwanEV + ":" + bodhgayaEV; // 2
var delhi_ahmedabad = delhiPT + ":" + jaipurEV + ":" + ajmerEV + ":" + sirohiEV + ":" + ahmedabadPT; // 3
var delhi_lucknow = delhiPT + ":" + agraEV + ":" + lucknowPT; // 1
var delhi_amritsar = delhiPT + ":" + karnalEV + ":" + ludhianaEV + ":" + amritsarPT; // 2
var chennai_bengaluru = chennaiPT + ":" + velloreEV + ":" + krishnagiriEV + ":" + bengaluruPT; // 2
var chennai_coimbatore = chennaiPT + ":" + salemEV + ":" + coimbatorePT; // 1
var chennai_hyderabad = chennaiPT + ":" + vijaywadaEV + ":" + hyderabadPT; // 1
var bengaluru_kochi = bengaluruPT + ":" + salemEV + ":" + coimbatoreEV + ":" + kochiPT; // 2
var kochi_panaji = kochiPT + ":" + kozhikodeEV + ":" + mangaluruEV + ":" + panajiPT; // 2
var hyderabad_visakhapatnam = hyderabadPT + ":" + vijaywadaEV + ":" + rajahmudryEV + ":" + visakhapatnamPT; // 2

//  BUILDING ROUTES FUNCTIONS
var mumbaipanaji = function (event) {
    var routeOptions = {
        key: apikey,
        locations: mumbai_panaji,
    };
    stations = new tt.Marker().setLngLat(punestation).addTo(map);
    stations = new tt.Marker().setLngLat(kolhapurstation).addTo(map);
    createRoute(routeOptions);
};

var mumbaibengaluru = function (event) {
    var routeOptions = {
        key: apikey,
        locations: mumbai_bengaluru,
    };
    stations = new tt.Marker().setLngLat(punestation).addTo(map);
    stations = new tt.Marker().setLngLat(kolhapurstation).addTo(map);
    stations = new tt.Marker().setLngLat(hublistation).addTo(map);
    stations = new tt.Marker().setLngLat(devanagerestation).addTo(map);
    createRoute(routeOptions);
};

var mumbaiahmedabad = function (event) {
    var routeOptions = {
        key: apikey,
        locations: mumbai_ahmedabad,
    };
    stations = new tt.Marker().setLngLat(suratstation).addTo(map);
    createRoute(routeOptions);
};

var kolkatavisakhapatnam = function (event) {
    var routeOptions = {
        key: apikey,
        locations: kolkata_visakhapatnam,
    };
    stations = new tt.Marker().setLngLat(bhubaneswarstation).addTo(map);
    createRoute(routeOptions);
};

var kolkataranchi = function (event) {
    var routeOptions = {
        key: apikey,
        locations: kolkata_ranchi,
    };
    stations = new tt.Marker().setLngLat(burdwanstation).addTo(map);
    createRoute(routeOptions);
};

var kolkatapatna = function (event) {
    var routeOptions = {
        key: apikey,
        locations: kolkata_patna,
    };
    stations = new tt.Marker().setLngLat(burdwanstation).addTo(map);
    stations = new tt.Marker().setLngLat(bodhgayastation).addTo(map);
    createRoute(routeOptions);
};

var delhiahmedabad = function (event) {
    var routeOptions = {
        key: apikey,
        locations: delhi_ahmedabad,
    };
    stations = new tt.Marker().setLngLat(jaipurstation).addTo(map);
    stations = new tt.Marker().setLngLat(ajmerstation).addTo(map);
    stations = new tt.Marker().setLngLat(sirohistation).addTo(map);
    createRoute(routeOptions);
};

var delhiamritsar = function (event) {
    var routeOptions = {
        key: apikey,
        locations: delhi_amritsar,
    };
    stations = new tt.Marker().setLngLat(karnalstation).addTo(map);
    stations = new tt.Marker().setLngLat(ludhianastation).addTo(map);
    createRoute(routeOptions);
};

var delhilucknow = function (event) {
    var routeOptions = {
        key: apikey,
        locations: delhi_lucknow,
    };
    stations = new tt.Marker().setLngLat(agrastation).addTo(map);
    createRoute(routeOptions);
};

var chennaibengaluru = function (event) {
    var routeOptions = {
        key: apikey,
        locations: chennai_bengaluru,
    };
    stations = new tt.Marker().setLngLat(vellorestation).addTo(map);
    stations = new tt.Marker().setLngLat(krishnagiristation).addTo(map);
    createRoute(routeOptions);
};

var chennaicoimbatore = function (event) {
    var routeOptions = {
        key: apikey,
        locations: chennai_coimbatore,
    };
    stations = new tt.Marker().setLngLat(salemstation).addTo(map);
    createRoute(routeOptions);
};

var chennaihyderabad = function (event) {
    var routeOptions = {
        key: apikey,
        locations: chennai_hyderabad,
    };
    stations = new tt.Marker().setLngLat(vijaywadastation).addTo(map);
    createRoute(routeOptions);
};

var bengalurukochi = function (event) {
    var routeOptions = {
        key: apikey,
        locations: bengaluru_kochi,
    };
    stations = new tt.Marker().setLngLat(salemstation).addTo(map);
    stations = new tt.Marker().setLngLat(coimbatorestation).addTo(map);
    createRoute(routeOptions);
};

var kochipanaji = function (event) {
    var routeOptions = {
        key: apikey,
        locations: kochi_panaji,
    };
    stations = new tt.Marker().setLngLat(kozhikodestation).addTo(map);
    stations = new tt.Marker().setLngLat(mangalurustation).addTo(map);
    createRoute(routeOptions);
};

var hyderabadvisakhapatnam = function (event) {
    var routeOptions = {
        key: apikey,
        locations: hyderabad_visakhapatnam,
    };
    stations = new tt.Marker().setLngLat(vijaywadastation).addTo(map);
    stations = new tt.Marker().setLngLat(rajahmudrystation).addTo(map);
    createRoute(routeOptions);
};


var apikey = "nMq5c5JQxz8jjuwTEpo4YHYhZ7Lqlly3";

var map = tt.map({
    key: apikey,
    container: "map",
    center: zeromile,
    zoom: 4,
    interactive: true,
    style: {
        map: "basic_night", // basic_main, basic_night
    },

    stylesVisibility: {
        trafficFlow: true,
        trafficIncidents: false,
    },
});

map.dragRotate.enable();

var createRoute = function (options) {
    tt.services.calculateRoute(options).then(function (response) {
        var geojson = response.toGeoJson();
        console.log(geojson);
        map.addLayer({
            id: "route",
            type: "line",
            source: {
                type: "geojson",
                data: geojson,
            },
            paint: {
                "line-color": "#4285F4",
                "line-width": 6,
            },
        });
    });
};

var moveMap = function (lnglat){
    map.flyTo({
        center: lnglat,
         zoom: 10
    })
}

function handleResults(result){
    console.log(result);
    if(result.results){
        moveMap(result.results[0].position)
    }
}

function lookup(){
    tt.services.fuzzySearch({
        key: apikey,
        query: document.getElementById("source").value
    }).then(handleResults)
}
