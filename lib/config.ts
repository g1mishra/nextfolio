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

export const getSEO = () => config.seo;

export const getHomePage = () => config.homePage;

export const getContact = () => config.contact;

export const getSocialLinks = () => config.socialLinks;

export const getExperience = () => config.experience;

export const getEducation = () => config.education;

export const getSkills = () => config.skills;

export const getTopSkills = (count?: number) => config.topSkills.slice(0, count);

export const getGistConfig = () => config.gist;
