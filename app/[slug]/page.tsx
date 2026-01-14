import { Metadata } from 'next'
import SpecialistProfile from '@/components/profile/specialistProfile'

type Props = {
  params: {
    slug: string
  }
}

const specialists: Record<string, any> = {
  maksat: {
    name: 'Максат Каныбеков',
    bio: 'Я IT-специалист и ментор, помогаю создавать цифровые продукты и обучать команды.',
    image: '/maksat.jpg',
  },
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const specialist = specialists[params.slug]

  if (!specialist) {
    return {
      title: 'Специалист не найден',
    }
  }

  return {
    title: specialist.name,
    description: specialist.bio,
    openGraph: {
      title: specialist.name,
      description: specialist.bio,
      images: [{ url: specialist.image }],
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: specialist.name,
      description: specialist.bio,
      images: [specialist.image],
    },
  }
}

export default function Page({ params }: Props) {
  const specialist = specialists[params.slug]

  if (!specialist) return null

  return <SpecialistProfile />
}
