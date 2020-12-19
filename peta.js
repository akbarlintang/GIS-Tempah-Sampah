var mymap = L.map('mapid').setView([-7.132642917693282, 110.40581249142896], 16);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=1jJMmdef3kGZB8cQE1jF', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap);

var marker = L.marker([-7.131926301726001, 110.4120384156704]).addTo(mymap);
var marker = L.marker([-7.1124286733610695, 110.41415935939476]).addTo(mymap);
var marker = L.marker([-7.126910470213697, 110.4228614877783]).addTo(mymap);
var marker = L.marker([-7.133995437083056, 110.40829451149553]).addTo(mymap);
var marker = L.marker([-7.114510769846389, 110.4004117201056]).addTo(mymap);
var marker = L.marker([-7.144795929615733, 110.42187036548076]).addTo(mymap);
var marker = L.marker([-7.145982599591684, 110.41850757404961]).addTo(mymap);
var marker = L.marker([-7.143165493528168, 110.41940478324423]).addTo(mymap);
var marker = L.marker([-7.141301039089696, 110.41770562252633]).addTo(mymap);
var marker = L.marker([-7.1307361524319495, 110.41715544213956]).addTo(mymap);
var marker = L.marker([-7.146846510482281, 110.43799047407731]).addTo(mymap);
var marker = L.marker([-7.155376150971502, 110.4228966819512]).addTo(mymap);
var marker = L.marker([-7.124886695122423, 110.41721772807628]).addTo(mymap);

var data = {
    "type": "FeatureCollection",
    "features": [

    /// Kec. Ungaran Timur
        /// Kel. Sidomulyo
        {
            "type": "Feature",
            "properties": {
                "name": "TPS SMP 2 Ungaran",
                "alamat": "Jl. Letjend. Suprapto, Sidomulyo, Kec. Ungaran Timur 50514",
                "kelurahan": "Sidomulyo",
                "kecamatan": "Ungaran Timur",
                "kapasitas": "4 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.4120384156704,
                -7.131926301726001
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Perum Sidosari",
                "alamat": "Jl. MT Haryono, Sidosari, Sidomulyo, Kec. Ungaran Timur, 50515",
                "kelurahan": "Sidomulyo",
                "kecamatan": "Ungaran Timur",
                "kapasitas": "6 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41583591085275,
                -7.130340705285288
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Sebantengan",
                "alamat": "Jl. Mayjen Sutoyo, Dliwang, Sidomulyo, Kec. Ungaran Timur, 50514",
                "kelurahan": "Sidomulyo",
                "kecamatan": "Ungaran Timur",
                "kapasitas": "6 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.40829451149553,
                -7.133995437083056
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Perum Sidosari Town House",
                "alamat": "Jl. MT Haryono, Kalipasir, Sidomulyo, Kec. Ungaran Timur, 50511",
                "kelurahan": "Sidomulyo",
                "kecamatan": "Ungaran Timur",
                "kapasitas": "3 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41715544213956,
                -7.1307361524319495
                ]
            }
        },

        /// Kel. Bandarjo
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Bandarjo",
                "alamat": "Jl. DI Panjaitan, Tarubudaya, Bandarjo, Kec. Ungaran Timur, 50516",
                "kelurahan": "Bandarjo",
                "kecamatan": "Ungaran Timur",
                "kapasitas": "4 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41415935939476,
                -7.1124286733610695
                ]
            }
        },

        /// Kel. Susukan
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Susukan",
                "alamat": "Jl. Gatotkaca, Ngemplak, Susukan, Kec. Ungaran Timur, 50516",
                "kelurahan": "Susukan",
                "kecamatan": "Ungaran Timur",
                "kapasitas": "12 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.4228614877783,
                -7.126910470213697
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Perum Kutilang",
                "alamat": "Jl. Kutilang Raya, Mojo, Susukan, Kec. Ungaran Timur, 50516",
                "kelurahan": "Susukan",
                "kecamatan": "Ungaran Timur",
                "kapasitas": "3 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41721772807628,
                -7.124886695122423
                ]
            }
        },

        /// Kel. Gedanganak
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Pasar Gedang Asri A",
                "alamat": "Jl. Kalimantan Raya, Watububan, Gedanganak, Kec. Ungaran Timur, 50519",
                "kelurahan": "Gedanganak",
                "kecamatan": "Ungaran Timur",
                "kapasitas": "8 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.42187036548076,
                -7.144795929615733
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Perum Gedang Asri B",
                "alamat": "Jl. Bintan Utara, Watububan, Gedanganak, Kec. Ungaran Timur, 50519",
                "kelurahan": "Gedanganak",
                "kecamatan": "Ungaran Timur",
                "kapasitas": "6 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41850757404961,
                -7.145982599591684
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Gedanganak Lapangan",
                "alamat": "Jl. Mentawai, Watububan, Gedanganak, Kec. Ungaran Timur, 50519",
                "kelurahan": "Gedanganak",
                "kecamatan": "Ungaran Timur",
                "kapasitas": "6 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41940478324423,
                -7.143165493528168
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Perumda",
                "alamat": "Jl. Villa Asri Raya, Watububan, Gedanganak, Kec. Ungaran Timur, 50519",
                "kelurahan": "Gedanganak",
                "kecamatan": "Ungaran Timur",
                "kapasitas": "12 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41770562252633,
                -7.141301039089696
                ]
            }
        },

        /// Kel. Leyangan
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Perum Leyangan Baru",
                "alamat": "Jl. Bukit Leyangan Damai, Gn. Pabonangan, Leyangan, Kec. Ungaran Timur, 50519",
                "kelurahan": "Leyangan",
                "kecamatan": "Ungaran Timur",
                "kapasitas": "4 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.43799047407731,
                -7.146846510482281
                ]
            }
        },

        /// Kel. Beji
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Perum Korpri",
                "alamat": "Jl. Tabing III, Beji, Kec. Ungaran Timur, 50519",
                "kelurahan": "Beji",
                "kecamatan": "Ungaran Timur",
                "kapasitas": "6 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.4228966819512,
                -7.155376150971502
                ]
            }
        },

    /// Kec. Ungaran Barat
        /// Kel. Lerep
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Perum Sapen",
                "alamat": "Jl. Sapen, Mapagan, Lerep, Kec. Ungaran Barat, 50517",
                "kelurahan": "Lerep",
                "kecamatan": "Ungaran Barat",
                "kapasitas": "6 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.4004117201056,
                -7.114510769846389
                ]
            }
        }
    ]
};

var layerGroup = L.geoJSON(data, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<h5 class="text-center">'+feature.properties.name+'</h5><p><strong>Alamat</strong>&ensp;&emsp;&thinsp;: '+feature.properties.alamat+'</p><p><strong>Kapasitas</strong>&nbsp;: '+feature.properties.kapasitas+'</p>');
    }
}).addTo(mymap);