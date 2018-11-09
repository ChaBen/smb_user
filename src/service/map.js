class Map {
  constructor(obj) {
    this.map = new daum.maps.Map(document.getElementById('map'), {
      center: new daum.maps.LatLng(37.5244989249, 127.0414631574),
      level: 3
    })
    this.marker = new daum.maps.Marker({
      position: new daum.maps.LatLng(37.5244989249, 127.0414631574)
    })
    this.marker.setMap(this.map)
  }
}

export default Map
