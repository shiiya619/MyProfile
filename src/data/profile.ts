// サイトに載せるプロフィール情報は、すべてこのファイルにまとめる。
// 空文字や空配列の項目は画面に表示されない。

export type TimelineCategory =
  | "education"
  | "project"
  | "hackathon"
  | "internship"
  | "circle";

export const categoryLabels: Record<TimelineCategory, string> = {
  education: "Education",
  project: "Project",
  hackathon: "Hackathon",
  internship: "Internship",
  circle: "Club",
};

export type TimelineItem = {
  /** "2025" または "2025-06" の形式 */
  date: string;
  category: TimelineCategory;
  title: string;
  organization?: string;
  note?: string;
  award?: string;
  /** 役職につくなど、新しい団体への加入ではない項目（Hero の件数に数えない） */
  role?: string;
};

export type Profile = {
  site: {
    title: string;
    description: string;
  };
  name: string;
  nameEn: string;
  headline: string;
  affiliation: string;
  summary: string;
  github: string; // GitHub プロフィールの URL
  about: string[];
  skills: {
    category: string;
    items: string[];
  }[];
  timeline: TimelineItem[];
  projects: {
    name: string;
    period: string;
    role: string;
    description: string;
    tech: string[];
    links: { label: string; url: string }[];
  }[];
};

export const profile: Profile = {
  site: {
    title: "MyProfile",
    description: "椎谷善輝のプロフィール",
  },
  name: "椎谷善輝",
  nameEn: "",
  headline: "フルスタックエンジニアを目指して学習中",
  affiliation: "金沢工業大学 2025年入学",
  summary: "",
  github: "",
  about: [
    "大学に入ってから開発を始めました。まだまだ分からないことが多いですが、ハッカソンに出てプロダクト開発が好きになり、フルスタックエンジニアを目指して学習しています。",
  ],
  skills: [
    {
      category: "Languages",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "Ruby"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Ruby on Rails"],
    },
    {
      category: "Database",
      items: ["MySQL", "Supabase", "Prisma"],
    },
    {
      category: "Tools",
      items: ["Docker", "Git", "GitHub"],
    },
  ],
  timeline: [
    {
      date: "2025",
      category: "education",
      title: "金沢工業大学 入学",
    },
    {
      date: "2025-06",
      category: "project",
      title: "情報セキュリティ・スキルアッププロジェクトに加入",
      organization: "課外活動プロジェクト",
    },
    {
      date: "2025-06",
      category: "project",
      title: "データドリーマーズに加入",
      organization: "課外活動プロジェクト",
    },
    {
      date: "2025-08",
      category: "hackathon",
      title: "Hackit2025に参加",
      award: "サイバーエージェント賞",
    },
    {
      date: "2026-04",
      category: "project",
      title: "情報セキュリティ・スキルアッププロジェクトの運営メンバーに就任",
      organization: "課外活動プロジェクト",
      role: "運営メンバー",
    },
    {
      date: "2026-06",
      category: "project",
      title: "cirkitに加入",
    },
    {
      date: "2026-06",
      category: "project",
      title: "Developers Hubに加入",
    },
    {
      date: "2026-08",
      category: "hackathon",
      title: "Hackit2026に参加",
    },
    {
      date: "2026-09",
      category: "internship",
      title: "2dayインターンに参加",
      organization: "Bata Computing株式会社",
    },
    {
      date: "2026-10",
      category: "hackathon",
      title: "JPHACKS2026に参加",
    },
    {
      date: "2026-10",
      category: "circle",
      title: "バレーサークルに加入",
    },
  ],
  projects: [],
};
