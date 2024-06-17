import WhiteInstagram from '../assets/whiteLogos/instagram.png';
import WhiteMail from '../assets/whiteLogos/mail.png';
import WhiteVimeo from '../assets/whiteLogos/vimeo.png';
import WhiteYoutube from '../assets/whiteLogos/youtube.png';
import YellowInstagram from '../assets/yellowLogos/instagram.png';
import YellowMail from '../assets/yellowLogos/mail.png';
import YellowVimeo from '../assets/yellowLogos/vimeo.png';
import YellowYoutube from '../assets/yellowLogos/youtube.png';

import { socialIconsTypes } from '../types/home';

export const socialIcons: socialIconsTypes[] = [
  {
    srcWhite: WhiteInstagram,
    srcYellow: YellowInstagram,
    name: 'Instagram',
    url: 'https://www.instagram.com/whiteowlproductionmumbai/',
    rank: 1
  },
  {
    srcWhite: WhiteYoutube,
    srcYellow: YellowYoutube,
    name: 'Youtube',
    url: 'https://www.youtube.com/@whiteowlproduction7701',
    rank: 2
  },
  {
    srcWhite: WhiteVimeo,
    srcYellow: YellowVimeo,
    name: 'Vimeo',
    url: 'https://vimeo.com/user218921917',
    rank: 3
  },
  {
    srcWhite: WhiteMail,
    srcYellow: YellowMail,
    name: 'Mail',
    url: 'mailto:contact@whiteowlproduction.in',
    rank: 4
  }
];

export const navButtons = [
  {
    title: 'ABOUT US',
    href: '/about-us'
  },
  {
    title: 'ALL FILMS',
    href: '/films'
  }
];
