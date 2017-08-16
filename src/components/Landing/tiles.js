import androidDevText from '../../content/info/android-dev';
import transText from '../../content/info/social-trans';
import fullstackText from '../../content/info/fullstack-dev';

import ale from '../../img/ale1.jpg';
import ale2 from '../../img/ale2.jpg';
import ale3 from '../../img/ale3.jpg';

export default [
  {
    id: 'itile1',
    picture: {
      alt: 'Ale Figueroa',
      src: ale2,
    },
    title: 'Ale Figueroa',
    subtitle: 'Software Developer',
    description: androidDevText
  },
  {
    id: 'itile2',
    picture: {
      alt: 'Ale Figueroa',
      src: ale3,
    },
    title: 'Ale Figueroa',
    subtitle: 'Social Rebel Transgirl',
    description: transText
  },
  {
    id: 'itile3',
    picture: {
      alt: 'Ale Figueroa',
      src: ale,
    },
    title: 'Ale Figueroa',
    subtitle: 'LifeHacker & LanguageLover',
    description: fullstackText
  },
];
