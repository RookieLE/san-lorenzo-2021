/* ==== ICONS ===== */
import { GiSittingDog as DogIcon } from "react-icons/gi";
import { AiOutlineWifi as WifiIcon } from "react-icons/ai";
import { FaParking } from "react-icons/fa";
import { MdKitchen } from "react-icons/md";
import WellnessIcon from "../assets/icons/wellness.png";
import RiverIcon from "../assets/icons/river.png";
import BeachIcon from "../assets/icons/beach.png";
import BikeIcon from "../assets/icons/bike.png";
import GolfIcon from "../assets/icons/golf.png";
import LakeIcon from "../assets/icons/lake.png";
import MountainIcon from "../assets/icons/mountain.png";

export default {
  seo: {
    homepage: "Home",
    apartments: "Appartamenti",
    lodge: "L'Agriturismo",
    activities: "Attività",
  },
  announcement: {
    title: "Sul nostro sito trovi i prezzi migliori",
    text: "Tra il 15/20% in meno rispetto allo stesso appartamento prenotato su Booking o Airbnb. Gli ultimi 4 km sono più adatti ad auto alte o 4x4. Però non è strettamente necessario.",
  },
  navbar: [
    {
      name: "home",
      href: "/home",
    },
    {
      name: "agriturismo",
      href: "/agriturismo",
    },
    {
      name: "appartamenti",
      href: "/appartamenti",
    },
    {
      name: "attività",
      href: "/attivita",
    },
    {
      name: "posizione",
      href: "/posizione",
    },
    {
      name: "contatto",
      href: "#contact",
    },
  ],

  book_now: {
    name: "prenota ora",
    href: "https://direct-book.com/properties/sanlorenzodipersegnodirect?locale=it&items%5B0%5D%5Badults%5D=2&items%5B0%5D%5Bchildren%5D=0&items%5B0%5D%5Binfants%5D=0&currency=EUR&checkInDate=2022-12-12&checkOutDate=2022-12-15&trackPage=yes",
  },
  header: {
    welcome: "benvenuti",
    san_lorenzo: {
      notification: "Grande ri apertura da Maggio 2022",
      title: `San Lorenzo`,
      subTitle: "un paradiso nascosto",
      text: "Benvenuti in Persegno località immersa nella natura del parco Alto Garda Bresciano, ai piedi del Monte Pizzocolo. L'agriturismo San Lorenzo offre vari appartamenti in una bella zona di montagna.",
      cta: "Mostra",
      img: {
        url: "",
        alt: "Una vista del lago di garda dal monte pizzoccolo",
      },
    },
  },

  rooms: {
    title: "Gli Appartamenti",
    desc: "All'interno di 14 ettari di terreno, la struttura fa parte di una vecchia formaggiaia risalente al 1800, le stanze possono accogliere fino a quattro ospiti ciascuna in un' atmosfera calda e raccolta, dallo charme caratteristico e confortevole.",

    rooms: [
      {
        name: "serenity",
        price: "da 90 € notte",
        guest: "2 ospiti",
        viewMore: "Mostra",
        img: "/assets/rooms/thumbnail/serenity.jpg",
        videoUrl: "https://www.youtube.com/embed/LNmRQhKBoX0",
        alt: "An internal view of serenity apartment, with a wood table and a big window.",
        othersImages: [
          {
            url: "https://ik.imagekit.io/dcwkdo37k/serenity/1.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662756685",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/serenity/2.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662756685",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/serenity/3.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662756685",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/serenity/4.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662756685",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/serenity/5.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662756685",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/serenity/6.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662756685",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/serenity/7.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662756685",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/serenity/8.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662756685",
            alt: "",
          },
        ],
      },
      {
        name: "armony",
        price: "da 105 € notte",
        guest: "4 ospiti",
        viewMore: "Mostra",
        img: "/assets/rooms/thumbnail/armony.jpg",
        videoUrl: "https://www.youtube.com/embed/lb2J4dofalU",
        alt: "An internal view of Armony apartment, with a wood table and a big window.",
        othersImages: [
          {
            url: "https://ik.imagekit.io/dcwkdo37k/armony/1.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662738810",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/armony/2.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662738810",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/armony/3.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662738810",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/armony/4.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662738810",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/armony/5.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662738810",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/armony/6.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662738810",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/armony/7.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662738810",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/armony/8.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662738810",
            alt: "",
          },
        ],
      },
      {
        name: "joy",
        price: "da 105 € notte",
        guest: "4 ospiti",
        viewMore: "Mostra",
        img: "/assets/rooms/thumbnail/joy.jpg",
        videoUrl: "https://www.youtube.com/embed/YFtzwdU_1zw",
        alt: "An internal view of Joy apartment, with a wood table and a big window.",
        othersImages: [
          {
            url: "https://ik.imagekit.io/dcwkdo37k/joy/1.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662746302",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/joy/2.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662746302",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/joy/3.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662746302",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/joy/4.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662746302",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/joy/5.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662746302",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/joy/6.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662746302",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/joy/7.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662746302",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/joy/8.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662746302",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/joy/9.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662746302",
            alt: "",
          },
        ],
      },
      {
        name: "silence",
        price: "da 105 € notte",
        guest: "4 ospiti",
        viewMore: "Mostra",
        img: "/assets/rooms/thumbnail/silence.jpg",
        videoUrl: "https://www.youtube.com/embed/lxUSHimdKmA",
        alt: "An internal view of Silence apartment, with a wood table and a big window.",
        othersImages: [
          {
            url: "https://ik.imagekit.io/dcwkdo37k/silence/1.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662765268",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/silence/2.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662765268",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/silence/3.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662765268",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/silence/4.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662765268",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/silence/5.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662765268",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/silence/6.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662765268",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/silence/7.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662765268",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/silence/8.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662765268",
            alt: "",
          },
        ],
      },
      {
        name: "freedom",
        price: "da 105 € notte",
        guest: "4 opsiti",
        viewMore: "Mostra",
        img: "/assets/rooms/thumbnail/freedom.jpg",
        videoUrl: "https://www.youtube.com/embed/0ZkLWq3Ntw8",
        alt: "An internal view of Freedom apartment, with a balcony and a big window.",
        othersImages: [
          {
            url: "https://ik.imagekit.io/dcwkdo37k/freedom/0.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662739089",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/freedom/1.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662739089",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/freedom/2.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662739089",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/freedom/3.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662739089",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/freedom/4.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662739089",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/freedom/5.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662739089",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/freedom/6.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662739089",
            alt: "",
          },
          {
            url: "https://ik.imagekit.io/dcwkdo37k/freedom/7.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662739089",
            alt: "",
          },
        ],
      },
    ],
    viewOtherRooms: {
      title: "Vedi gli altri Appartamenti",
      /* text:
        "Gli appartamenti sono spaziosi e ben arredati, forniti di ogni utensile necessario. Cliccate sull'immagine in alto per poter vedere un video tour dell'appartamento.", */
    },
    infoRooms: {
      features: [
        { name: "Cucina", icon: <MdKitchen className="text-2xl" /> },
        { name: "Parcheggio", icon: <FaParking className="text-2xl" /> },
        { name: "Free Internet", icon: <WifiIcon className="text-2xl" /> },
        { name: "Benvenuti Animali", icon: <DogIcon className="text-2xl" /> },
      ],
      bulletList: {
        title: "Descrizione",
        list: [
          "Gli appartamenti sono open space, con tre stanze totali: soggiorno/cucina (completamente accessoriata), bagno e camera da letto.",
          "In ogni alloggio troverete un letto matrimoniale, un divano letto nel soggiorno e/o nella stanza e un bagno privato con doccia.",
          "La zona soggiorno è arredata con tavolo, sedie e divano. Inoltre potrete gioire anche del riscaldamento a legna nel caso di bisogno.",
        ],
      },
      additionalInfo: {
        title: "Informazioni all'Arrivo",
        arrivalDeparture: {
          title: "Check-in / Check-out",
          text: "Il check-in è consentito dalle ore 14.00 alle ore 18.00. Il check-out non oltre le ore 10.00.",
        },
        towels: {
          title: "Lenzuola e Asciugamani",
          text: "Le lenzuola e gli asciugamani sono incluse nel prezzo.",
        },
        conditions: {
          title: "Pulizia",
          text: "L'appartamento verrà presentato in perfette condizioni igieniche, e dovrà essere lasciato nelle stessse condizioni.",
        },
      },
    },
  },

  activities: {
    title: "Attività",
    desc: "Ci sono moltissime attvità da poter fare. Il parco è ricco di attrazioni, con moltissimi percorsi per incredibili passeggiate, giri in bicicletta e arrampicate. La magnifica spiaggia di Toscolano Maderno inoltre si trova a 15 minuti di macchina. ",
    cta: "Learn More",
    activitiesList: [
      { name: "mountain", icon: MountainIcon },
      { name: "bike", icon: BikeIcon },
      { name: "wellness", icon: WellnessIcon },
      { name: "beach", icon: BeachIcon },
    ],
  },
  contact: {
    title: "Scrivici",
    desc: "Mettiti in contatto per risolvere qualsiasi dubbio.",
    form: {
      name: {
        name: "nome",
        placeholder: "Nome completo",
      },
      // arrival: {
      //   name: "arrivo",
      //   placeholder: "Seleziona una data di arrivo",
      // },
      // departure: {
      //   name: "partenza",
      //   placeholder: "Select a departure date",
      // },
      email: {
        name: "email",
        placeholder: "esempio@gmail.com",
      },
      message: {
        name: "messaggio",
        placeholder: "Scrivici un messaggio",
      },
      is_required: "Questo campo è obbligatorio",
      success_msg:
        "Email inviata correttamente! Vi risponderemo il prima possibile. Grazie.",
      error_msg:
        "Oops, sembra esserci un problema, prova ancora. Altrimenti scrivici direttamente a info@sanlorenzodipersegno.it",
      button_text: "invia",
      info: "Vi consigliamo di impostare nel navigatore località Gaino. C’è la possibilità che il navigatore vi porti a Navazzo, NON dovete assolutamente seguire questa direzione. Una volta arrivati a Toscolano Maderno, proseguite per Gaino, poi entrate nella valle delle Camerate e proseguite per 5 km circa. La strada è una classica strada montana, sterrata e non asfaltata, consigliamo tranquillità e di godervi il percorso perchè una volta giunti in agriturismo la pace ricompenserà ogni sforzo.",
    },
  },
  lodge: {
    img_text: "è accogliente",
    title: `Nel nostro Agriturismo`,
    subTitle: "ti sentirai a casa",
    text: "Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.",
    sections: [
      {
        title: `La struttura`,
        subTitle: undefined,
        text: "Circondata da 14 ettari di terreno, la struttura fa parte di un antico caseificio risalente all'800.  </br></br>  Ciascuna camera può ospitare fino a quattro persone in un'atmosfera calda e accogliente, distintamente affascinante e confortevole. Gli appartamenti sono confortevoli e arredati con charme, con qualsiasi attrezzo di cui potresti aver bisogno durante il tuo viaggio.  </br></br>  L'Agriturismo San Lorenzo offre una serie di graziosi appartamenti in una tranquilla zona di montagna, con solarium esterno. A 5 minuti di macchina ha anche un meraviglioso fiume dove si può fare il bagno..",
      },
      {
        title: `Prenditi cura di te`,
        subTitle: undefined,
        text: "Ogni droga ha pesanti controindicazioni. Il massaggio invece è la più potente delle droghe, senza avere alcuna controindicazione. Ricordati di prenotare il tuo massaggio con anticipo.",
      },
    ],
  },
  position: {
    img_text: "mountain",
    title: `Dove`,
    subTitle: "siamo?",
    text: "L'Agriturismo San Lorenzo di Persegno si trova all'interno del Parco protetto Alto Garda Bresciano in una zona di montagna a 400 metri di altitudine a circa 30 minuti dal Lago di Garda. Qui si possono fare numerose passeggiate percorribili anche in mountain bike o a cavallo. La struttura è immersa in una natura silenziosa ed incontaminata, ideale per chi ama la pace e la tranquillità. Si può inoltre godere di un gradevole solarium e di numerosi spazi esterni dove prendere il sole o leggere un buon libro. L'Agriturismo San Lorenzo di Persegno dista 20 km da Salò e 1 ora da Desenzano.",
    sections: [
      { title: `Come arrivarci`, subTitle: undefined, text: undefined },
    ],
  },
  activities_page: {
    img_text: "mountain",
    title: `Intorno`,
    subTitle: "a noi",
    text: undefined,
    sections: [
      { title: `Intorno a noi`, subTitle: undefined, text: undefined },
      { title: `Gargnano`, subTitle: undefined, text: undefined },
      { title: `Toscolano Maderno`, subTitle: undefined, text: undefined },
    ],
  },
};
