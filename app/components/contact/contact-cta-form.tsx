import clsx from 'clsx';
import ContactForm from '~/components/common/form/contact-form';
import {useTranslation} from 'react-i18next';
import React from 'react';
import Heading from '~/components/common/heading';
import Phone from '~/components/common/icons/phone-contact';
import Location from '~/components/common/icons/marker-contact';
import Clock from '~/components/common/icons/clock-contact';
import Link from '~/components/Link';
import Facebook from '~/components/common/icons/facebook';
import Instagram from '~/components/common/icons/instagram';
import Youtube from '~/components/common/icons/youtube';

interface ContactCTAFormProps {
  className?: string;
}

const ContactCTAForm: React.FC<ContactCTAFormProps> = ({className = ''}) => {
  return (
    <section className={clsx('base-container py-24 md:py-32', className)}>
      <h2 className="text-[40px] md:text-[64px] font-semibold leading-[50px] md:leading-[78px]">
        Contatti
      </h2>
      <div className="grid grid-cols-12 gap-8 pt-6">
        <div className="col-span-12 md:col-span-6">
          <ul className="flex flex-col border-b pb-8 gap-8">
            {infoItems.map((item) => (
              <InfoItem key={item.title} {...item} />
            ))}
          </ul>
          <div>
            <Heading className="font-bold md:text-base mb-4 mt-8" variant="h5">
              Connect with us
            </Heading>
            <div className="md:text-base flex items-center gap-4">
              <div className="flex gap-4 items-center relative order-0 md:order-1">
                <Link
                  to="https://www.facebook.com/arredamentipacelli/?locale=it_IT"
                  target="_blank"
                  className="w-[44px] h-[44px] p-[10px] bg-secondary rounded-full object-contain"
                >
                  <Facebook className="text-white w-6 h-6 stroke-white" />
                </Link>
                <Link
                  to="https://www.instagram.com/pacelliarredamenti"
                  target="_blank"
                  className="w-[44px] h-[44px] p-[10px] bg-secondary rounded-full object-contain"
                >
                  <Instagram className="text-white w-6 h-6 stroke-white" />
                </Link>
                <Link
                  to="https://www.youtube.com/@arredamentipacelli4456/featured"
                  target="_blank"
                  className="w-[44px] h-[44px] p-[10px] bg-secondary rounded-full object-contain"
                >
                  <Youtube className="text-white w-6 h-6 " />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactCTAForm;

interface InfoItemProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const InfoItem: React.FC<InfoItemProps> = ({title, value, icon}) => {
  return (
    <li className="flex flex-col">
      <Heading
        className="font-bold md:text-base mb-4 text-primary"
        variant="h5"
      >
        {title}
      </Heading>
      <div className="md:text-base flex items-center gap-4">
        {icon}
        <span>{value}</span>
      </div>
    </li>
  );
};

const infoItems = [
  {
    title: 'Phone',
    value: '+39 (0824) 948533',
    icon: <Phone className="w-6 h-6 " />,
  },
  {
    title: 'Address',
    value: 'Via Volturno, 11, San Salvatore Telesino (BN)',
    icon: <Location className="w-6 h-6" />,
  },
  {
    title: 'Open',
    value: 'Lunedì-Venerdì: 9:00 - 20:30			Sabato: 10:00 - 20:00',
    icon: <Clock className="w-6 h-6" />,
  },
];
