import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  notes: string;
  gdpr: boolean;
  eventId: string;
}

export interface MemberFocus {
  id: string;
  title: string;
  content: string;
  link?: string;
}

export interface Member {
  id: string;
  name: string;
  image?: string;
  imageClass?: string;
  role: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  focus: MemberFocus[];
}

export interface ProgramItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  benefit: string;
  content: {
    problem: string;
    solutions: string[];
  };
}

export interface GoalItem {
  number: string;
  title: string;
  desc: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string[];
  image: string;
  imageClass?: string;
  detailImageClass?: string;
  videoUrl?: string;
}

export interface SEOProps {
  title: string;
  description: string;
  ogType?: string;
  ogImage?: string;
  noIndex?: boolean;
  articleData?: {
    headline: string;
    image?: string;
    datePublished?: string;
    authorName?: string;
  };
  serviceData?: {
    name: string;
    description: string;
  };
}
