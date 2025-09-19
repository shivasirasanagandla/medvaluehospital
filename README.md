# ValueMed Healthcare Solutions

## Project Overview

A modern healthcare consulting website built with React, TypeScript, and Tailwind CSS, featuring hospital consulting services, medical education, and contact information with an interactive Google Map.

## Features

- Responsive design for all devices
- Interactive Google Map with location marker
- Contact form with email functionality
- Service pages for healthcare consulting services
- Medical education resources

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Google Maps API key

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd medicover
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your Google Maps API key:
     ```
     VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
     ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Google Maps API Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Geocoding API
   - Places API
4. Go to the Credentials page
5. Create an API key
6. Restrict the API key to your domain
7. Add the API key to your `.env` file

## DNS Configuration

Add the following DNS records to your domain's DNS settings:

```
TXT  @  MS=ms35881102
MX   @  0 valumedhealthcare-com.mail.protection.outlook.com
TXT  @  v=spf1 include:spf.protection.outlook.com -all
CNAME  autodiscover  autodiscover.outlook.com
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
# Google Maps API Key
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Email Configuration (if needed)
EMAIL_SERVICE=your-email-service
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
EMAIL_TO=recipient@example.com
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Deployment

This project is configured for deployment on Vercel, Netlify, or any static hosting service.

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/aee08fa2-519a-4e04-a816-8c7f09d9130a) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/aee08fa2-519a-4e04-a816-8c7f09d9130a) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
