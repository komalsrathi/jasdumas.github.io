var invocation = new XMLHttpRequest();
var dataUrl = 'https://github.com/jasdumas/jasdumas.github.io/blob/master/data/marker-points.csv';
   
function callOtherDomain() {
  if(invocation) {    
    invocation.open('GET', dataUrl, true);
    invocation.onreadystatechange = handler;
    invocation.send(); 
  }
}


//var dataUrl = 'data/marker-points.csv';
var maxZoom = 15;
var fieldSeparator = ',';
var baseUrl = 'http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg';
var baseAttribution = 'Data, imagery and map information provided by <a href="http://open.mapquest.co.uk" target="_blank">MapQuest</a>, <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> and contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>';
var subdomains = '1234';
var clusterOptions = {showCoverageOnHover: false, maxClusterRadius: 50};
var labelColumn = "Name";
var opacity = 1.0;
