/* ==== ACTIVITIES ==== */
import Pizzoccolo2Img from '../assets/activities/pizzoccolo2.png';
import Agri from '../public/assets/home/mountain.png';
import FiumeImg from '../public/assets/activities/fiume.png';
import PizzoccoloImg from '../public/assets/activities/pizzoccolo-verticale.jpg';
import LagoImg from '../public/assets/activities/lago.jpg';

/* ==== ICONS ===== */
import { GiSittingDog as DogIcon } from 'react-icons/gi';
import { AiOutlineWifi as WifiIcon } from 'react-icons/ai';
import { FaParking } from 'react-icons/fa';
import { MdKitchen } from 'react-icons/md';
import WellnessIcon from '../assets/icons/wellness.png';
import RiverIcon from '../assets/icons/river.png';
import BeachIcon from '../assets/icons/beach.png';
import BikeIcon from '../assets/icons/bike.png';
import GolfIcon from '../assets/icons/golf.png';
import LakeIcon from '../assets/icons/lake.png';
import MountainIcon from '../assets/icons/mountain.png';

export default {
  seo: {
    homepage: 'Home',
    apartments: 'Appartamenti',
    lodge: "L'Agriturismo",
    activities: 'Attività',
  },
  navbar: {
    home: 'Home',
    lodge: "L'Agriturismo",
    apartments: 'Appartamenti',
    activities: 'Attività',
    contact: 'Contatti',
  },
  header: {
    welcome: 'benvenuti',
    san_lorenzo: {
      title: `Un paradiso nascosto`,
      subTitle: 'dietro la montagna',
      text:
        "Benvenuti in Persegno località immersa nella natura del parco Alto Garda Bresciano, ai piedi del Monte Pizzocolo. L'agriturismo San Lorenzo offre vari appartamenti in una bella zona di montagna.",
      cta: 'Scopri di più',
      img: {
        url: Agri,
        alt: 'Una vista del lago di garda dal monte pizzoccolo',
      },
    },
  },

  rooms: {
    title: 'Gli Appartamenti',
    desc:
      "All'interno di 14 ettari di terreno, la struttura fa parte di una vecchia formaggiaia risalente al 1800, le stanze possono accogliere fino a quattro ospiti ciascuna in un' atmosfera calda e raccolta, dallo charme caratteristico e confortevole.",

    rooms: [
      {
        name: 'serenity',
        price: '50',
        guest: '2 ospiti',
        viewMore: 'Scopri di più',
        img: '/assets/rooms/thumbnail/serenity.jpg',
        videoUrl: 'https://www.youtube.com/embed/FCwlLM-Jqic',
        alt:
          'An internal view of serenity apartment, with a wood table and a big window.',
        othersImages: [
          { url: '/assets/rooms/serenity/1.jpeg', alt: '' },
          { url: '/assets/rooms/serenity/2.jpeg', alt: '' },
          { url: '/assets/rooms/serenity/3.jpeg', alt: '' },
          { url: '/assets/rooms/serenity/4.jpeg', alt: '' },
          { url: '/assets/rooms/serenity/5.jpeg', alt: '' },
          { url: '/assets/rooms/serenity/6.jpeg', alt: '' },
          { url: '/assets/rooms/serenity/7.jpeg', alt: '' },
          { url: '/assets/rooms/serenity/8.jpeg', alt: '' },
        ],
      },
      {
        name: 'armony',
        price: '70',
        guest: '4 ospiti',
        viewMore: 'Scopri di più',
        img: '/assets/rooms/thumbnail/armony.jpg',
        videoUrl: 'https://www.youtube.com/embed/lG8iiNx6A2g',
        alt:
          'An internal view of Armony apartment, with a wood table and a big window.',
        othersImages: [
          { url: '/assets/rooms/armony/1.jpeg', alt: '' },
          { url: '/assets/rooms/armony/2.jpeg', alt: '' },
          { url: '/assets/rooms/armony/3.jpeg', alt: '' },
          { url: '/assets/rooms/armony/4.jpeg', alt: '' },
          { url: '/assets/rooms/armony/5.jpeg', alt: '' },
          { url: '/assets/rooms/armony/6.jpeg', alt: '' },
          { url: '/assets/rooms/armony/7.jpeg', alt: '' },
          { url: '/assets/rooms/armony/8.jpeg', alt: '' },
        ],
      },
      {
        name: 'joy',
        price: '60',
        guest: '4 ospiti',
        viewMore: 'Scopri di più',
        img: '/assets/rooms/thumbnail/joy.jpg',
        videoUrl: 'https://www.youtube.com/embed/Efg7OlrCklY',
        alt:
          'An internal view of Joy apartment, with a wood table and a big window.',
        othersImages: [
          { url: '/assets/rooms/joy/2.jpeg', alt: '' },
          { url: '/assets/rooms/joy/3.jpeg', alt: '' },
          { url: '/assets/rooms/joy/4.jpeg', alt: '' },
          { url: '/assets/rooms/joy/5.jpeg', alt: '' },
          { url: '/assets/rooms/joy/6.jpeg', alt: '' },
          { url: '/assets/rooms/joy/7.jpeg', alt: '' },
          { url: '/assets/rooms/joy/8.jpeg', alt: '' },
          { url: '/assets/rooms/joy/9.jpeg', alt: '' },
        ],
      },
      {
        name: 'silence',
        price: '75',
        guest: '4 ospiti',
        viewMore: 'Scopri di più',
        img: '/assets/rooms/thumbnail/silence.jpg',
        videoUrl: 'https://www.youtube.com/embed/BY4r-m_67oU',
        alt:
          'An internal view of Silence apartment, with a wood table and a big window.',
        othersImages: [
          { url: '/assets/rooms/silence/2.jpeg', alt: '' },
          { url: '/assets/rooms/silence/3.jpeg', alt: '' },
          { url: '/assets/rooms/silence/4.jpeg', alt: '' },
          { url: '/assets/rooms/silence/5.jpeg', alt: '' },
          { url: '/assets/rooms/silence/6.jpeg', alt: '' },
          { url: '/assets/rooms/silence/7.jpeg', alt: '' },
          { url: '/assets/rooms/silence/8.jpeg', alt: '' },
        ],
      },
    ],
    viewOtherRooms: {
      title: 'Vedi gli altri Appartamenti',
      text:
        "Gli appartamenti sono spaziosi e ben arredati, forniti di ogni utensile necessario. Cliccate sull'immagine in alto per poter vedere un video tour dell'appartamento.",
    },
    infoRooms: {
      features: [
        { name: 'Cucina', icon: <MdKitchen className='text-2xl' /> },
        { name: 'Parcheggio', icon: <FaParking className='text-2xl' /> },
        { name: 'Free Internet', icon: <WifiIcon className='text-2xl' /> },
        { name: 'Benvenuti Animali', icon: <DogIcon className='text-2xl' /> },
      ],
      bulletList: {
        title: 'Descrizione',
        list: [
          'Gli appartamenti sono open space, con tre stanze totali: soggiorno/cucina (completamente accessoriata), bagno e camera da letto.',
          'In ogni alloggio troverete un letto matrimoniale, un divano letto nel soggiorno e/o nella stanza e un bagno privato con doccia.',
          'La zona soggiorno è arredata con tavolo, sedie e divano. Inoltre potrete gioire anche del riscaldamento a legna nel caso di bisogno.',
        ],
      },
      additionalInfo: {
        title: "Informazioni all'Arrivo",
        arrivalDeparture: {
          title: 'Check-in / Check-out',
          text:
            'Il check-in è consentito dalle ore 14.00 alle ore 18.00. Il check-out non oltre le ore 11.00.',
        },
        towels: {
          title: 'Lenzuola e Asciugamani',
          text:
            'Le lenzuola e gli asciugamani sono extra, il prezzo è di € 10 per persona per soggiorno.',
        },
      },
    },
  },

  activities: {
    title: 'Attività',
    desc:
      'Ci sono moltissime attvità da poter fare. Il parco è ricco di attrazioni, con moltissimi percorsi per incredibili passeggiate, giri in bicicletta e arrampicate. La magnifica spiaggia di Toscolano Maderno inoltre si trova a 15 minuti di macchina. ',
    cta: 'Learn More',
    activitiesList: [
      { name: 'mountain', icon: MountainIcon },
      { name: 'bike', icon: BikeIcon },
      { name: 'wellness', icon: WellnessIcon },
      { name: 'beach', icon: BeachIcon },
    ],
  },
  contact: {
    title: 'Prenota Ora',
    desc:
      'Potete scriverci qualsiasi informazione che possa esserci utile al fine di regalarvi la miglior esperienza possibile.',
    form: {
      name: {
        name: 'nome',
        placeholder: 'Nome completo',
      },
      arrival: {
        name: 'arrivo',
        placeholder: 'Seleziona una data di arrivo',
      },
      departure: {
        name: 'partenza',
        placeholder: 'Select a departure date',
      },
      email: {
        name: 'email',
        placeholder: 'esempio@gmail.com',
      },
      message: {
        name: 'messaggio',
        placeholder: 'Scrivici un messaggio',
      },
      is_required: 'Questo campo è obbligatorio',
      success_msg:
        'Email inviata correttamente! Vi risponderemo il prima possibile. Grazie.',
      error_msg:
        'Oops, sembra esserci un problema, prova ancora. Altrimenti scrivici direttamente a info@sanlorenzodipersegno.it',
      button_text: 'invia',
      info:
        'Vi consigliamo di impostare nel navigatore località Gaino. C’è la possibilità che il navigatore vi porti a Navazzo, NON dovete assolutamente seguire questa direzione. Una volta arrivati a Toscolano Maderno, proseguite per Gaino, poi entrate nella valle delle Camerate e proseguite per 5 km circa. La strada è una classica strada montana, sterrata e non asfaltata, consigliamo tranquillità e di godervi il percorso perchè una volta giunti in agriturismo la pace ricompenserà ogni sforzo.',
    },
  },
  lodge: {
    img_text: 'è accogliente',
    title: `Nel nostro Agriturismo`,
    subTitle: 'ti sentirai a casa',
    text:
      'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.',
  },
  activities_page: {
    mountain: {
      title: 'Mountain Pizzoccolo',
      desc:
        'This is the subtitile of mountain pizzoccolo category. This mountain is 1680m height. Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
      img: Pizzoccolo2Img,
      sections: [
        {
          title: 'An amazing walk',
          desc:
            'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
          img: PizzoccoloImg,
        },
      ],
    },
    bike: {
      title: 'Bike in Garda Lake',
      desc:
        'This is the subtitile of mountain pizzoccolo category. This mountain is 1680m height. Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
      img: FiumeImg,
      sections: [
        {
          title: 'An amazing walk',
          desc:
            'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
          img: LagoImg,
          component: 'central',
        },
        {
          title: 'Not a nice day',
          desc:
            'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
          img: Agri,
          component: 'left',
        },
      ],
    },
    wellness: {
      title: 'Wellness in Toscolano Maderno',
      desc:
        'This is the subtitile of mountain pizzoccolo category. This mountain is 1680m height. Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
      img: FiumeImg,
      sections: [
        {
          title: 'A pleasure in a SPA',
          desc:
            'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
          img: LagoImg,
          component: 'central',
        },
        {
          title: 'Massage',
          desc:
            'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
          img: Agri,
          component: 'left',
        },
      ],
    },
    beach: {
      title: 'Beach in Garda Lake',
      desc:
        'This is the subtitile of mountain pizzoccolo category. This mountain is 1680m height. Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
      img: LagoImg,
      sections: [
        {
          title: 'Limone Beach awasome',
          desc:
            'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
          img: LagoImg,
          component: 'central',
        },
        {
          title: 'Sirmione exclusive beach',
          desc:
            'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
          img: Agri,
          component: 'left',
        },
      ],
    },
  },
};
