import portfolioData from '../portfolio.json';
import { PortfolioConfig } from '../types/portfolio';

/**
 * Get the portfolio configuration
 * This reads from portfolio.json file
 */
export function getPortfolioConfig(): PortfolioConfig {
  return portfolioData as PortfolioConfig;
}

/**
 * Helper functions to access specific parts of the config
 */
export const config = getPortfolioConfig();

export const getProfile = () => ({
  name: config.name,
  username: config.username,
  tagline: config.tagline,
  bio: config.bio,
  location: config.location,
  yearsOfExperience: config.yearsOfExperience,
});

export const getSEO = () => {
  const seo = { ...config.seo };
  if (process.env.NEXT_PUBLIC_APP_URL) {
    seo.canonicalUrl = process.env.NEXT_PUBLIC_APP_URL;
  }
  return seo;
};

export const getHomePage = () => config.homePage;

export const getContact = () => config.contact;

export const getSocialLinks = () => config.socialLinks;

export const getExperience = () => config.experience;

export const getEducation = () => config.education;

export const getSkills = () => config.skills;

export const getTopSkills = (count?: number) => config.topSkills.slice(0, count);

export const getProjectsFromConfig = () => config.projects || [];

export const getGistConfig = () => config.gist;
