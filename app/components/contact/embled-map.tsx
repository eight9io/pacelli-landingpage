import clsx from 'clsx';
import React from 'react';
interface EmbledMapProps {
  className?: string;
}

const EmbledMap: React.FC<EmbledMapProps> = ({className = ''}) => {
  return (
    <section className={clsx('base-container pb-24 md:pb-32', className)}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1500.2221389822319!2d14.4969246!3d41.2338794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a449f754d3625%3A0xe78f82b5f51c1467!2sVia%20Volturno%2C%2011%2C%2082030%20San%20Salvatore%20Telesino%20BN%2C%20Italy!5e0!3m2!1sen!2s!4v1695880813290!5m2!1sen!2s"
        title="Google Maps"
        width={600}
        height={450}
        style={{border: '0'}}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[500px]"
      ></iframe>
    </section>
  );
};

export default EmbledMap;
