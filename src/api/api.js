import hotelStub from './stubs/hotel.stub.js';
import HotelSection from './sections/hotel.section.js';

export default class Api {
  static Hotel = new HotelSection(hotelStub);
}
