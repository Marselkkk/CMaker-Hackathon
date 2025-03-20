export function map() {
    if (document.getElementById("map")) {
        ymaps.ready(init);
        function init() {
            let coordString = document.getElementById('map').dataset.coord,
                coordArray = coordString.split(',').map(Number);

            let center = coordArray;
            let myMap = new ymaps.Map("map", {
                center: center,
                zoom: 17,
            });

            let placemark = new ymaps.Placemark(center, {}, {
                preset: 'islands#redIcon'
            });

            myMap.events.add('click', function() {
                myMap.balloon.close();
            });

            myMap.geoObjects.add(placemark);
            myMap.controls.remove('geolocationControl');
            myMap.controls.remove('searchControl');
            myMap.controls.remove('trafficControl');
            myMap.controls.remove('typeSelector');
            myMap.controls.remove('fullscreenControl');
            myMap.controls.remove('rulerControl');
        }
    }
}