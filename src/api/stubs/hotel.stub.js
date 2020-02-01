const hotelStub = {
  get: (url, data) => {
    const stub = {
      data: [{
          id: 1,
          continent: 'Europa',
          country: 'Nederland',
          city: 'Den Haag',
          name: 'Babylon hotel',
          price: 141,
          rooms: [{
              roomType: 'Standaard kamer',
              bedType: '2 eenpersoonsbedden',
              maxPerson: 2,
              roomImg: require('@/assets/hotel-rooms/babylon-hotel-standard.jpg'),
              roomPrice: 141,
              additionalCosts: 18.93,
              touristTax: 4.45,
              personPerNight: 8.94,
              serviceFee: 10.00,
            },
            {
              roomType: 'Luxe kamer',
              bedType: '1 tweepersoonsbed',
              maxPerson: 2,
              roomImg: require('@/assets/hotel-rooms/babylon-hotel-luxe.jpg'),
              roomPrice: 167,
              additionalCosts: 18.93,
              touristTax: 4.45,
              personPerNight: 12.95,
              serviceFee: 10.00,
            },
          ],
          img: require('@/assets/featured-hotels-images/babylon-hotel-den-haag.jpg'),
          buildingImg: require(
            '@/assets/hotel-building-images/babylon-hotel-building-img.jpg'),
          wifi: true,
          description:
            /*3 paragraph*/
            [
              'Het hotel ligt in het hart van Den Haag, op loopafstand van het stadscentrum en alle regeringsgebouwen en ministeries. Het ligt direct naast het centraal station (bussen, trams en treinen), zodat de gasten binnen enkele minuten alle bestemmingen in Den Haag en omgeving kunnen bereiken. De gasten vinden vele restaurants, uitgaansgelegenheden en entertainmentopties binnen een straal van 500 meter van het hotel.',
              'De kamers bieden airconditioning, centrale verwarming en een badkamer. De met vloerbedekking uitgeruste kamers beschikken over een tweepersoonsbed. Bovendien zijn een kluisje en een minibar beschikbaar. Faciliteiten als een koelkastje en een thee-/koffiezetapparaat veraangenamen het verblijf. Een strijkset is voor extra comfort van de reizigers beschikbaar. Voor vakantiecomfort zorgen een internettoegang, een telefoon, een televisie, een radio en wifi. Een douche en een bad behoren tot de inrichting van de badkamers. Verder is een haardroger aanwezig. Het verblijf biedt niet-rokenkamers.',
              'Het hotel is gebouwd in 1973. De gasten zullen zich in een van de 143 kamers op hun gemak voelen. Er is een lift voorhanden waarmee de meeste etages bereikbaar zijn. Tot een van de faciliteiten hoort een kluis. Wifi in de gemeenschappelijke ruimtes maakt het de reizigers mogelijk om in contact te blijven met vrienden of familieleden. De volgende gastronomische voorzieningen zijn beschikbaar in het hotel: een restaurant, een eetzaal en een bar. Er zijn ook winkels. De gasten die met de auto komen, kunnen parkeren in een garage (tegen betaling) of op de parkeerplaats. Ook vertaalservice, roomservice en een wasservice worden aangeboden. Sportieve gasten, die het omliggende landschap op de fiets willen verkennen, zullen de fietsverhuur op prijs stellen.',
            ],
        },
        {
          id: 2,
          continent: 'Europa',
          country: 'Nederland',
          city: 'Amsterdam',
          name: 'Renaissance Amsterdam Hotel',
          price: 265,
          rooms: [{
              roomType: 'Standaard kamer',
              bedType: '2 eenpersoonsbedden',
              maxPerson: 2,
              roomImg: require('@/assets/hotel-rooms/renaissance-hotel-standard.jpg'),
              roomPrice: 265,
              additionalCosts: 23.95,
              touristTax: 5.13,
              personPerNight: 8.75,
              serviceFee: 11.00,
            },
            {
              roomType: 'Luxe kamer',
              bedType: '2 eenpersoonsbedden, 1 tweepersoonsbed',
              maxPerson: 4,
              roomImg: require('@/assets/hotel-rooms/renaissance-hotel-luxe.jpg'),
              roomPrice: 413,
              additionalCosts: 23.95,
              touristTax: 5.13,
              personPerNight: 12.45,
              serviceFee: 11.00,
            },
          ],
          img: require(
            '@/assets/featured-hotels-images/renaissance-amsterdam-hotel-amsterdam.jpg'),
          buildingImg: require(
            '@/assets/hotel-building-images/renaissance-amsterdam-hotel-building.jpg'),
          wifi: true,
          description:
            /*3 paragraph*/
            [
              'Dit exclusieve cityhotel heeft een goede en centrale ligging. Haltes van het openbaar vervoer liggen op ca. 500 m. van het hotel vandaan en zijn snel en gemakkelijk te voet te bereiken. In de nabije omgeving vindt u veelzijdige mogelijkheden om te winkelen, evenals talrijke bezienswaardigheden, restaurants, diverse bars en diverse andere amusementsmogelijkheden. In de buurt van het hotel bevinden zich verder het Anne Frank Huis, het Koningspaleis en de beroemde diamantfabrieken.',
              'De kamers bieden airconditioning en een badkamer. Bovendien zijn een kluisje, een minibar en een bureau beschikbaar. Ook een koelkast, een koelkastje en een thee-/koffiezetapparaat zijn aanwezig. Een strijkset is voor extra comfort van de reizigers beschikbaar. Kleine extra zoals een internettoegang, een telefoon, een televisie en wifi maken het verblijf nog aangenamer. De badkamers zijn uitgerust met een douche en een bad. Een haardroger en een make-upspiegel zijn voor het gemak van de gasten beschikbaar. Het hotel biedt gezinskamers en niet-rokenkamers.',
              'Het hotel is gebouwd in 1975. Het hotel biedt 402 kamers. Voor de reizigers staan een ontvangsthal en een receptie klaar. Met de lift zijn de verschillende verdiepingen van het verblijf bereikbaar. Wifi in de gemeenschappelijke ruimtes maakt het de gasten mogelijk om in contact te blijven met vrienden of familieleden. Er is een grote keuze aan eetgelegenheden zoals bv. een restaurant, een eetzaal, een koffiehuis en een bar. Het is mogelijk om inkopen te doen in een souvenirwinkel en andere winkels. Tot de verdere voorzieningen van het hotel behoort een krantenkiosk. De gasten die met de auto komen, kunnen parkeren in een garage of op de parkeerplaats. Tot de beschikbare voorzieningen behoren roomservice en een kapper.',
            ],
        },
        {
          id: 3,
          continent: 'Europa',
          country: 'Nederland',
          city: 'Rotterdam',
          name: 'Hilton Rotterdam',
          price: 209,
          rooms: [{
              roomType: 'Standaard kamer',
              bedType: '1 tweepersoonsbed',
              maxPerson: 2,
              roomImg: require('@/assets/hotel-rooms/hilton-rotterdam-standard.jpg'),
              roomPrice: 209,
              additionalCosts: 27.00,
              touristTax: 5.64,
              personPerNight: 18.75,
              serviceFee: 13.56,
            },
            {
              roomType: 'Luxe kamer',
              bedType: '1 eenpersoonsbed, 1 tweepersoonsbedden',
              maxPerson: 3,
              roomImg: require('@/assets/hotel-rooms/hilton-rotterdam-luxe.jpg'),
              roomPrice: 351,
              additionalCosts: 27.00,
              touristTax: 5.64,
              personPerNight: 21.45,
              serviceFee: 13.56,
            },
          ],
          img: require('@/assets/featured-hotels-images/hilton-rotterdam.jpg'),
          buildingImg: require(
            '@/assets/hotel-building-images/hilton-rotterdam-building.jpg'),
          wifi: true,
          description:
            /*3 paragraph*/
            [
              'Het hotel bevindt zich vlakbij het stadscentrum, ongeveer 250 m van het centraal station van Rotterdam. Hierdoor ligt de winkelwijk met zijn talrijke winkel- en amusementsmogelijkheden op slechts een steenworp afstand van het hotel. De transfertijd naar de luchthaven van Rotterdam is met een taxi ongeveer 15 minuten.',
              'De kamers bieden airconditioning, centrale verwarming en een badkamer. Kinderbedjes voor kleine reizigers zijn beschikbaar. Bovendien zijn een kluisje en een minibar beschikbaar. In de kitchenette bevinden zich een koelkastje en een thee-/koffiezetapparaat. Een internettoegang, een telefoon, een televisie en wifi ronden het voorzieningenaanbod af. De badkamers beschikken over een douche, een bad en een bidet. Een van de faciliteiten is ook een haardroger. Het verblijf biedt niet-rokenkamers.',
              'Dit hotel werd gebouwd in 1963. De gasten zullen zich in een van de 252 kamers op hun gemak voelen. Voor de reizigers staan een ontvangsthal en een receptie klaar. Een lift brengt de gasten naar de meeste etages. Faciliteiten als een kluis en een wisselkantoor zorgen voor een comfortabel verblijf. In de gemeenschappelijke ruimtes staat de gasten wifi ter beschikking. Er is een grote keuze aan eetgelegenheden zoals bv. een restaurant en een bar. Er zijn ook winkels. Tot de verdere voorzieningen van het hotel behoort een krantenkiosk. De gasten die met de auto komen, kunnen parkeren in een garage of op de parkeerplaats. Andere service-opties zijn: een oppasservice, roomservice, een wasservice en een kapper.',
            ],
        },
        {
          id: 4,
          continent: 'Azië',
          country: 'Verenigde Arabische Emiraten',
          city: 'Dubai',
          name: 'JW Marriott Marquis Dubai Hotel',
          price: 92,
          rooms: [{
              roomType: 'Standaard kamer',
              bedType: '2 eenpersoonsbedden',
              maxPerson: 2,
              roomImg: require(
                '@/assets/hotel-rooms/js-marriott-marquis-dubai-hotel-standard.jpg'),
              roomPrice: 92,
              additionalCosts: 8.71,
              touristTax: 12.75,
              personPerNight: 18.95,
              serviceFee: 19.00,
            },
            {
              roomType: 'Luxe kamer',
              bedType: '2 tweepersoonsbedden',
              maxPerson: 4,
              roomImg: require(
                '@/assets/hotel-rooms/js-marriott-marquis-dubai-hotel-luxe.jpg'),
              roomPrice: 114,
              additionalCosts: 8.71,
              touristTax: 12.75,
              personPerNight: 25.55,
              serviceFee: 19.00,
            },
          ],
          img: require('@/assets/featured-hotels-images/jw-marriott-marquis-dubai.jpg'),
          buildingImg: require(
            '@/assets/hotel-building-images/jw-marriott-marquis-dubai-hotel-building.jpg'
          ),
          wifi: true,
          description:
            /*2 paragraph*/
            [
              'De kamers bieden airconditioning, een woonkamer en een badkamer. De meeste wooneenheden bieden uitzicht op zee. De met vloerbedekking uitgeruste kamers beschikken over een kingsize bed. Ook babybedjes en extra bedden kunnen beschikbaar worden gesteld. Bovendien zijn een kluisje, een minibar en een bureau beschikbaar. Faciliteiten als een koelkastje en een thee-/koffiezetapparaat veraangenamen het verblijf. Een strijkset is voor extra comfort van de reizigers beschikbaar. Voor vakantiecomfort zorgen een internettoegang, een telefoon, een televisie, een radio, een stereo-installatie, een cd-speler, een dvd-speler en wifi. Tot de pluspunten van de kamers behoren ook pantoffels en dagbladen. De badkamers zijn uitgerust met een douche en een bad. Een haardroger en badjassen zijn voor het gemak van de gasten beschikbaar. Het hotel biedt gezinskamers en niet-rokenkamers.',
              'Het hotel biedt de gasten in totaal 1608 kamers. Voor de reizigers staan een ontvangsthal en een receptie klaar. Alle etages zijn gemakkelijk bereikbaar met de lift of via de trap. Tot een van de faciliteiten hoort een kluis. Via wifi krijgen de gasten in de gemeenschappelijke ruimte toegang tot het internet. De volgende gastronomische voorzieningen zijn beschikbaar in het verblijf: een restaurant, een eetzaal en een bar. De gasten die met de auto komen, kunnen deze op het parkeerterrein van het hotel parkeren. Ook een oppasservice, een medische dienst, roomservice en een wasservice worden aangeboden. Daarnaast wordt er een pendeldienst aangeboden.',
            ],
        },
        {
          id: 5,
          continent: 'Europa',
          country: 'Italië',
          city: 'Turijn',
          name: 'Hotel NH Piazza Carlina',
          price: 138,
          rooms: [{
              roomType: 'Standaard kamer',
              bedType: '1 tweepersoonsbed',
              maxPerson: 2,
              roomImg: require(
                '@/assets/hotel-rooms/hotel-nh-piazza-carlina-standard.jpg'),
              roomPrice: 138,
              additionalCosts: 21.15,
              touristTax: 6.55,
              personPerNight: 13.75,
              serviceFee: 15.55,
            },
            {
              roomType: 'Luxe kamer',
              bedType: '2 tweepersoonsbedden',
              maxPerson: 4,
              roomImg: require('@/assets/hotel-rooms/hotel-nh-piazza-carlina-luxe.jpg'),
              roomPrice: 219,
              additionalCosts: 21.15,
              touristTax: 6.55,
              personPerNight: 17.75,
              serviceFee: 15.55,
            },
          ],
          img: require(
            '@/assets/featured-hotels-images/hotel-nh-piazza-carlina-turijn.jpg'),
          buildingImg: require(
            '@/assets/hotel-building-images/hotel-nh-piazza-carlina-building.jpg'),
          wifi: true,
          description:
            /*2 paragraph*/
            [
              'In het hotel staan kamers met airconditioning, een centrale verwarming en een badkamer ter beschikking. Een balkon behoort tot de basisuitrusting van de meeste kamers. Een tweepersoonsbed zorgt voor een aangename nachtrust in de kamers. Extra bedden kunnen worden aangevraagd. Bovendien zijn een kluisje en een minibar beschikbaar. Ook een koelkastje en een thee-/koffiezetapparaat zijn aanwezig. Voor vakantiecomfort zorgen een internettoegang, een telefoon, een televisie en wifi. De badkamers zijn uitgerust met een douche en een bad. Een haardroger en badjassen zijn voor het gemak van de gasten beschikbaar. Het verblijf biedt niet-rokenkamers.',
              'De gasten kunnen kiezen uit 160 kamers. Met de lift zijn de verschillende verdiepingen van het hotel bereikbaar. Tot de voorzieningen behoren een bagagedepot en een kluis. Wifi in de gemeenschappelijke ruimtes maakt het de reizigers mogelijk om in contact te blijven met vrienden of familieleden. De volgende gastronomische voorzieningen zijn beschikbaar in het verblijf: een restaurant, een eetzaal en een bar. Bovendien is er een tuin. De gasten die met de auto komen, kunnen deze op het parkeerterrein van het hotel parkeren. Ook een 24-uurs-beveiligingsdienst, een oppasservice, een transferservice, roomservice en een wasservice worden aangeboden. Sportieve gasten, die het omliggende landschap op de fiets willen verkennen, zullen de fietsverhuur op prijs stellen.',
            ],
        },
        {
          id: 6,
          continent: 'Azië',
          country: 'Indonesië',
          city: 'Denpasar',
          name: 'Aston Denpasar Hotel & Convention Center',
          price: 26,
          rooms: [{
              roomType: 'Standaard kamer',
              bedType: '2 eenpersoonsbedden',
              maxPerson: 2,
              roomImg: require('@/assets/hotel-rooms/aston-denpasar-hotel-standard.jpg'),
              roomPrice: 26,
              additionalCosts: 3.25,
              touristTax: 1.75,
              personPerNight: 5.85,
              serviceFee: 5.67,
            },
            {
              roomType: 'Luxe kamer',
              bedType: '1 eenpersoonsbed, 1 tweepersoonsbed',
              maxPerson: 3,
              roomImg: require('@/assets/hotel-rooms/aston-denpasar-hotel-luxe.jpg'),
              roomPrice: 98,
              additionalCosts: 3.25,
              touristTax: 1.75,
              personPerNight: 11.85,
              serviceFee: 5.67,
            },
          ],
          img: require(
            '@/assets/featured-hotels-images/aston-denpasar-hotel-and-convention-center.jpg'
          ),
          buildingImg: require(
            '@/assets/hotel-building-images/aston-denpasar-hotel-and-convention-center-building.jpg'
          ),
          wifi: true,
          description:
            /*2 paragraph*/
            [
              'De kamers bieden airconditioning, een woonkamer en een badkamer. Een tweepersoonsbed zorgt voor een aangename nachtrust in de kamers. Er zijn gescheiden slaapkamers aanwezig. Bovendien zijn een kluisje, een minibar en een bureau beschikbaar. Ook een koelkastje en een thee-/koffiezetapparaat zijn aanwezig. Een internettoegang, een telefoon, een televisie en wifi ronden het voorzieningenaanbod af. Een douche en een bad behoren tot de inrichting van de badkamers. Een van de faciliteiten is ook badjassen.',
              'De gasten kunnen kiezen uit 215 kamers. In het hotel worden de gasten hartelijk verwelkomd in de ontvangsthal aan de 24-uurs-receptie en 24-uurs-uitcheckservice. Tot een van de faciliteiten hoort een kluis. Via wifi krijgen de gasten in de gemeenschappelijke ruimte toegang tot het internet. De volgende gastronomische voorzieningen zijn beschikbaar in het hotel: een restaurant en een eetzaal. Er zijn ook winkels. De gasten die met de auto komen, kunnen deze op het parkeerterrein van het verblijf parkeren. Ook een oppasservice, een kinderopvang, een transferservice, roomservice en een wasservice worden aangeboden.',
            ],

        },
        {
          id: 7,
          continent: 'Europa',
          country: 'Verenigd Koningkrijk',
          city: 'Londen',
          name: 'Meininger Hotel London Hyde Park',
          price: 78,
          rooms: [{
              roomType: 'Standaard kamer',
              bedType: '2 eenpersoonsbedden',
              maxPerson: 2,
              roomImg: require(
                '@/assets/hotel-rooms/meininger-hotel-london-hyde-park-standard.jpg'),
              roomPrice: 79,
              additionalCosts: 12.17,
              touristTax: 11.95,
              personPerNight: 15.55,
              serviceFee: 6.75,
            },
            {
              roomType: 'Luxe kamer',
              bedType: '1 tweepersoons, 1 stappelbed',
              maxPerson: 4,
              roomImg: require(
                '@/assets/hotel-rooms/meininger-hotel-london-hyde-park-luxe.jpg'),
              roomPrice: 146,
              additionalCosts: 12.17,
              touristTax: 11.95,
              personPerNight: 17.55,
              serviceFee: 6.75,

            },
          ],
          img: require(
            '@/assets/featured-hotels-images/meininger-hotel-london-hyde-park.jpg'),
          buildingImg: require(
            '@/assets/hotel-building-images/meininger-hotel-london-hyde-park-building.jpg'
          ),
          wifi: true,
          description:
            /*2 paragraph*/
            [
              'De kamers bieden airconditioning en een badkamer. Kinderbedjes voor kleine reizigers zijn beschikbaar. Bovendien is er een kluisje. Kleine extra zoals een internettoegang, een telefoon, een televisie en wifi maken het verblijf nog aangenamer. Comfort in de badkamer biedt een douche. Verder is een haardroger aanwezig. Voor gezinnen met kinderen zijn speciale gezinskamers beschikbaar.',
              'Het hotel biedt 47 kamers. Er is een lift voorhanden waarmee de meeste etages bereikbaar zijn. Tot de voorzieningen horen een bagagedepot, een restaurant en een bar. Via wifi krijgen de gasten in de gemeenschappelijke ruimte toegang tot het internet. De gasten die met de auto komen, kunnen deze op het parkeerterrein van het hotel parkeren.',
            ],
        },
        {
          id: 8,
          continent: 'Europa',
          country: 'Italië',
          city: 'Rome',
          name: 'Hassler Roma',
          price: 1408,
          rooms: [{
              roomType: 'Standaard kamer',
              bedType: '1 tweepersoonsbedden',
              maxPerson: 2,
              roomImg: require('@/assets/hotel-rooms/hassler-roma-standard.jpg'),
              roomPrice: 1408,
              additionalCosts: 108.75,
              touristTax: 25.75,
              personPerNight: 57.92,
              serviceFee: 89.95,
            },
            {
              roomType: 'Luxe kamer',
              bedType: '2 tweepersoonsbedden',
              maxPerson: 4,
              roomImg: require('@/assets/hotel-rooms/hassler-roma-luxe.jpg'),
              roomPrice: 2019,
              additionalCosts: 108.75,
              touristTax: 25.75,
              personPerNight: 77.46,
              serviceFee: 89.95,
            },
          ],
          img: require('@/assets/featured-hotels-images/hassler-roma.jpg'),
          buildingImg: require('@/assets/hotel-building-images/hassler-roma-building.jpg'),
          wifi: true,
          description: [
            'Dit beroemde, traditierijke luxe hotel ligt bovenaan de Spaanse trappen, midden in het hart van Rome. Naar de tuinen van de Villa Borghese, Via Veneto, Via Condotti en de elegante boetieks en winkels is het slechts enkele minuten lopen. De dichtstbijzijnde halte van het openbaar vervoer vindt u op ongeveer 800 meter van het hotel.',
            'De kamers bieden airconditioning, centrale verwarming, een woonkamer en een badkamer. Een balkon behoort tot de standaardinrichting van de meeste kamers. De kamers beschikken over een kingsize bed of een slaapbank. Er zijn gescheiden slaapkamers aanwezig. Kinderbedjes voor kleine reizigers zijn beschikbaar. Bovendien zijn een kluisje, een minibar en een bureau beschikbaar. Faciliteiten als een koelkast en een koelkastje veraangenamen het verblijf. Voor vakantiecomfort zorgen een internettoegang, een telefoon, een televisie en wifi. Tot de extra´s op kamers behoren pantoffels. De badkamers zijn uitgerust met een douche en een bad. Een haardroger en badjassen zijn voor het gemak van de gasten beschikbaar. Het hotel biedt gezinskamers en niet-rokenkamers.',
            'Dit hotel werd gebouwd in 1885. Het hotel biedt de reizigers in totaal 100 kamers. Alle etages zijn gemakkelijk bereikbaar met de lift of via de trap. Tot een van de faciliteiten hoort een kluis. Via wifi krijgen de gasten in de gemeenschappelijke ruimte toegang tot het internet. De volgende gastronomische voorzieningen zijn beschikbaar in het verblijf: een restaurant, een eetzaal en een bar. De gasten die met de auto komen, kunnen parkeren in een garage of op de parkeerplaats. Ook roomservice, een wasservice en een kapper worden aangeboden.',
          ],
        },
        {
          id: 9,
          continent: 'Amerika',
          country: 'Verenigde Staten',
          city: 'New York',
          name: 'New York Marriott Marquis',
          price: 351,
          rooms: [{
              roomType: 'Standaard kamer',
              bedType: '1 persoonsbed ,1 tweepersoonsbed',
              maxPerson: 3,
              roomImg: require(
                '@/assets/hotel-rooms/new-york-marriott-marquis-standard.jpg'),
              roomPrice: 351,
              additionalCosts: 37.00,
              touristTax: 24.35,
              personPerNight: 57.66,
              serviceFee: 12.00,
            },
            {
              roomType: 'Luxe kamer',
              bedType: '2 tweepersoonsbedden',
              maxPerson: 4,
              roomImg: require('@/assets/hotel-rooms/new-york-marriott-marquis-luxe.jpg'),
              roomPrice: 513,
              additionalCosts: 37.00,
              touristTax: 24.35,
              personPerNight: 67.24,
              serviceFee: 12.00,
            },
          ],
          img: require('@/assets/featured-hotels-images/new-york-marriott-marquis.jpg'),
          buildingImg: require(
            '@/assets/hotel-building-images/new-york-marriott-marquis-building.jpg'),
          wifi: true,
          description: [
            'De kamers bieden airconditioning, centrale verwarming, een keuken en een badkamer. Een balkon behoort tot de standaardvoorzieningen van de meeste kamers. De kamers met vloerbedekking beschikken over een tweepersoonsbed en een slaapbank. Bovendien zijn een kluisje en een minibar beschikbaar. Faciliteiten als een koelkast, een magnetron en een thee-/koffiezetapparaat veraangenamen het verblijf. Een strijkset is voor extra comfort van de reizigers beschikbaar. Voor vakantiecomfort zorgen een internettoegang, een telefoon, een televisie, een radio, een wekker en wifi. De badkamers zijn uitgerust met een douche en een bad. Een haardroger en badjassen zijn voor het gemak van de gasten beschikbaar. Het hotel biedt gezinskamers en niet-rokenkamers.',
            'In 1984 werd het hotel gebouwd. Het verblijf biedt 1944 kamers. In het van airconditioning voorziene hotel worden de gasten hartelijk verwelkomd in de ontvangsthal aan de 24-uurs-receptie en 24-uurs-uitcheckservice. Er is een lift voorhanden waarmee de meeste etages bereikbaar zijn. Tot de voorzieningen behoren een garderobe en een kluis. Wifi in de gemeenschappelijke ruimtes maakt het de reizigers mogelijk om in contact te blijven met vrienden of familieleden. De volgende gastronomische voorzieningen zijn beschikbaar in het hotel: een restaurant, een eetzaal, een koffiehuis en een bar. Er zijn ook winkels. Bovendien is er een tuin. Tot de verdere voorzieningen van het verblijf behoort een krantenkiosk. De gasten die met de auto komen, kunnen parkeren in een garage of op de parkeerplaats. Tot de beschikbare voorzieningen behoren een oppasservice, roomservice, een wasservice en een kapper. Sportieve gasten, die het omliggende landschap op de fiets willen verkennen, zullen de fietsverhuur op prijs stellen.',
          ],

        },
      ],
    };
    return Promise.resolve(stub);
  },
};

export default hotelStub;
