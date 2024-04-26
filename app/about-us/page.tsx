import { TypedComponent } from '@/src/components/commons/typedComponent';
import Image from 'next/image';
import AboutUsImage from '../../src/assets/AboutUs.png';

export default function AboutUs() {
  return (
    <section className='py-16'>
      <div className='h-[140px]' />
      <div className='flex flex-row text-themeYellow font-ayuthaya font-normal text-[16px]'>
        <div className='flex items-center flex-col w-[35%]'>
          <Image
            src={AboutUsImage}
            alt='Vishal P Sane'
            height={392}
            width={392}
            className='rounded-[196px]'
          />
          <div className='py-3'>Vishal P Sane</div>
        </div>
        <TypedComponent
          string={`Experienced and passionate cinematographer with industry experience, training, and provenknowledge in cinematography. Regardless of the type, my goal as Director of Photography is to create images that will not only tell the story, that will affect the viewer on asubliminal level. Bringing forth the ability to collaborate effectively with others, and prioritize the goals of the film efficiently. Enthusiastic and committed to creating thought and emotion provoking cinema. Was part of DDB Mudra group as a ‘Head of Films’ for good 15 years. I have always seen the world through the eyes of an artist. Becoming a Director of Photography was therefore a natural progression.`}
        />
      </div>
    </section>
  );
}
