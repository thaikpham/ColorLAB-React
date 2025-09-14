export interface RecipeData {
  id: string;
  name: {
    vi: string;
    en: string;
  };
  formattedName: string;
  description: {
    en: string;
    vi: string;
  };
  type: 'color' | 'bw';
  contrast: 'low' | 'soft' | 'normal' | 'medium' | 'high' | 'very-high';
  saturation:
    | 'very-low'
    | 'low'
    | 'normal'
    | 'moderate'
    | 'muted'
    | 'faded'
    | 'high'
    | 'vibrant'
    | 'super-saturated'
    | 'maximum'
    | 'extreme';
  tags: string[];
  whiteBalance: string;
  settings: {
    'Black level': string;
    Gamma: string;
    'Black Gamma': string;
    Knee: string;
    'Color Mode': string;
    Saturation: string;
    'Color Phase': string;
  };
  colorDepth: {
    R: string;
    G: string;
    B: string;
    C: string;
    M: string;
    Y: string;
  };
  detailSettings: {
    Level: string;
  };
  personalityColor: string;
  coords: {
    x: number;
    y: number;
  };
  trending?: boolean;
  radius?: number;
}
