var marker= null;
var map = null;

	function initMap() {

		map = new ymaps.Map("map", {
		center: [53.916085, 27.587990],
		zoom: 17
		});
		marker = new ymaps.Placemark([53.916085, 27.587990], {
  		hintContent: "Target: 53.916085, 27.587990",
  		balloonContent: 'Это наша организация'
  		});
		map.geoObjects.add(marker);
		
	} 

ymaps.ready(initMap); 


		