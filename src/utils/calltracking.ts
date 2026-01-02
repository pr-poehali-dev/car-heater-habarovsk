export interface CallTrackingNumber {
  source: string;
  phone: string;
  formatted: string;
}

const callTrackingNumbers: CallTrackingNumber[] = [
  {
    source: 'yandex',
    phone: '+79940645474',
    formatted: '+7 (994) 064-54-74'
  },
  {
    source: 'google',
    phone: '+79940645474',
    formatted: '+7 (994) 064-54-74'
  },
  {
    source: 'direct',
    phone: '+79940645474',
    formatted: '+7 (994) 064-54-74'
  },
  {
    source: 'social',
    phone: '+79940645474',
    formatted: '+7 (994) 064-54-74'
  },
  {
    source: 'default',
    phone: '+79940645474',
    formatted: '+7 (994) 064-54-74'
  }
];

export function getTrafficSource(): string {
  if (typeof window === 'undefined') return 'default';

  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source');
  const ref = document.referrer.toLowerCase();

  if (utmSource) {
    if (utmSource.includes('yandex')) return 'yandex';
    if (utmSource.includes('google')) return 'google';
    if (utmSource.includes('vk') || utmSource.includes('telegram') || utmSource.includes('instagram')) return 'social';
    return 'direct';
  }

  if (ref.includes('yandex.ru') || ref.includes('ya.ru')) return 'yandex';
  if (ref.includes('google.')) return 'google';
  if (ref.includes('vk.com') || ref.includes('t.me') || ref.includes('instagram.com') || ref.includes('facebook.com')) return 'social';
  
  if (ref === '') return 'direct';
  
  return 'default';
}

export function getCallTrackingNumber(): CallTrackingNumber {
  const source = getTrafficSource();
  const number = callTrackingNumbers.find(n => n.source === source);
  return number || callTrackingNumbers.find(n => n.source === 'default')!;
}

export function trackPhoneClick(location: string) {
  const source = getTrafficSource();
  
  if (typeof window !== 'undefined' && (window as any).ym) {
    (window as any).ym(101026698, 'reachGoal', 'phone_click', {
      location,
      source
    });
  }

  console.log(`Phone click tracked: location=${location}, source=${source}`);
}
