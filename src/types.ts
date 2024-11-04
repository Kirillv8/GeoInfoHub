export interface Country {
  code: string;
  name: string;
  native: string;
  phone: number;
  capital?: string;
  currency?: string;
  languages: Array<{ name: string; native: string }>;
  continent: { name: string };
  emoji: string;
  states: Array<{ name: string }>;
}
