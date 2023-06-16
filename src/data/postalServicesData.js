import NovaPoshtaLogo from '../assets/novaposhta-logo.png';
import UkrPoshtaLogo from '../assets/ukrposhta-logo.png';
import MeestExpressLogo from '../assets/meestexpress-logo.png';
import JustinLogo from '../assets/justin-logo.png';
import UPSLogo from '../assets/ups-logo.png';
import LatvijasPastsLogo from '../assets/latvijaspasts-logo.webp';

const postalServicesData = [
  {
    id: 0,
    name: 'Нова Пошта',
    logo: NovaPoshtaLogo,
    isInternational: false,
    isUrgent: true,
    deliveryTime: '2-3 дні',
  },
  {
    id: 1,
    name: 'УкрПошта',
    logo: UkrPoshtaLogo,
    isInternational: false,
    isUrgent: false,
    deliveryTime: '6-7 днів',
  },
  {
    id: 2,
    name: '(Meest) Міст Експрес',
    logo: MeestExpressLogo,
    isInternational: true,
    isUrgent: false,
    deliveryTime: '12-14 днів',
  },
  {
    id: 3,
    name: 'Justin (Джастін)',
    logo: JustinLogo,
    isInternational: true,
    isUrgent: false,
    deliveryTime: '18-21 днів',
  },
  {
    id: 4,
    name: 'UPS',
    logo: UPSLogo,
    isInternational: true,
    isUrgent: false,
    deliveryTime: '25-30 днів',
  },
  {
    id: 5,
    name: 'Latvijas Pasts',
    logo: LatvijasPastsLogo,
    isInternational: false,
    isUrgent: true,
    deliveryTime: '3-4 дні',
  },
];

export default postalServicesData;