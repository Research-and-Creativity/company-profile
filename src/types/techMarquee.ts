export interface TechMarqueeProps {
  items: TechItem[];
  speed?: number;
  bgColor?: string;
}

export interface TechItem {
  name: string;
  icon: string;
}