import { useState, useEffect } from 'react';
import { getCallTrackingNumber, trackPhoneClick } from '@/utils/calltracking';

interface PhoneLinkProps {
  location: string;
  className?: string;
  showFormatted?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function PhoneLink({ location, className, showFormatted = true, children, onClick }: PhoneLinkProps) {
  const [phone, setPhone] = useState('+79940645474');
  const [formatted, setFormatted] = useState('+7 (994) 064-54-74');

  useEffect(() => {
    const trackingNumber = getCallTrackingNumber();
    setPhone(trackingNumber.phone);
    setFormatted(trackingNumber.formatted);
  }, []);

  const handleClick = () => {
    trackPhoneClick(location);
    if (onClick) onClick();
  };

  return (
    <a 
      href={`tel:${phone}`} 
      className={className}
      onClick={handleClick}
    >
      {children || (showFormatted ? formatted : phone)}
    </a>
  );
}
