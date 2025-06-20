# Content Creator Interface

A React-based web application for generating content in various writing styles, including Tim Ferriss, Shane Parrish, Mark Manson, and David Perell.

## Features

- **Style Selection Interface**: Choose from 5 distinct writing styles:
  - Super Writer GPT (Tim Ferriss Style)
  - Super Writer GPT (Tim Ferriss Style) + James Clear (20%)
  - Insight Writer GPT (Shane Parrish Style)
  - Brutally Honest GPT (Mark Manson Style)
  - Idea Curator GPT (David Perell Style)

- **Content Prompt Input**: Enter topics or ideas to generate content about

- **Generated Content Display**: View the AI-generated content in the selected style

- **Export Options**: Copy to clipboard or save to history

- **History Tracking**: Keep track of previously generated content

## Tech Stack

- **Frontend**: React with TypeScript
- **UI Components**: shadcn-ui
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: Lovable platform

## Project Structure

```
content-creator/
├── public/
├── src/
│   ├── components/
│   │   ├── StyleSelector.tsx
│   │   ├── ContentInput.tsx
│   │   ├── ContentOutput.tsx
│   │   ├── ExportOptions.tsx
│   │   └── HistoryList.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── lib/
│   │   └── writing-styles.ts
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/dxaginfo/content-creator-web-app.git
cd content-creator-web-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deployment

This application is configured for deployment on the Lovable platform:

1. Build the project using `npm run build`
2. Open the Lovable dashboard
3. Click "Share" or "Publish"
4. Follow the prompts to deploy

## Writing Styles

The application includes carefully crafted prompts for each writing style:

### Tim Ferriss Style
Conversational, tactical, focused on practical advice and personal experimentation.

### Tim Ferriss + James Clear Style
Combines Ferriss's conversational approach with Clear's structured habit-formation framework.

### Shane Parrish Style
Analytical, reflective, focused on mental models and decision-making frameworks.

### Mark Manson Style
Blunt, irreverent, direct with philosophical insights that challenge conventional thinking.

### David Perell Style
Reflective, metacognitive, focused on the intersection of ideas, technology, and creativity.

## Testing Checklist

- [x] Style selection functionality
- [x] Content generation for each style
- [x] Responsive design
- [x] Error handling
- [x] Export functionality