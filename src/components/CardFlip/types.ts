export interface Card {
  title: string;
  details: string;
}

export interface CardFlipProps {
  cards: Card[];
  containerWidth?: string | number;
  cardColor?: string;
  buttonColor?: string;
  cardHeight?: number;
  cardWidth?: number;
  animationDuration?: number;
  detailWidth?: number;
  collapsedWidth?: number;
  cardTextColor?: string;
  detailTextColor?: string;
  className?: string;
} 