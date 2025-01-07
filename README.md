# MC Server Info

## Description

MC Server Info is a web application built with Next.js and Supabase that allows users to check the status of Minecraft servers. The application provides a user-friendly interface to search for both Java and Bedrock servers, displaying relevant information such as server status, player count, and more.

## Features

- Check the status of Minecraft servers (Java and Bedrock)
- User authentication with Supabase
- Responsive design using Tailwind CSS
- Real-time data fetching with React Query
- Environment variable management for secure API keys
- Save servers to easily check once authenticated

## Demo

You can view a fully working demo at [demo-nextjs-with-supabase.vercel.app](https://demo-nextjs-with-supabase.vercel.app/).

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- A Supabase account and project

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/mc-server-info.git
   cd mc-server-info
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Set up your Supabase project:

   - Create a new Supabase project at [Supabase Dashboard](https://app.supabase.com).
   - Create a table named `server_addresses` with the necessary fields.
   - Obtain your Supabase URL and Anon Key from the API settings.

4. Create a `.env.local` file in the root of the project and add your Supabase credentials:

   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

6. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Usage

- Use the search bar to enter the server address you want to check.
- Select the server version (Java or Bedrock) from the dropdown menu.
- Click the "Check" button to fetch the server status.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- [Next.js](https://nextjs.org) - The React framework for production
- [Supabase](https://supabase.com) - The open-source Firebase alternative
- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework
- [React Query](https://react-query.tanstack.com) - Data fetching and state management for React
