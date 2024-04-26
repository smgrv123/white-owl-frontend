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
    url: '',
    rank: 1
  },
  {
    srcWhite: WhiteYoutube,
    srcYellow: YellowYoutube,
    name: 'Youtube',
    url: '',
    rank: 2
  },
  {
    srcWhite: WhiteVimeo,
    srcYellow: YellowVimeo,
    name: 'Vimeo',
    url: '',
    rank: 3
  },
  {
    srcWhite: WhiteMail,
    srcYellow: YellowMail,
    name: 'Mail',
    url: '',
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
