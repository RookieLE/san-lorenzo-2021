/* ==== ACTIVITIES ==== */
import Pizzoccolo2Img from '../assets/activities/pizzoccolo2.png';
import Agri from '../public/assets/home/mountain.png';
import PizzoccoloImg from '../public/assets/activities/pizzoccolo-verticale.jpg';

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
    homepage: 'Homepage',
    apartments: 'Apartments',
    lodge: 'The Lodge',
    activities: 'Activities',
  },
  navbar: {
    home: 'Home',
    lodge: 'The Lodge',
    apartments: 'Apartments',
    activities: 'Activities',
    contact: 'Contact',
  },
  header: {
    welcome: 'welcome',
    san_lorenzo: {
      notification: 'Closed until April 2022 due to a landslide',
      title: `A hidden paradise`,
      subTitle: 'behind a mountain',
      text: 'Welcome in Persegno, a wonderful location surrounded by nature in the Alto Garda Bresciano natural park. The San Lorenzo Farm Holiday Accommodation offers a set of nice apartments in a quiet mountain area.',
      cta: 'Learn More',
      img: {
        url: Agri,
        alt: 'Agriturismo san lorenzo viewed from outside, on a mountain view.',
      },
    },
  },

  rooms: {
    title: 'Rooms & Views',
    desc: 'Surrounded by 14 hectares of land, the facility is part of an ancient cheese-making farm dating back to the 19th century. Each room can host up to four guests in a warm and cozy atmosphere, distinctively charming and comfortable.',
    rooms: [
      {
        name: 'serenity',
        price: '50',
        guest: '2 guests',
        viewMore: 'View more',
        img: '/assets/rooms/thumbnail/serenity.jpg',
        videoUrl: 'https://www.youtube.com/embed/FCwlLM-Jqic',
        alt: 'An internal view of serenity apartment, with a wood table and a big window.',
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
        guest: '4 guests',
        viewMore: 'View more',
        img: '/assets/rooms/thumbnail/armony.jpg',
        videoUrl: 'https://www.youtube.com/embed/lG8iiNx6A2g',
        alt: 'An internal view of Armony apartment, with a wood table and a big window.',
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
        guest: '4 guests',
        viewMore: 'View more',
        img: '/assets/rooms/thumbnail/joy.jpg',
        videoUrl: 'https://www.youtube.com/embed/Efg7OlrCklY',
        alt: 'An internal view of Joy apartment, with a wood table and a big window.',
        othersImages: [
          { url: '/assets/rooms/joy/1.jpeg', alt: '' },
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
        guest: '4 guests',
        viewMore: 'View more',
        img: '/assets/rooms/thumbnail/silence.jpg',
        videoUrl: 'https://www.youtube.com/embed/BY4r-m_67oU',
        alt: 'An internal view of Silence apartment, with a wood table and a big window.',
        othersImages: [
          { url: '/assets/rooms/silence/1.jpeg', alt: '' },
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
      title: 'View other Rooms',
      /*  text:
        'The apartments are comfortable and charmingly furnished, with any tool that you may need during your journey.', */
    },
    infoRooms: {
      features: [
        { name: 'Kitchen', icon: <MdKitchen className='text-2xl' /> },
        { name: 'Parking', icon: <FaParking className='text-2xl' /> },
        { name: 'Free Wi-Fi', icon: <WifiIcon className='text-2xl' /> },
        { name: 'Animal Friendly', icon: <DogIcon className='text-2xl' /> },
      ],
      bulletList: {
        title: 'Description',
        list: [
          'We offer open-space apartments with 3 rooms: living room/kitchen (fully furnished), bathroom and bedroom.',
          'Each accommodation disposes of a double bed, a sofa bed in the living room and/or in the bedroom and a private bathroom with a shower.',
          'The living room is equipped with a dining table, some chairs and a sofa. If needed, you can also enjoy the wood stove heating.',
        ],
      },
      additionalInfo: {
        title: 'Additional Info',
        arrivalDeparture: {
          title: 'Check-in / Check-out',
          text: 'The check-in is allowed from 2:00 pm to 6:00 pm. The check-out limit is 11:00 am.',
        },
        towels: {
          title: 'Bed sheets and Towels',
          text: 'The bed sheets and towels are extra, they cost 10€ per person for the whole stay.',
        },
      },
    },
  },

  activities: {
    title: 'Activities',
    desc: 'There are a lot of activities you can do. The park is full of attractions, with plenty of routes for incredible walking, cycling and climbing. The magnificent beach of Toscolano Maderno is also 15 minutes away by car.',
    cta: 'Learn More',
    activitiesList: [
      { name: 'mountain', icon: MountainIcon },
      { name: 'bike', icon: BikeIcon },
      { name: 'wellness', icon: WellnessIcon },
      { name: 'beach', icon: BeachIcon },
    ],
  },
  contact: {
    title: 'Book Now',
    desc: 'At our Lodge, there is a variety of rooms to choose from. Whether you.',
    form: {
      name: {
        name: 'name',
        placeholder: 'Full Name',
      },
      arrival: {
        name: 'arrival',
        placeholder: 'Select an arrival date',
      },
      departure: {
        name: 'departure',
        placeholder: 'Select a departure date',
      },
      email: {
        name: 'email',
        placeholder: 'Email',
      },
      message: {
        name: 'message',
        placeholder: 'Write your message',
      },
      is_required: 'This field is required',
      success_msg:
        'Email submitted correctly! We will reply you as soon as possible. Thanks.',
      error_msg:
        'Oops, it seems that there is an error, try again. Otherwise write us directly at info@sanlorenzodipersegno.it',
      button_text: 'send',
      info: 'Vi consigliamo di impostare nel navigatore località Gaino. C’è la possibilità che il navigatore vi porti a Navazzo, NON dovete assolutamente seguire questa direzione. Una volta arrivati a Toscolano Maderno, proseguite per Gaino, poi entrate nella valle delle Camerate e proseguite per 5 km circa. La strada è una classica strada montana, sterrata e non asfaltata, consigliamo tranquillità e di godervi il percorso perchè una volta giunti in agriturismo la pace ricompenserà ogni sforzo.',
    },
  },
  lodge: {
    img_text: "It's coazy",
    title: `Our Lodge`,
    subTitle: 'is like home',
    text: 'Located at an altitude of 400 meters and situated at 7 km from Toscolano Maderno and from the shores of Lake Garda, the San Lorenzo Farm Holiday Accommodation offers a set of nice full equipped apartments in a quiet mountain area.',
    facility: {
      img: '/assets/agriturismo/agriturismo-outside.jpg',
      title: 'The facilities',
      text: 'Surrounded by 14 hectares of land, the facility is part of an ancient cheese-making farm dating back to the 19th century. Each room can host up to four guests in a warm and cozy atmosphere, distinctively charming and comfortable. The apartments are comfortable and charmingly furnished, with any tool that you may need during your journey.',
    },
    terrace: {
      img: '/assets/agriturismo/terrace.jpg',
      title: 'The terrace',
      text: 'The San Lorenzo Farm Holiday Accommodation offers a set of nice apartments in a quiet mountain area, with an outside solarium. At 5 minutes by car it has also a wonderful river where you can make a bath.',
    },
  },
  activities_page: {
    mountain: {
      title: 'Mountain Pizzoccolo',
      desc: 'This is the subtitile of mountain pizzoccolo category. This mountain is 1680m height. Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
      img: Pizzoccolo2Img,
      sections: [
        {
          title: 'An amazing walk',
          desc: 'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
          img: PizzoccoloImg,
        },
      ],
    },
    bike: {
      title: 'Bike in Garda Lake',
      desc: 'This is the subtitile of mountain pizzoccolo category. This mountain is 1680m height. Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
      img: '',
      sections: [
        {
          title: 'An amazing walk',
          desc: 'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
          img: '',
          component: 'central',
        },
        {
          title: 'Not a nice day',
          desc: 'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
          img: Agri,
          component: 'left',
        },
      ],
    },
    wellness: {
      title: 'Wellness in Toscolano Maderno',
      desc: 'This is the subtitile of mountain pizzoccolo category. This mountain is 1680m height. Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
      img: '',
      sections: [
        {
          title: 'A pleasure in a SPA',
          desc: 'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
          img: '',
          component: 'central',
        },
        {
          title: 'Massage',
          desc: 'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
          img: Agri,
          component: 'left',
        },
      ],
    },
    beach: {
      title: 'Beach in Garda Lake',
      desc: 'This is the subtitile of mountain pizzoccolo category. This mountain is 1680m height. Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
      img: '',
      sections: [
        {
          title: 'Limone Beach awasome',
          desc: 'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
          img: '',
          component: 'central',
        },
        {
          title: 'Sirmione exclusive beach',
          desc: 'Situato a un’altitudine di 400 metri e ubicato a 7 km da Toscolano Maderno e dalle rive del Lago di Garda, l’Agriturismo San Lorenzo propone appartamenti in una tranquilla zona di montagna.Benvenuti in Persegno località immersa nella natura del parco Alto Garda.',
          img: Agri,
          component: 'left',
        },
      ],
    },
  },
};
