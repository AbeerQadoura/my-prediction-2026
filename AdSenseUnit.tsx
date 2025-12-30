
import React, { useEffect } from 'react';

interface Props {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  style?: React.CSSProperties;
}

const AdSenseUnit: React.FC<Props> = ({ slot, format = 'auto', style }) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div className="ad-container my-6 flex justify-center overflow-hidden">
      <ins
        className="adsbygoogle"
        style={style || { display: 'block', minWidth: '300px', minHeight: '100px' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // سيتم استبدال XXXXXXXXXXXXXXXX برقمك الخاص لاحقاً
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSenseUnit;
