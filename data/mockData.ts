export interface Specialist {
  id: string;
  name: string;
  title: string;
  bio: string;
  about: string;
  avatar: string;
  phone: string;
  experience: {
    it: string;
    mentoring: string;
  };
}

export interface Service {
  id: string;
  name: string;
  description: string;
}

export interface Case {
  id: string;
  name: string;
  description: string;
  stack: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
}

export interface TimeSlot {
  id: string;
  date: string;
  time: string;
  available: boolean;
}

export interface Schedule {
  workingDays: string[];
  timeRange: {
    start: string;
    end: string;
  };
}

export const mockSpecialist: Specialist = {
  id: '1',
  name: 'Максат Каныбеков',
  title: 'It Specialist · IT Mentor · Product Manager',
  bio: 'Помогаю начинающим разработчикам расти и создаю полезные веб-решения',
  about:
    '4 года в IT и 3 года в менторстве.\n\nСпециализируюсь на создании веб-приложений и Telegram-ботов — от идеи и архитектуры до запуска и масштабирования.\n\nРаботал с образовательными продуктами, стартапами и командами, помогая превращать сложные задачи в понятные и работающие цифровые решения.\n\nОтдельное направление — обучение и менторство: курсы, индивидуальная работа и проведение хакатонов, где участники получают практический опыт и уверенность в своих навыках.',
  avatar: '/maksat.jpg',
  phone: '+996 552 077 970',
  experience: {
    it: '4 года',
    mentoring: '3 года',
  },
};

export const mockServices: Service[] = [
  {
    id: '1',
    name: 'Web-приложения и сайты',
    description: 'Создание современных веб-приложений.',
  },
  {
    id: '2',
    name: 'Telegram-боты',
    description: 'Разработка чат-ботов для бизнеса и автоматизации',
  },
  {
    id: '3',
    name: 'Курсы и менторство',
    description: 'Индивидуальное и групповое обучение программированию',
  },
  {
    id: '4',
    name: 'Организация хакатонов',
    description: 'Полный цикл организации технических мероприятий',
  },
  {
    id: '5',
    name: 'BilimTrack',
    description:
      'Подключаем современную систему управления образовательным процессом для школ и университетов',
  },
];

export const mockCases: Case[] = [
  {
    id: '1',
    name: 'Intuit',
    description:
      'Современный веб-сайт для Международного Университета Инновационных Технологий',
    stack: 'React, Node.js, PostgreSQL, WebSocket',
  },
  {
    id: '2',
    name: 'MakalaBox',
    description: 'Сервис для создания и управления научными статьями',
    stack: 'Next.js, TypeScript, Supabase, TailwindCSS',
  },
  {
    id: '3',
    name: 'Hackathon BashtUp',
    description:
      'Организация и проведение технического хакатона с 100+ участниками',
    stack: 'Event Management, Team Coordination, Telegram Bot',
  },
  {
    id: '4',
    name: 'Обучил более 300 подростков',
    description:
      'Организация и проведение технического хакатона с 100+ участниками',
    stack: 'Event Management, Team Coordination, Telegram Bot',
  },
    {
    id: '5',
    name: 'Bilimtrack ',
    description:
      'На данный момент Bilimtrack используется в 3 университетах Кыргызстана.',
    stack: '3000+ активных пользователей ежедневно, удобный интерфейс, надежная система.',
  },
];

export const mockReviews: Review[] = [
  {
    id: '1',
    name: 'Алина М.',
    rating: 5,
    text: 'Отличный ментор! Помог разобраться с React и найти первую работу.',
  },
  {
    id: '2',
    name: 'Тимур К.',
    rating: 5,
    text: 'Профессиональный подход к разработке. Telegram-бот работает идеально.',
  },
  {
    id: '3',
    name: 'Нурай С.',
    rating: 5,
    text: 'Хакатон был организован на высшем уровне. Спасибо за опыт!',
  },
];

export const generateMockTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const today = new Date();

  for (let day = 0; day < 7; day++) {
    const date = new Date(today);
    date.setDate(today.getDate() + day);
    const dateStr = date.toISOString().split('T')[0];

    const hours = [
      '10:00',
      '11:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
    ];

    hours.forEach((time, index) => {
      slots.push({
        id: `${dateStr}-${time}`,
        date: dateStr,
        time,
        available: Math.random() > 0.3,
      });
    });
  }

  return slots;
};

export const mockSchedule: Schedule = {
  workingDays: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'],
  timeRange: {
    start: '10:00',
    end: '18:00',
  },
};
