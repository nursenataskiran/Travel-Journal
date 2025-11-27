// src/data.js
import japanImg from './assets/japan.jpg';
import norwayImg from './assets/norway.jpg';
import sydneyImg from './assets/sydney.jpg';
import santoriniImg from './assets/santorini.jpg';


export const journalData = [
  {
    id: 'mt-fuji-2021',
    imageSrc: japanImg,
    imageAlt: 'Mount Fuji',
    country: 'Japan',
    googleMapsUrl:
      'https://www.google.com/maps/place/Mount+Fuji/',
    title: 'Mount Fuji',
    startDate: '12 Jan, 2021',
    endDate: '24 Jan, 2021',
    description:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). It is an active stratovolcano that last erupted in 1707. Known locally as 'Fujisan', the mountain holds deep cultural and spiritual significance, appearing in countless works of art, literature, and poetry throughout Japanese history. Every year, thousands of climbers attempt to reach its summit, especially during the official climbing season in July and August. The surrounding Fuji Five Lakes region also offers breathtaking views, hot springs, and traditional ryokan inns, making it a popular destination not just for hikers but also for those seeking relaxation and cultural experiences. Mount Fuji is considered a national symbol of Japan, representing beauty, strength, and tranquility all at once."

  },

{
  id: 'geirangerfjord-2021',
  imageSrc: norwayImg,
  imageAlt: 'Geirangerfjord',
  country: 'Norway',
  googleMapsUrl: 'https://www.google.com/maps/place/Geirangerfjord/',
  title: 'Geirangerfjord',
  startDate: '01 May, 2021',
  endDate: '10 May, 2021',
  description: 'Stunning fjord scenery in western Norway.'
},
{
  id: 'sydney-opera-2022',
  imageSrc: sydneyImg,
  imageAlt: 'Sydney Opera House',
  country: 'Australia',
  googleMapsUrl: 'https://www.google.com/maps/place/Sydney+Opera+House/',
  title: 'Sydney Opera House',
  startDate: '05 Feb, 2022',
  endDate: '14 Feb, 2022',
  description:
    "One of the world's most iconic architectural masterpieces, the Sydney Opera House sits proudly on Bennelong Point overlooking the harbor. Known for its unique sail-like design, it hosts concerts, theater performances, and cultural events year-round. Surrounded by vibrant waterfront areas, it's a must-visit landmark for travelers exploring Australia."
},
{
  id: 'santorini-2022',
  imageSrc: santoriniImg,
  imageAlt: 'Santorini Blue Domes',
  country: 'Greece',
  googleMapsUrl: 'https://www.google.com/maps/place/Santorini/',
  title: 'Santorini',
  startDate: '18 Sep, 2022',
  endDate: '27 Sep, 2022',
  description:
    "Santorini is famous for its whitewashed houses, blue-domed churches, and breathtaking sunsets overlooking the Aegean Sea. Formed by a volcanic eruption, the island features dramatic cliffs, unique beaches, and charming villages like Oia and Fira. It’s one of Europe’s most romantic and photogenic destinations."
}


];
