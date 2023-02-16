//main map rendering
const map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.TileJSON({
                url: 'https://api.maptiler.com/maps/basic-v2/tiles.json?key=CHqfhztco7PfT748yf5U',
                tileSize: 512
            })
        })
    ],
    target: 'map',
    view: new ol.View({
        // pointer center
        center: ol.proj.fromLonLat(data),
        zoom: 13
    })
});

// rendering polygons
const catTeritory = [];

let layerURI = document.querySelector('.data').dataset.test;
let names = document.querySelector('.data-name').dataset.test;

layerURL = JSON.parse(layerURI);
names = JSON.parse(names);

for(let i=0;i< 7;i++){

    const river = new ol.layer.Vector({
    source : new ol.source.Vector({
        url: layerURL[i],
        format : new ol.format.GeoJSON()
    }),
    style : new ol.style.Style({
        fill : new ol.style.Fill({
            color : 'rgba(255, 255, 255, 0.2)'
        }),
        stroke : new ol.style.Stroke({
            color : '#3B71CA',
            width : 2
        })
    })
    });
    map.addLayer(river);
    catTeritory.push(river);
} 

let mark = document.querySelector('.data-marker').dataset.test;
mark = JSON.parse(mark);
let one = JSON.parse(mark[0]);

// rendering markers
for(let i=0;i<7;i++){
    let temp = JSON.parse(mark[i])
const marker = new ol.layer.Vector({
    source : new ol.source.Vector({
        features : [
            new ol.Feature({
                geometry : new ol.geom.Point(ol.proj.fromLonLat(temp))
            })
        ]
    }),
    style : new ol.style.Style({
        image : new ol.style.Icon({
            src : 'https://docs.maptiler.com/openlayers/default-marker/marker-icon.png',
            anchor : [0.5, 1]
        })
    })
});
map.addLayer(marker);
}

// event log when clicking a marker
map.on('click', function(evt){
    map.forEachFeatureAtPixel(evt.pixel, function(feature, layer){
        let cord = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
        console.log(cord[0], cord[1])
        let diffa = Number.MAX_VALUE;
        let diffb = Number.MAX_VALUE;
        let diff = 0;
        // finding the closest marker
        for(let i=0;i<7;i++){
            let temp = JSON.parse(mark[i])
            console.log(temp)
            let diff1 = Math.abs(cord[0] - temp[0]);
            let diff2 = Math.abs(cord[1] - temp[1]);
            console.log(diff1,diff2)
            if(diff1 < diffa && diff2 < diffb){
                diffa = diff1;
                diffb = diff2;
                diff = i;
            }
        }
        // redirecting to the page of the clicked marker
        let url = window.location.href;
        let url2 = url.split('/');
        let len = url2.length;
        let neww = url2.slice(0,len-1);
        neww.push(names[diff])
        neww = neww.join('/');
        window.open(neww, '_self');
    })
});