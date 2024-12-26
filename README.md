# React Accordion CardFlip

An elegant and customizable accordion card component for React.

## Installation

```bash
npm install react-accordion-cardflip
```

## Usage

```tsx
import { CardFlip } from 'react-accordion-cardflip';

const cards = [
  {
    title: "Card 1",
    details: "Details for card 1"
  },
  {
    title: "Card 2",
    details: "Details for card 2"
  }
];

function App() {
  return (
    <CardFlip 
      cards={cards}
      containerWidth={90}
      cardHeight={200}
      cardColor="#76B900"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| cards | Card[] | [] | Array of card data |
| containerWidth | string \| number | '60%' | Container width |
| cardColor | string | '#76B900' | Card background color |
| buttonColor | string | '#007bff' | Button color |
| cardHeight | number | 300 | Card height in pixels |
| animationDuration | number | 1 | Animation duration in seconds |
| detailWidth | number | 200 | Content area width in pixels |
| collapsedWidth | number | 10 | Collapsed width percentage |
| cardTextColor | string | '#ffffff' | Card text color |
| detailTextColor | string | '#000000' | Detail text color |
| className | string | '' | Additional CSS class |

## Features

- 🎨 Fully customizable styles
- 📱 Responsive design
- 🎭 Smooth animations
- ⚙️ Rich configuration options
- 💻 Easy to integrate
- 📝 TypeScript support

## Development

1. Clone the repository:
```bash
git clone https://github.com/Ausdatascience/AccordionCard.git
cd AccordionCard
```

2. Install dependencies:
```bash
npm install
```

3. Build the package:
```bash
npm run build
```

## Testing

```bash
npm test
```

## License

MIT © [Ausdata Science]

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Support

If you have any questions or need help, please open an issue in the GitHub repository.
