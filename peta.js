// let checkboxStates;

var mymap = L.map('mapid').setView([-7.132642917693282, 110.40581249142896], 15);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=1jJMmdef3kGZB8cQE1jF', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap)

/*

var amarker = new L.marker([-7.131926301726001, 110.4120384156704]);
var bmarker = new L.marker([-7.1124286733610695, 110.41415935939476]);
var cmarker = new L.marker([-7.126910470213697, 110.4228614877783]);
var dmarker = new L.marker([-7.133995437083056, 110.40829451149553]);
var marker = new L.marker([-7.114510769846389, 110.4004117201056]);
var marker = new L.marker([-7.144795929615733, 110.42187036548076]);
var marker = new L.marker([-7.145982599591684, 110.41850757404961]);
var marker = new L.marker([-7.143165493528168, 110.41940478324423]);
var marker = new L.marker([-7.141301039089696, 110.41770562252633]);
var marker = new L.marker([-7.1307361524319495, 110.41715544213956]);
var marker = new L.marker([-7.146846510482281, 110.43799047407731]);
var marker = new L.marker([-7.155376150971502, 110.4228966819512]);
var marker = new L.marker([-7.124886695122423, 110.41721772807628]);

*/

var data = {
    "type": "FeatureCollection",
    "features": [

    /// Kec. Ungaran Timur
        /// Sidomulyo
        {
            "type": "Feature",
            "properties": {
                "name": "TPS SMP 2 Ungaran",
                "alamat": "Jl. Letjend. Suprapto, Sidomulyo, Kec. Ungaran Timur 50514",
                "kelurahan": "sidomulyo",
                "kecamatan": "ungtim",
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
                "kelurahan": "sidomulyo",
                "kecamatan": "ungtim",
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
                "name": "TPS Perum Sidosari Town House",
                "alamat": "Jl. MT Haryono, Kalipasir, Sidomulyo, Kec. Ungaran Timur, 50514",
                "kelurahan": "sidomulyo",
                "kecamatan": "ungtim",
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
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Samsat",
                "alamat": "Jl. MT Haryono, Sidosari, Sidomulyo, Kec. Ungaran Timur, 50514",
                "kelurahan": "sidomulyo",
                "kecamatan": "ungtim",
                "kapasitas": "3 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41381167345129,
                -7.1295223015346565
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Rumah Dinas Bupati",
                "alamat": "Jl. Ahmad Yani, Sidomulyo, Kec. Ungaran Timur, 50514",
                "kelurahan": "sidomulyo",
                "kecamatan": "ungtim",
                "kapasitas": "3 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.40954161335947,
                -7.135122383745156
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS SD Sidomulyo",
                "alamat": "Jl. Letjend Suprapto, Sidomulyo, Kec. Ungaran Timur, 50514",
                "kelurahan": "sidomulyo",
                "kecamatan": "ungtim",
                "kapasitas": "3 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41051067971127,
                -7.1362315782592125
                ]
            }
        },

        /// Bandarjo
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Bandarjo",
                "alamat": "Jl. DI Panjaitan, Tarubudaya, Bandarjo, Kec. Ungaran Timur, 50516",
                "kelurahan": "bandarjo",
                "kecamatan": "ungtim",
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
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Perum Bandarjo 2",
                "alamat": "Jl. DI Panjaitan, Tarubudaya, Bandarjo, Kec. Ungaran Timur, 50516",
                "kelurahan": "bandarjo",
                "kecamatan": "ungtim",
                "kapasitas": "4 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41471092924475,
                -7.112501509362824
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Telkom",
                "alamat": "Jl. Gatot Subroto, Banaran Barat, Bandarjo, Kec. Ungaran Timur, 50517",
                "kelurahan": "bandarjo",
                "kecamatan": "ungtim",
                "kapasitas": "2 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.40602061025751,
                -7.125649294264001
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Disnakan",
                "alamat": "Jl. Tarubudaya, Tarubudaya, Bandarjo, Kec. Ungaran Timur, 50517",
                "kelurahan": "bandarjo",
                "kecamatan": "ungtim",
                "kapasitas": "4 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41434856036553,
                -7.110413736641038
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Distanbunhut",
                "alamat": "Jl. Gatot Subroto, Cirebonan, Bandarjo, Kec. Ungaran Timur, 50517",
                "kelurahan": "bandarjo",
                "kecamatan": "ungtim",
                "kapasitas": "4 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.40891364423153,
                -7.12153339143483
                ]
            }
        },

        /// Susukan
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Susukan",
                "alamat": "Jl. Gatotkaca, Ngemplak, Susukan, Kec. Ungaran Timur, 50516",
                "kelurahan": "susukan",
                "kecamatan": "ungtim",
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
                "kelurahan": "susukan",
                "kecamatan": "ungtim",
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

        /// Gedanganak
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Pasar Gedang Asri A",
                "alamat": "Jl. Kalimantan Raya, Watububan, Gedanganak, Kec. Ungaran Timur, 50519",
                "kelurahan": "gedanganak",
                "kecamatan": "ungtim",
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
                "kelurahan": "gedanganak",
                "kecamatan": "ungtim",
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
                "kelurahan": "gedanganak",
                "kecamatan": "ungtim",
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
                "kelurahan": "gedanganak",
                "kecamatan": "ungtim",
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
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Hotel Ungaran Cantik",
                "alamat": "Jl. Diponegoro, Mijen, Gedanganak, Kec. Ungaran Timur, 50512",
                "kelurahan": "gedanganak",
                "kecamatan": "ungtim",
                "kapasitas": "3 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.40868295870466,
                -7.149439024316723
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Jatisari",
                "alamat": "Jl. Tohjoyo I, Mijen, Gedanganak, Kec. Ungaran Timur, 50519",
                "kelurahan": "gedanganak",
                "kecamatan": "ungtim",
                "kapasitas": "8 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41142532385925,
                -7.155553692680701
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Jatisari 2",
                "alamat": "Jl. Karimunjawa, Kali-tengah, Gedanganak, Kec. Ungaran Timur, 50519",
                "kelurahan": "gedanganak",
                "kecamatan": "ungtim",
                "kapasitas": "6 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41789707293644,
                -7.153993890279469
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Kel. Gedanganak",
                "alamat": "Jl. Bintan Sel., Gedanganak, Kec. Ungaran Timur, 50519",
                "kelurahan": "gedanganak",
                "kecamatan": "ungtim",
                "kapasitas": "8 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.42133795046392,
                -7.150664176236563
                ]
            }
        },

        /// Leyangan
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Perum Leyangan Baru",
                "alamat": "Jl. Bukit Leyangan Damai, Gn. Pabonangan, Leyangan, Kec. Ungaran Timur, 50519",
                "kelurahan": "leyangan",
                "kecamatan": "ungtim",
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

        /// Kalongan
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Desa Kalongan",
                "alamat": "Jl. Mendiro, Mendiro, Kalongan, Kec. Ungaran Timur, 50519",
                "kelurahan": "kalongan",
                "kecamatan": "ungtim",
                "kapasitas": "8 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.45308099758442,
                -7.148268433550463
                ]
            }
        },

        /// Beji
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Perum Korpri",
                "alamat": "Jl. Tabing III, Beji, Kec. Ungaran Timur, 50519",
                "kelurahan": "beji",
                "kecamatan": "ungtim",
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
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Beji",
                "alamat": "Jl. Raya Merdeka, Beji, Kec. Ungaran Timur, 50519",
                "kelurahan": "beji",
                "kecamatan": "ungtim",
                "kapasitas": "8 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.42085442401451,
                -7.158733081304446
                ]
            }
        },

        /// Kuncen
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Perum Cemara",
                "alamat": "Jl. Kutilang Raya, Kuncen, Kec. Ungaran Timur, 50517",
                "kelurahan": "kuncen",
                "kecamatan": "ungtim",
                "kapasitas": "2 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41014889975726,
                -7.125767484288361
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Panti Jompo",
                "alamat": "Jl. Kutilang Raya, Kuncen, Kec. Ungaran Timur, 50517",
                "kelurahan": "kuncen",
                "kecamatan": "ungtim",
                "kapasitas": "2 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41183124599777,
                -7.125605517969172
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS PDAM",
                "alamat": "Jl. MT. Haryono, Kuncen, Kec. Ungaran Timur, 50511",
                "kelurahan": "kuncen",
                "kecamatan": "ungtim",
                "kapasitas": "3 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41183124599777,
                -7.125605517969172
                ]
            }
        },

        /// Kalirejo
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Kalirejo",
                "alamat": "Jl. Kol Sugiono, Kalipasir, Kalirejo, Kec. Ungaran Timur, 50515",
                "kelurahan": "kalirejo",
                "kecamatan": "ungtim",
                "kapasitas": "4 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41943021270565,
                -7.1320247110195405
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS RM Yogi",
                "alamat": "Jl. MT. Haryono, Kalipasir, Kalirejo, Kec. Ungaran Timur, 50515",
                "kelurahan": "kalirejo",
                "kecamatan": "ungtim",
                "kapasitas": "3 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41928505268018,
                -7.130490572497559
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Alun-Alun Kalirejo",
                "alamat": "Jl. Sukun, Kalipasir, Kalirejo, Kec. Ungaran Timur, 50515",
                "kelurahan": "kalirejo",
                "kecamatan": "ungtim",
                "kapasitas": "6 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.42053649071731,
                -7.133321143411977
                ]
            }
        },

        /// Dliwang
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Sebantengan",
                "alamat": "Jl. Mayjen Sutoyo, Dliwang, Kec. Ungaran Timur, 50514",
                "kelurahan": "dliwang",
                "kecamatan": "ungtim",
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
                "name": "TPS SD Sudirman",
                "alamat": "Jl. MT. Haryono, Dliwang, Kec. Ungaran Timur, 50511",
                "kelurahan": "dliwang",
                "kecamatan": "ungtim",
                "kapasitas": "3 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.4064299828326,
                -7.129088076185375
                ]
            }
        },


        /// Genuk
        {
            "type": "Feature",
            "properties": {
                "name": "TPS PKK",
                "alamat": "Jl. Letjend Suprapto, Genuk, Kec. Ungaran Timur, 50512",
                "kelurahan": "genuk",
                "kecamatan": "ungtim",
                "kapasitas": "4 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.40812473354326,
                -7.137027542005703
                ]
            }
        },

        /// Langensari
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Pasar Babadan",
                "alamat": "Jl. Jaya Baya, Langensari Barat, Langensari, Kec. Ungaran Timur, 50518",
                "kelurahan": "langensari",
                "kecamatan": "ungtim",
                "kapasitas": "8 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41390926948482,
                -7.1634276799695655
                ]
            }
        },
        

    /// Kec. Ungaran Barat
        /// Bandarjo
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Perum Mapagan",
                "alamat": "Jl. Patimura, Suwaktu, Bandarjo, Kec. Ungaran Barat, 50511",
                "kelurahan": "bandarjo",
                "kecamatan": "ungbar",
                "kapasitas": "6 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.40090347772161,
                -7.11565049438569
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS SMP 3 Ungaran",
                "alamat": "Jl. Patimura, Suwaktu, Bandarjo, Kec. Ungaran Barat, 50511",
                "kelurahan": "bandarjo",
                "kecamatan": "ungbar",
                "kapasitas": "4 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.40132726673923,
                -7.115929957154166
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS DPU",
                "alamat": "Jl. Kisarino Mangunpranoto, Suwaktu, Bandarjo, Kec. Ungaran Barat, 50517",
                "kelurahan": "bandarjo",
                "kecamatan": "ungbar",
                "kapasitas": "4 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.40598927059085,
                -7.118416993801177
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Taman Batas Kora",
                "alamat": "Jl. Kisarino Mangunpranoto, Suwaktu, Bandarjo, Kec. Ungaran Barat, 50517",
                "kelurahan": "bandarjo",
                "kecamatan": "ungbar",
                "kapasitas": "8 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41202315748184,
                -7.1102367926491565
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Pasar Bandarjo",
                "alamat": "Banaran Barat, Bandarjo, Kec. Ungaran Barat, 50517",
                "kelurahan": "bandarjo",
                "kecamatan": "ungbar",
                "kapasitas": "12 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.40776933231055,
                -7.12398524257052
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Kuwera",
                "alamat": "Jl. Semeru, Cirebonan, Bandarjo, Kec. Ungaran Barat, 50517",
                "kelurahan": "bandarjo",
                "kecamatan": "ungbar",
                "kapasitas": "3 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41053592494076,
                -7.11161923549316
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Merapi 1",
                "alamat": "Jl. Semeru, Cirebonan, Bandarjo, Kec. Ungaran Barat, 50517",
                "kelurahan": "bandarjo",
                "kecamatan": "ungbar",
                "kapasitas": "4 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.4114568179455,
                -7.111950308814065
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Merapi 2",
                "alamat": "Jl. Merapi, Cirebonan, Bandarjo, Kec. Ungaran Barat, 50517",
                "kelurahan": "bandarjo",
                "kecamatan": "ungbar",
                "kapasitas": "4 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.409812897984,
                -7.113145663419583
                ]
            }
        },

        /// Lerep
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Perum Sapen",
                "alamat": "Jl. Sapen, Mapagan, Lerep, Kec. Ungaran Barat, 50517",
                "kelurahan": "lerep",
                "kecamatan": "ungbar",
                "kapasitas": "6 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.4004117201056,
                -7.114510769846389
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Sariharjo",
                "alamat": "Jl. Patimura, Mapagan, Lerep, Kec. Ungaran Barat, 50519",
                "kelurahan": "lerep",
                "kecamatan": "ungbar",
                "kapasitas": "6 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.40343401150038,
                -7.117960518206084
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Lerep",
                "alamat": "Jl. Srikandi, Lerep, Kec. Ungaran Barat, 50519",
                "kelurahan": "lerep",
                "kecamatan": "ungbar",
                "kapasitas": "8 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.39751705234683,
                -7.1276024230866435
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Lerep 2",
                "alamat": "Indrakila, Lerep, Kec. Ungaran Barat, 50519",
                "kelurahan": "lerep",
                "kecamatan": "ungbar",
                "kapasitas": "8 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.38012068465109,
                -7.136949698411041
                ]
            }
        },

        // Dliwang 
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Dliwang",
                "alamat": "Jl. Kartini, Sembungan, Kec. Ungaran Barat, 50511",
                "kelurahan": "dliwang",
                "kecamatan": "ungbar",
                "kapasitas": "6 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.40273412010579,
                -7.132912962416154
                ]
            }
        },

        /// Nyantnyono
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Perum Perikanan Blanten",
                "alamat": "Jl. Yos Sudarso, Brangkah, Nyatnyono, Kec. Ungaran Barat, 50551",
                "kelurahan": "nyatnyono",
                "kecamatan": "ungbar",
                "kapasitas": "6 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.39624719430259,
                -7.1356753144674325
                ]
            }
        },

        /// Sembungan
        {
            "type": "Feature",
            "properties": {
                "name": "TPS SETDA",
                "alamat": "Jl. Kartini, Sembungan, Kec. Ungaran Barat, 50511",
                "kelurahan": "sembungan",
                "kecamatan": "ungbar",
                "kapasitas": "6 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.40335691938989,
                -7.1289725883291535
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS SMA 1 Ungaran",
                "alamat": "Jl. Rindang Asih, Sembungan, Kec. Ungaran Barat, 50511",
                "kelurahan": "sembungan",
                "kecamatan": "ungbar",
                "kapasitas": "4 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.40290302927934,
                -7.1342077874695216
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS SD Mardirahayu",
                "alamat": "Jl. Diponegoro, Sembungan, Kec. Ungaran Barat, 50511",
                "kelurahan": "sembungan",
                "kecamatan": "ungbar",
                "kapasitas": "6 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.40367358534694,
                -7.132242037617755
                ]
            }
        },

        // Genuk
        {
            "type": "Feature",
            "properties": {
                "name": "TPS SMA 1 Ungaran",
                "alamat": "Jl. Diponegoro, Genuk, Kec. Ungaran Barat, 50512",
                "kelurahan": "genuk",
                "kecamatan": "ungbar",
                "kapasitas": "4 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.40537858759392,
                -7.139562210146321
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Nglaras Roso",
                "alamat": "Jl. Diponegoro, Genuk, Kec. Ungaran Barat, 50512",
                "kelurahan": "genuk",
                "kecamatan": "ungbar",
                "kapasitas": "2 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.40538566600429,
                -7.13955740923489
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS DPRD",
                "alamat": "Jl. Slamet Riyadi, Genuk, Kec. Ungaran Barat, 50512",
                "kelurahan": "genuk",
                "kecamatan": "ungbar",
                "kapasitas": "4 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.40377457623133,
                -7.13836789942932
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS RSUD Ungaran",
                "alamat": "Jl. Wijayakusuma, Genuk, Kec. Ungaran Barat, 50514",
                "kelurahan": "genuk",
                "kecamatan": "ungbar",
                "kapasitas": "8 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.40603130913604,
                -7.138465952282652
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Kelurahan Genuk",
                "alamat": "Jl. Kyai Mojo Raya, Blanten, Genuk, Kec. Ungaran Barat, 50551",
                "kelurahan": "genuk",
                "kecamatan": "ungbar",
                "kapasitas": "8 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.39741438317365,
                -7.138273680433662
                ]
            }
        },

        /// Krajan
        {
            "type": "Feature",
            "properties": {
                "name": "TPS RumDin WakBup",
                "alamat": "Jl. Hos Cokroaminoto, Krajan, Kec. Ungaran Barat, 50511",
                "kelurahan": "krajan",
                "kecamatan": "ungbar",
                "kapasitas": "4 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.40377022953521,
                -7.121911747797094
                ]
            }
        },

        /// Langensari
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Langensari",
                "alamat": "Jl. Erlangga, Kaliaang Dua, Langesari, Kec. Ungaran Barat, 50518",
                "kelurahan": "langensari",
                "kecamatan": "ungbar",
                "kapasitas": "12 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41241350470386,
                -7.165227463741444
                ]
            }
        },

        /// Wujil
        {
            "type": "Feature",
            "properties": {
                "name": "TPS RM Indah Sari",
                "alamat": "Jl. Soekarno Hatta, Settigen, Wujil, Kec. Ungaran Barat, 50518",
                "kelurahan": "wujil",
                "kecamatan": "ungbar",
                "kapasitas": "4 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.4157716101466,
                -7.172852743059712
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "TPS Kebon Raja",
                "alamat": "Jl. Soekarno Hatta, Settigen, Wujil, Kec. Ungaran Barat, 50518",
                "kelurahan": "wujil",
                "kecamatan": "ungbar",
                "kapasitas": "4 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.41596644345925,
                -7.172659927233027
                ]
            }
        },

        /// Candirejo
        {
            "type": "Feature",
            "properties": {
                "name": "TPS AKPER",
                "alamat": "Jl. Gedongsongo, Siroto, Candirejo, Kec. Ungaran Barat, 50512",
                "kelurahan": "candirejo",
                "kecamatan": "ungbar",
                "kapasitas": "4 Meter Kubik"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                110.40677073492483,
                -7.154000877836924
                ]
            }
        },
    ]
};

