# AI Dost Chat UI

A modern, mobile-first chat interface built with React, TypeScript, and Tailwind CSS.

## Features

### 🎨 **UI Components**
- **ChatHeader**: Navigation header with back button and AI Dost title
- **ChatMessage**: Reusable message bubbles with avatar support
- **ChatInput**: Message input with attachment and send functionality
- **BottomNavigation**: Tab-based navigation (Home/Chat/Settings)
- **Chat**: Main chat component integrating all parts

### 🚀 **Key Features**
- **Responsive Design**: Mobile-first approach matching the provided design
- **Reusable Components**: Modular architecture for easy maintenance
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Custom design system with your brand colors
- **React Router**: Separate routes for different pages
- **Real-time UI**: Smooth animations and transitions

### 🎯 **Design System**
- **Primary Color**: `#6c2bee` (Purple)
- **Background**: Light mode with `#f6f6f8` and `#161022` for dark
- **Typography**: Spline Sans font family
- **Border Radius**: Custom rounded corners (0.5rem, 1rem, 1.5rem)

## Routes

- `/` - Home page with welcome screen
- `/chat` - Main chat interface
- `/settings` - User settings and preferences

## Component Structure

```
src/
├── components/
│   ├── ChatHeader.tsx      # Header with back button and title
│   ├── ChatMessage.tsx     # Individual message bubbles
│   ├── ChatInput.tsx       # Message input with send button
│   ├── BottomNavigation.tsx # Bottom tab navigation
│   ├── Chat.tsx           # Main chat container
│   └── index.ts           # Component exports
├── pages/
│   ├── Home.tsx           # Landing page
│   └── Settings.tsx       # Settings page
└── App.tsx               # Main app with routing
```

## Usage

The chat UI is designed to match the provided screenshot exactly:

1. **Header**: Shows "AI Dost" with gradient text and back button
2. **Messages**: AI messages on left with avatars, user messages on right
3. **Input**: Gray input field with attachment icon and purple send button
4. **Navigation**: Bottom tabs with Home/Chat/Settings

## Customization

All components use Tailwind classes and can be easily customized through:
- Tailwind config (`tailwind.config.js`)
- Component props and styling
- CSS modules for complex styling (as requested)

## Development

```bash
npm run dev
```

Visit `http://localhost:5174/` to see the chat interface.
