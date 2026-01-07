// server component
import { Metadata } from 'next';
import SpecialistProfile from './SpecialistProfile';

interface Specialist {
  name: string;
  experience: string;
  services: string[];
  phone: string;
  bio: string;
  image?: string;
}

const specialists: Record<string, Specialist> = {
  maksat: {
    name: 'Максат Каныбеков',
    experience: '4 года в IT, 3 года в менторстве',
    services: [
      'Создание Telegram-ботов',
      'Web Application',
      'Образовательные курсы',
      'Проведение хакатонов',
    ],
    phone: '+996 552 077970',
    bio: 'Я IT-специалист и ментор, помогаю создавать цифровые продукты и обучать команды.',
    image: '/maksat.jpg',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const specialist = specialists[slug];

  if (!specialist) {
    return {
      title: 'Специалист не найден',
      description: 'Такого специалиста нет на платформе Bayqa',
    };
  }

  return {
    title: `${specialist.name}`,
    description: specialist.bio,
    openGraph: {
      title: `${specialist.name}`,
      description: specialist.bio,
      images: specialist.image ? [specialist.image] : undefined,
      type: 'website',
    },
  };
}

export default function Page() {
  return <SpecialistProfile />;
}