L.geoJSON(data, {
    onEachFeature: function (feature, layer) {
            layer.bindPopup('<h5 class="text-center">'+feature.properties.name+'</h5><p><strong>Alamat</strong>&ensp;&emsp;&thinsp;: '+feature.properties.alamat+'</p><p><strong>Kapasitas</strong>&nbsp;: '+feature.properties.kapasitas+'</p>');
    }
}).addTo(mymap);

/*

const geojsonLayer = L.geoJSON(null,{
	filter: (feature) => {
        const isKelurahanChecked = checkboxStates.kelurahans.includes(feature.properties.kelurahan)
        const isKecamatanChecked = checkboxStates.kecamatans.includes(feature.properties.kecamatan)
        return isKelurahanChecked || isKecamatanChecked //only true if both are true
    }
}).addTo(mymap)

function updateCheckboxStates() {
	checkboxStates = {
        kelurahans: [],
        kecamatans: []
    }
    for (let input of document.querySelectorAll('input')) {
        if(input.checked) {
            switch (input.className) {
                case 'kelurahan': checkboxStates.kelurahans.push(input.value); break
                case 'kecamatan': checkboxStates.kecamatans.push(input.value); break
            }
        }
    }
}

for (let input of document.querySelectorAll('input')) {
    //Listen to 'change' event of all inputs
    input.onchange = (e) => {
        geojsonLayer.clearLayers()
        updateCheckboxStates()
        geojsonLayer.addData(data)
    }
}

updateCheckboxStates()
geojsonLayer.addData(data)

*/