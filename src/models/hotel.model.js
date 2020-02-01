export default class Hotel {
  id = 0;
  continent = '';
  country = '';
  city = '';
  name = '';
  price = 0;
  rooms = null;
  img = '';
  buildingImg = '';
  wifi = '';
  description = '';

  static fromJSON(params) {
    const newHotel = new Hotel();
    newHotel.id = params.id;
    newHotel.continent = params.continent;
    newHotel.country = params.country;
    newHotel.city = params.city;
    newHotel.name = params.name;
    newHotel.price = params.price;
    newHotel.rooms = params.rooms;
    newHotel.img = params.img;
    newHotel.buildingImg = params.buildingImg;
    newHotel.wifi = params.wifi;
    newHotel.description = params.description;
    return newHotel;
  }
}
