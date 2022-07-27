export type CourseIcon =
  | "python"
  | "dotNet"
  | "java"
  | "cPlusPlus"
  | "webDev"
  | "photoshop"
  | "design"
  | "it"
  | "agile"
  | "linux"
  | "testing"
  | "adobe"
  | "selenium";

export type CourseCerts = "edu" | "microsoft" | "adobe" | "apple";

export type CurriculumIcon = "prompt" | "keyboard" | "code" | "certificate";

export interface Curriculum {
  icon: CurriculumIcon;
  title: string;
  description: string;
}

export interface Summary {
  title: string;
  description: string;
  video: string;
  items: { title: string; description: string }[];
}

export interface Testimonial {
  _id: string;
  name: string;
  course: string;
  description: string;
}

export interface Trainer {
  _id: string;
  name: string;
  image: string;
  title: string;
  category: string;
  description: string;
  links: { personal: string; linkedIn: string; github: string };
}

export interface Session {
  title: string;
  period: string;
  startDate: string;
  isFull: boolean;
  isPublished: boolean;
}

export interface Price {
  currency: string;
  fullPrice: string;
  monthPrice: string;
}

export interface Course {
  name: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  icon: CourseIcon;
  image: string;
  file: string;
  title: string;
  date: string;
  featured: boolean;
  order: number;
  published: boolean;
  description: string;
  location: string;
  months: number;
  hours: number;
  certs: {
    microsoft: boolean;
    minister: boolean;
    adobe: boolean;
    itSpecialist: boolean;
  };
  details: string;
  curriculum: Curriculum[];
  summary: Summary;
  testimonials: Testimonial[];
  trainers: Trainer[];
  sessions: Session[];
  price: Price;
  likes?: number;
  _id?: string;
  __v?: string;
}

export interface ListItem {
  _id?: string;
  title: string;
}

export type SearchCriteria = {
  search: string;
  filter: string;
  location: string;
  sort: string;
};

export interface Partnership {
  icon: string;
  breadcrumb: string;
  title: string;
  description: string;
}
