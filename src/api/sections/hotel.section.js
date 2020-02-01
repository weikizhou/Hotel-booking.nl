 import Hotel from '@/models/hotel.model';

 export default class HotelSection {
   http = null;

   constructor(http) {
     this.http = http;
   }
   fetchAll() {
     return this.http.get('hotels')
       .then(response => response.data.map(item => Hotel.fromJSON(item)));
   }
 }
