# Bear Watch

Bear Watch is a React application built with Next.js designed to help keep people safe when walking home alone at night.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (LTS version)
- npm or yarn

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/alexandrialin/bear-watch
   cd bear-watch/react
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

### Environment Variables

The application requires setting up environment variables for Twilio and Google Maps APIs. Create a .env.local file in the react folder and add the following:

```
NEXT_PUBLIC_TWILLIO_AUTH=your_twilio_auth_token
NEXT_PUBLIC_TWILLIO_ACCOUNT=your_twilio_account_sid
NEXT_PUBLIC_API_GOOGLE_MAPS=your_google_maps_api_key
```

Replace `your_twilio_auth_token`, `your_twilio_account_sid`, and `your_google_maps_api_key` with your actual Twilio and Google Maps credentials.

### Running the Application

To start the server, run the following command in the react folder:

```bash
Copy code
npm run dev

# or

yarn dev
```

This will start the development server on http://localhost:3000. Open your browser and visit the URL to view the application.

### License

This project is licensed under the MIT License - see the LICENSE file for details

### Acknowledgments

This project was built by Alexandria Lin, Olivia Huang, Timothy Guo, and Jared Martin as part of CS 160/260 at UC Berkeley.
