import { AppLinks, FooterLinks } from '@/types/app-links';
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from 'react-icons/ri';

const footerApplicationLinks: AppLinks[] = [
  {
    label: 'Accueil',
    baseUrl: '/',
    type: 'internal',
  },
  {
    label: 'Project',
    baseUrl: '/#',
    type: 'internal',
  },
  {
    label: 'Coders Monkeys',
    baseUrl: '/#',
    type: 'internal',
  },
  {
    label: 'Formations',
    baseUrl: 'https://youtube.com',
    type: 'external',
  },
];
const footerUsersLinks: AppLinks[] = [
  {
    label: 'Mon espace',
    baseUrl: '/#',
    type: 'internal',
  },
  {
    label: 'Connexion',
    baseUrl: '/#',
    type: 'internal',
  },
  {
    label: 'Inscription',
    baseUrl: '/#',
    type: 'internal',
  },
  {
    label: 'Mot de passe oublié',
    baseUrl: '/#',
    type: 'internal',
  },
];
const footerInformationLinks: AppLinks[] = [
  {
    label: 'CGU',
    baseUrl: '/#',
    type: 'internal',
  },
  {
    label: 'Confidentialité',
    baseUrl: '/#',
    type: 'internal',
  },
  {
    label: 'A propos',
    baseUrl: '/#',
    type: 'internal',
  },
  {
    label: 'Contact',
    baseUrl: '/#',
    type: 'internal',
  },
];
export const footerSocialNetworkdsLinks: AppLinks[] = [
  {
    label: 'Youtube',
    baseUrl: 'http://youtube.com',
    type: 'external',
    icon: RiYoutubeFill,
  },
  {
    label: 'Linkedin',
    baseUrl: 'http://linkedin.com',
    type: 'external',
    icon: RiLinkedinFill,
  },
  {
    label: 'Slack',
    baseUrl: 'http://slack.com',
    type: 'external',
    icon: RiSlackFill,
  },
];

export const footerLinks: FooterLinks[] = [
  {
    label: 'App',
    links: footerApplicationLinks,
  },
  {
    label: 'Utilisateurs',
    links: footerUsersLinks,
  },
  {
    label: 'Informations',
    links: footerInformationLinks,
  },
  {
    label: 'Réseaux',
    links: footerSocialNetworkdsLinks,
  },
];
