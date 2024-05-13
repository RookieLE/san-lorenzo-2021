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
    homepage: "Homepage",
    apartments: "Apartments",
    lodge: "The Lodge",
    activities: "Activities",
  },
  announcement: {
    title: "Best prices here",
    text: "Between 10 - 20% of the same listing on other platforms.",
  },
  navbar: [
    {
      name: "home",
      href: "/home",
    },
    {
      name: "lodge",
      href: "/agriturismo",
    },
    {
      name: "apartments",
      href: "/appartamenti",
    },
    {
      name: "activities",
      href: "/attivita",
    },
    {
      name: "how to arrive",
      href: "/come-arrivare",
    },
    {
      name: "contact",
      href: "#contact",
    },
  ],
  book_now: {
    name: "book now",
    href: "https://booking.inreception.com/agriturismosanlorenzodipersegno",
  },
  header: {
    welcome: "welcome",
    san_lorenzo: {
      notification: "Big re opening from May 2022",
      title: `San Lorenzo`,
      subTitle: "a hidden paradise",
      text: "The San Lorenzo Farm Holiday Accommodation offers a set of nice apartments in a wonderful location surrounded by nature in the Alto Garda Bresciano natural park.",
      cta: "Learn More",
      img: {
        url: "",
        alt: "Agriturismo san lorenzo viewed from outside, on a mountain view.",
      },
    },
  },

  rooms: {
    title: "Rooms & Views",
    desc: "Surrounded by 14 hectares of land, the facility is part of an ancient cheese-making farm dating back to the 19th century. Each room can host up to four guests in a warm and cozy atmosphere, distinctively charming and comfortable.",
    rooms: [
      {
        name: "serenity",
        price: "from 90 € per night",
        guest: "2 guests",
        viewMore: "View more",
        img: "/assets/rooms/thumbnail/serenity.jpg",
        videoUrl: "https://www.youtube.com/embed/LNmRQhKBoX0",
        alt: "An internal view of serenity apartment, with a wood table and a big window.",
        othersImages: [
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/serenity/1.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662756685", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/serenity/2.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662756685", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/serenity/3.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662756685", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/serenity/4.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662756685", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/serenity/5.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662756685", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/serenity/6.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662756685", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/serenity/7.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662756685", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/serenity/8.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662756685", alt: "" },
        ],
      },
      {
        name: "armony",
        price: "from 100 € per night",
        guest: "4 guests",
        viewMore: "View more",
        img: "/assets/rooms/thumbnail/armony.jpg",
        videoUrl: "https://www.youtube.com/embed/lb2J4dofalU",
        alt: "An internal view of Armony apartment, with a wood table and a big window.",
        othersImages: [
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/armony/1.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662738810", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/armony/2.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662738810", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/armony/3.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662738810", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/armony/4.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662738810", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/armony/5.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662738810", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/armony/6.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662738810", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/armony/7.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662738810", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/armony/8.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662738810", alt: "" },
        ],
      },
      {
        name: "joy",
        price: "from 100 € per night",
        guest: "4 guests",
        viewMore: "View more",
        img: "/assets/rooms/thumbnail/joy.jpg",
        videoUrl: "https://www.youtube.com/embed/YFtzwdU_1zw",
        alt: "An internal view of Joy apartment, with a wood table and a big window.",
        othersImages: [
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/joy/1.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662746302", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/joy/2.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662746302", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/joy/3.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662746302", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/joy/4.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662746302", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/joy/5.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662746302", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/joy/6.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662746302", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/joy/7.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662746302", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/joy/8.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662746302", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/joy/9.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662746302", alt: "" },
        ],
      },
      {
        name: "silence",
        price: "from 100 € per night",
        guest: "4 guests",
        viewMore: "View more",
        img: "/assets/rooms/thumbnail/silence.jpg",
        videoUrl: "https://www.youtube.com/embed/lxUSHimdKmA",
        alt: "An internal view of Silence apartment, with a wood table and a big window.",
        othersImages: [
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/silence/1.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662765268", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/silence/2.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662765268", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/silence/3.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662765268", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/silence/4.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662765268", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/silence/5.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662765268", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/silence/6.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662765268", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/silence/7.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662765268", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/silence/8.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662765268", alt: "" },
        ],
      },
      {
        name: "freedom",
        price: "from 100 € per night",
        guest: "4 guests",
        viewMore: "View more",
        img: "/assets/rooms/thumbnail/freedom.jpg",
        videoUrl: "https://www.youtube.com/embed/0ZkLWq3Ntw8",
        alt: "An internal view of Freedom apartment, with a balcony and a big window.",
        othersImages: [
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/freedom/0.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662739089", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/freedom/1.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662739089", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/freedom/2.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662739089", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/freedom/3.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662739089", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/freedom/4.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662739089", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/freedom/5.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662739089", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/freedom/6.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662739089", alt: "" },
          { url: "https://ik.imagekit.io/dcwkdo37k/tr:w-450/freedom/7.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1671662739089", alt: "" },
        ],
      },
    ],
    viewOtherRooms: {
      title: "View other Rooms",
      /*  text:
        'The apartments are comfortable and charmingly furnished, with any tool that you may need during your journey.', */
    },
    infoRooms: {
      features: [
        { name: "Kitchen", icon: <MdKitchen className="text-2xl" /> },
        { name: "Parking", icon: <FaParking className="text-2xl" /> },
        { name: "Free Wi-Fi", icon: <WifiIcon className="text-2xl" /> },
        { name: "Animal Friendly", icon: <DogIcon className="text-2xl" /> },
      ],
      bulletList: {
        title: "Description",
        list: [
          "We offer open-space apartments with 3 rooms: living room/kitchen (fully furnished), bathroom and bedroom.",
          "Each accommodation disposes of a double bed, a sofa bed in the living room and/or in the bedroom and a private bathroom with a shower.",
          "The living room is equipped with a dining table, some chairs and a sofa. If needed, you can also enjoy the wood stove heating.",
        ],
      },
      additionalInfo: {
        title: "Additional Info",
        arrivalDeparture: {
          title: "Check-in / Check-out",
          text: "The check-in is allowed from 2:00 pm to 6:00 pm. The check-out limit is 10:00 am.",
        },
        towels: {
          title: "Bed sheets and Towels",
          text: "The bed sheets and towels are included in the price.",
        },
        conditions: {
          title: "Cleaning",
          text: "The apartment will be presented in perfect hygiene conditions. You must leave it as you found it on your arrival.",
        },
      },
    },
  },

  activities: {
    title: "Activities",
    desc: "There are a lot of activities you can do. The park is full of attractions, with plenty of routes for incredible walking, cycling and climbing. The magnificent beach of Toscolano Maderno is also 15 minutes away by car.",
    cta: "Learn More",
    activitiesList: [
      { name: "mountain", icon: MountainIcon },
      { name: "bike", icon: BikeIcon },
      { name: "wellness", icon: WellnessIcon },
      { name: "beach", icon: BeachIcon },
    ],
  },
  contact: {
    title: "Book Now at a Super Advantageous Price",
    desc: "Write in the 'message' the dates you would like to book and if you have a preference for the apartment. We will contact you as soon as possible",
    form: {
      name: {
        name: "name",
        placeholder: "Full Name",
      },
      // arrival: {
      //   name: "arrival",
      //   placeholder: "Select an arrival date",
      // },
      // departure: {
      //   name: "departure",
      //   placeholder: "Select a departure date",
      // },
      email: {
        name: "email",
        placeholder: "Email",
      },
      message: {
        name: "message",
        placeholder: "Write your message",
      },
      is_required: "This field is required",
      success_msg:
        "Email submitted correctly! We will reply you as soon as possible. Thanks.",
      error_msg:
        "Oops, it seems that there is an error, try again. Otherwise write us directly at info@sanlorenzodipersegno.it",
      button_text: "send",
      info: "Vi consigliamo di impostare nel navigatore località Gaino. C’è la possibilità che il navigatore vi porti a Navazzo, NON dovete assolutamente seguire questa direzione. Una volta arrivati a Toscolano Maderno, proseguite per Gaino, poi entrate nella valle delle Camerate e proseguite per 5 km circa. La strada è una classica strada montana, sterrata e non asfaltata, consigliamo tranquillità e di godervi il percorso perchè una volta giunti in agriturismo la pace ricompenserà ogni sforzo.",
    },
  },
  lodge: {
    img_text: "It's coazy",
    title: `Our Lodge`,
    subTitle: "is like home",
    text: "Located at an altitude of 400 meters and situated at 12 km from Gargnano and from the shores of Lake Garda, the San Lorenzo Farm Holiday Accommodation offers a set of nice full equipped apartments in a quiet mountain area.",
    sections: [
      {
        title: `The facility`,
        subTitle: undefined,
        text: "Surrounded by 14 hectares of land, the facility is part of an ancient cheese-making farm dating back to the 19th century. </br></br> Each room can host up to four guests in a warm and cozy atmosphere, distinctively charming and comfortable. </br></br> The apartments are comfortable and charmingly furnished, with any tool that you may need during your journey. </br></br> The San Lorenzo Farm Holiday Accommodation offers a set of nice apartments in a quiet mountain area, with an outside solarium. At 5 minutes by car it has also a wonderful river where you can make a bath.",
      },
      {
        title: `Take care of your self`,
        subTitle: undefined,
        text: "Each drug has serious contraindications. Massage, on the other hand, is the most powerful of drugs, without having any contraindications. Remember to reserve with anticipation.",
      },
    ],
  },
  position: {
    img_text: "mountain",
    title: `Where are`,
    subTitle: "we?",
    text: "Agriturismo San Lorenzo di Persegno is located inside the Upper Garda Brescia protected park in a mountain area at an altitude of 400 meters about 30 minutes from Lake Garda. Here you can make numerous walks that can also be covered by mountain bike or on horseback. The structure is immersed in a silent and uncontaminated nature, ideal for those who love peace and tranquility. You can also enjoy a pleasant solarium and numerous outdoor spots where you can sunbathe or read a good book. Agriturismo San Lorenzo di Persegno is 20km away from Salo and 1 hour from Desenzano.",
    sections: [
      { title: `The around area`, subTitle: undefined, text: undefined },
    ],
  },

  activities_page: {
    img_text: "mountain",
    title: `Around`,
    subTitle: "us",
    text: undefined,
    sections: [
      { title: `Around us`, subTitle: undefined, text: undefined },
      { title: `Gargnano`, subTitle: undefined, text: undefined },
      { title: `Toscolano Maderno`, subTitle: undefined, text: undefined },
    ],
  },

  come_arrivare: {
    title: "Download the guide",
    youtube: "https://www.youtube.com/embed/a_Uxmq9g2cQ",
    cta: "Download",
    pdf_url: "/how-to-arrive-2023.pdf",
    pdf_name: "agriturismo-san-lorenzo-how-to-arrive"
  }
};
