import Image from 'next/image';
import Icon from '../../assets/Icon.png';

const Footer = () => {
  const arr = [
    'Flat no 13, 3rd floor, Bwing,',
    'New Ratna CHSL,',
    'Near Bombay Scottish School,',
    'Cadell Road,',
    'Mahim West'
  ];

  const pincode = [4, 0, 0, 1, 1, 6];

  return (
    <div className='bg-themeYellow  p-11 flex flex-col items-end font-ayuthaya font-normal'>
      <div className='flex items-end'>
        <div className='font-pf_text font-normal text-6xl pb-10'>VISIT</div>
        <Image src={Icon} alt={'white owl icon'} height={150} width={150} />
      </div>
      <div className='flex flex-col text-black'>
        {arr.map((i, index) => (
          <div key={index}>
            <div className='px-1'>{i}</div>
            <div className='h-1 w-[350px] bg-white rounded' />
          </div>
        ))}
        <div className='flex flex-row self-end items-end'>
          <div className='text-white pr-[20px]'>PINCODE</div>
          {pincode.map((i, index) => (
            <div className='border-white border-2 px-1 mt-[20px]' key={index}>
              <div>{i}</div>
            </div>
          ))}
        </div>
        <div className='h-1 w-[350px] bg-white rounded' />
      </div>
      <div className='text-black pt-5'>
        <p>Landmark- Next to German laundry</p>
        <p>CONTACT US: contact@whiteowlproduction.in</p>
        <p>+91 98213 87772</p>
      </div>
    </div>
  );
};

export default Footer;
