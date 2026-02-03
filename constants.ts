
import { ManifestoPoint, Signer } from './types';

export const MANIFESTO_POINTS: ManifestoPoint[] = [
  {
    title: "UX IS NOT A PERFORMANCE",
    description: "Designers are hired to solve complex problems, not to rehearse 45-minute slide decks. The 'Portfolio Presentation' measures theatricality and public speaking skills, not design thinking or technical execution."
  },
  {
    title: "THE PRIVILEGE TAX",
    description: "Presentations favor those with the most 'free' time to polish slides, high-end hardware, and the psychological safety to perform. It creates a filter that excludes caregivers, neurodivergent talent, and designers from non-traditional backgrounds."
  },
  {
    title: "UNPAID LABOR CRISIS",
    description: "Preparing a tailored presentation takes 10-20 hours of unpaid work per application. This disproportionately affects parents, caregivers, and those from lower-income backgrounds."
  },
  {
    title: "BIAS TOWARDS POLISH",
    description: "Human brains are wired to favor aesthetics. In a presentation format, a beautiful but dysfunctional UI often beats a brilliant solution presented via simpler artifacts."
  }
];

export const INITIAL_SIGNERS: Signer[] = [
  { id: '1', firstName: 'Sarah', lastInitial: 'K', location: 'San Francisco, CA', signedAt: 1715000000000 },
  { id: '2', firstName: 'Marcus', lastInitial: 'D', location: 'London, UK', signedAt: 1715001000000 },
  { id: '3', firstName: 'Elena', lastInitial: 'V', location: 'Berlin, DE', signedAt: 1715002000000 },
  { id: '4', firstName: 'Jordon', lastInitial: 'T', location: 'New York, NY', signedAt: 1715003000000 },
  { id: '5', firstName: 'Aiko', lastInitial: 'M', location: 'Tokyo, JP', signedAt: 1715004000000 },
  { id: '6', firstName: 'Riley', lastInitial: 'S', location: 'Austin, TX', signedAt: 1715005000000 },
  { id: '7', firstName: 'David', lastInitial: 'P', location: 'Sydney, AU', signedAt: 1715006000000 },
  { id: '8', firstName: 'Fiona', lastInitial: 'L', location: 'Dublin, IE', signedAt: 1715007000000 }
];
