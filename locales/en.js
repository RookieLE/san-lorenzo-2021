import SerenityImg from '../assets/rooms/serenity.jpg';
import JoyImg from '../assets/rooms/joy.jpg';
import SilenceImg from '../assets/rooms/silence.jpg';
import HarmonyImg from '../assets/rooms/armony.jpg';
import BeachIcon from '../assets/icons/beach.png';
import BikeIcon from '../assets/icons/bike.png';
import GolfIcon from '../assets/icons/golf.png';
import LakeIcon from '../assets/icons/lake.png';
import MountainIcon from '../assets/icons/mountain.png';
import RiverIcon from '../assets/icons/river.png';
import WellnessIcon from '../assets/icons/wellness.png';
import Pizzoccolo2Img from '../assets/activities/pizzoccolo2.png';
import Agri from '../assets/home/agri.png';
import FiumeImg from '../assets/activities/fiume.png';
import PizzoccoloImg from '../assets/activities/pizzoccolo.png';
import LimoneImg from '../assets/activities/limoni.png';
import FormaggiImg from '../assets/activities/formaggi.png';
import LagoImg from '../assets/activities/lago.png';
import {
  KitchenIcon,
  ParkingIcon,
  WifiIcon,
  DogIcon,
} from '../components/organism/InfoRoom/icons';

// ROOMS IMAGE
import MountainRoomImg from '../assets/rooms/mountain-room.jpg';
import HarmonyRoomImg from '../assets/rooms/armony.jpg';
import JoyRoomImg from '../assets/rooms/joy.jpg';

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
  homepage: {
    welcome: 'welcome',
    san_lorenzo: {
      title: `A hidden paradise`,
      subTitle: 'behind a mountain',
      text:
        'Welcome in Persegno, a wonderful location surrounded by nature in the Alto Garda Bresciano natural park, at the foot of Mount Pizzocolo. Located at an altitude of 400 meters and situated at 7 km from Toscolano Maderno and from the shores of Lake Garda, the San Lorenzo Farm Holiday Accommodation offers a set of nice apartments in a quiet mountain area.',
      cta: 'Learn More',
      img: {
        url: Agri,
        alt: 'Agriturismo san lorenzo viewed from outside, on a mountain view.',
      },
    },
    rooms: {
      title: 'Rooms & Views',
      desc:
        'At our Lodge, there is a variety of rooms to choose from. Whether you are a casual traveler or a person demanding luxury wherever you go, you won’t be disappointed.',
      rooms: [
        {
          name: 'serenity',
          price: '50',
          guest: '4',
          text:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit.',
          img: SerenityImg,
          alt:
            'An internal view of serenity apartment, with a wood table and a big window.',
          othersImages: [
            { url: MountainRoomImg, alt: '' },
            { url: HarmonyRoomImg, alt: '' },
            { url: JoyRoomImg, alt: '' },
            { url: HarmonyImg, alt: '' },
          ],
        },
        {
          name: 'harmony',
          price: '70',
          guest: '4',
          text:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit.',
          img: HarmonyImg,
          alt:
            'An internal view of serenity apartment, with a wood table and a big window.',
          othersImages: [
            { url: MountainRoomImg, alt: '' },
            { url: HarmonyRoomImg, alt: '' },
            { url: JoyRoomImg, alt: '' },
            { url: HarmonyImg, alt: '' },
          ],
        },
        {
          name: 'joy',
          price: '60',
          guest: '4',
          text:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit.',
          img: JoyImg,
          alt:
            'An internal view of serenity apartment, with a wood table and a big window.',
          othersImages: [
            { url: MountainRoomImg, alt: '' },
            { url: HarmonyRoomImg, alt: '' },
            { url: JoyRoomImg, alt: '' },
            { url: HarmonyImg, alt: '' },
          ],
        },
        {
          name: 'silence',
          price: '75',
          guest: '4',
          text:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit.',
          img: SilenceImg,
          alt:
            'An internal view of serenity apartment, with a wood table and a big window.',
          othersImages: [
            { url: MountainRoomImg, alt: '' },
            { url: HarmonyRoomImg, alt: '' },
            { url: JoyRoomImg, alt: '' },
            { url: HarmonyImg, alt: '' },
          ],
        },
      ],
      viewOtherRooms: {
        title: 'View other Rooms',
        text:
          'Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.',
      },
    },
    infoRooms: {
      features: [
        { name: 'Kitchen', icon: <KitchenIcon /> },
        { name: 'Parking', icon: <ParkingIcon /> },
        { name: 'Wi-Fi', icon: <WifiIcon /> },
        { name: 'Animal Friendly', icon: <DogIcon /> },
      ],
      bulletList: [
        'Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.',
        'Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably.',
        'Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.',
      ],
      additionalInfo: {
        title: 'Additional Info',
        arrivalDeparture: {
          title: 'Check-in / Check-out',
          text:
            'Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.',
        },
        towels: {
          title: 'Lenzuola e Asciugamani',
          text:
            'Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.',
        },
      },
    },
    activities: {
      title: 'Activities',
      desc:
        'At our Lodge, there is a variety of rooms to choose from. Whether you are a casual traveler or a person demanding luxury wherever you go, you won’t be disappointed.',
      cta: 'Learn More',
      activitiesList: [
        { name: 'mountain', icon: MountainIcon },
        { name: 'bike', icon: BikeIcon },
        { name: 'wellness', icon: WellnessIcon },
        { name: 'beach', icon: BeachIcon },
      ],
    },
    features: {
      title: 'Our most Loved Characteristic',
      items: [
        {
          name: 'lovely family',
          text:
            'Blue bottle crucifix vinyl post-ironic four dollar toast vegan.  Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.',
          icon: '',
        },
        {
          name: 'breakfast',
          text:
            'Blue bottle crucifix vinyl post-ironic four dollar toast vegan.  Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.',
          icon: '',
        },
        {
          name: 'nature reserve',
          text:
            'Blue bottle crucifix vinyl post-ironic four dollar toast vegan.  Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.',
          icon: '',
        },
      ],
    },
    contact: {
      title: 'Book Now',
      desc:
        'At our Lodge, there is a variety of rooms to choose from. Whether you.',
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
          'Oops, it seems that there is an error, try again. Otherwise write us directly at agri@gmail.com',
        button_text: 'send',
        info:
          'Vi consigliamo di impostare nel navigatore località Gaino. C’è la possibilità che il navigatore vi porti a Navazzo, NON dovete assolutamente seguire questa direzione. Una volta arrivati a Toscolano Maderno, proseguite per Gaino, poi entrate nella valle delle Camerate e proseguite per 5 km circa. La strada è una classica strada montana, sterrata e non asfaltata, consigliamo tranquillità e di godervi il percorso perchè una volta giunti in agriturismo la pace ricompenserà ogni sforzo.',
      },
    },
  },
  activities: {
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
