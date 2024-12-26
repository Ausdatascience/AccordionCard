/**
 * Card interface representing the structure of each card
 */
export interface Card {
  title: string;
  details: string;
}

/**
 * Props interface for the CardFlip component
 */
export interface CardFlipProps {
  /** Array of card data */
  cards: Card[];
  /** Container width (percentage or pixels) */
  containerWidth?: string | number;
  /** Card background color */
  cardColor?: string;
  buttonColor?: string;
  cardHeight?: number;
  cardWidth?: number;
  cardGap?: number;
  animationDuration?: number;
  detailWidth?: number;
  collapsedWidth?: number;
  cardTextColor?: string;
  detailTextColor?: string;
  className?: string;
} 