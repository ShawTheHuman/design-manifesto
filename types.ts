
export interface Signer {
  id: string;
  firstName: string;
  lastInitial: string;
  location: string;
  signedAt: number;
}

export interface ManifestoPoint {
  title: string;
  description: string;
}
