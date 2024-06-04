import Astral from '@/src/assets/collabs/astral.png';
import BlueTribe from '@/src/assets/collabs/blue-tribe.png';
import Cipla from '@/src/assets/collabs/cipla.png';
import HDFC from '@/src/assets/collabs/hdfc.png';
import Intellipaat from '@/src/assets/collabs/intellipaat.png';
import Pilgrim from '@/src/assets/collabs/pilgrim.png';
import Piramal from '@/src/assets/collabs/piramal.png';
import Samco from '@/src/assets/collabs/samco.png';
import Truecaller from '@/src/assets/collabs/truecaller.png';
import Yummiez from '@/src/assets/collabs/yummiez.png';
import Image from 'next/image';

export default function WOCollabs() {
  const collabsArr = [
    Truecaller,
    BlueTribe,
    Samco,
    Intellipaat,
    Astral,
    Cipla,
    HDFC,
    Pilgrim,
    Piramal,
    Yummiez
  ];

  return (
    <div className='grid grid-cols-5 justify-center items-center gap-2'>
      {collabsArr.map((i) => (
        <Image key={i.src} src={i} alt={''} height={i.height} width={i.width} />
      ))}
    </div>
  );
}
