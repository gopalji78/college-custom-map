function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 25.62053004104457, lng: 85.17253588304024},
    zoom: 14,
    mapId: 'ecc6ef3ca4958083',
  });


  const markers = [[
    //GANGA
    "GANGA: CASTLE",
    25.620993964446633, 85.17388447213025,
    "images/fort.svg",
    50,
    50
  ],
  [
    //OAT
    "MARIOS: DANCE",
    25.61965595011137, 85.17313374497421,
    "images/luigi.svg",
    50,
    50
  ],
  [
    //CV_RAMAN_HALL
    "MARIOS: THEATER",
    25.620113432246058, 85.17398756934796,
    "images/luigi.svg",
    50,
    50
  ],
  [
    // GROUND
    "MARIOS: PLAYGROUND",
    25.620040684911093, 85.17243530691071,
    "images/mushroom.svg",
    50,
    50
  ],
  [
    // NESCAFE
    "MARIOS: KITCHEN",
    25.62072950632488, 85.17152310138856,
    "images/mushroom.svg",
    50,
    50
  ],
  [
    //KOSHI
    "KOSHI: CASTLE",
    25.620978148762184, 85.17465624767149,
    "images/fort.svg",
    50,
    50
  ],
  [
    //BAGMATI
    "BAGMATI: CASTLE",
    25.62033603020312, 85.17451241674064,
    "images/fort.svg",
    50,
    50
  ],
  [
    // CIVIL
    "COUNCIL",
    25.621228036331026, 85.17207781571504,
    "images/mushroom.svg",
    50,
    50
  ]
];
  for(let i = 0; i< markers.length; i++){
    const currentMarker = markers[i];
    const marker = new google.maps.Marker({
      position: {lat: currentMarker[1], lng: currentMarker[2] },
      map,
      title: currentMarker[0],
      icon: {
        url: currentMarker[3],
        scaledSize: new google.maps.Size(currentMarker[4],currentMarker[5]),
      },
      animation: google.maps.Animation.DROP
    });
  
    const infoWindow = new google.maps.InfoWindow({
      content: currentMarker[0],
    });
    marker.addListener("click", () => {
      infoWindow.open(map, marker);
      });
  }
  
}

//37.7648515934807,