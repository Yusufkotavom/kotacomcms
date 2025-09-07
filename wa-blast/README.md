# WhatsApp Blast CRM

A professional WhatsApp bulk messaging and customer relationship management system built with Next.js, TypeScript, and Prisma.

## Features

### 🔗 WhatsApp Integration
- Connect to WhatsApp Web using QR code
- Send individual and bulk messages
- Real-time connection status monitoring
- Session management

### 👥 Contact Management (CRM)
- Add, edit, and delete contacts
- Organize contacts into groups
- Tag contacts for better categorization
- Search and filter contacts
- Contact notes and additional information

### 📝 Template Management
- Create message templates with variables
- Dynamic content replacement ({{name}}, {{phone}}, {{email}})
- Template library for reuse
- Variable extraction from content

### 🚀 Campaign Management
- Create messaging campaigns
- Schedule campaigns for later execution
- Select recipients from contacts and groups
- Campaign status tracking (draft, running, completed, paused, cancelled)
- Real-time campaign progress monitoring

### 📊 Dashboard & Analytics
- Overview statistics (total contacts, campaigns, messages)
- Campaign performance metrics
- Message delivery tracking
- Visual dashboard with modern UI

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: SQLite (development), PostgreSQL (production ready)
- **WhatsApp Integration**: whatsapp-web.js
- **UI Components**: Radix UI, Lucide React icons
- **Styling**: Tailwind CSS with custom components

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- WhatsApp mobile app (for QR code scanning)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd wa-blast
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Initialize the database:
```bash
npx prisma migrate dev
npx prisma generate
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# WhatsApp Web
WHATSAPP_SESSION_PATH="./sessions"
WHATSAPP_QR_TIMEOUT=60000

# App Configuration
NODE_ENV="development"
```

## Usage

### 1. Connect WhatsApp

1. Click "Connect WhatsApp" on the dashboard
2. Scan the QR code with your WhatsApp mobile app
3. Wait for the connection to be established
4. You'll see "Connected to WhatsApp" status

### 2. Manage Contacts

1. Go to the "Contacts" tab
2. Click "Add Contact" to create new contacts
3. Fill in contact details (name, phone, email, notes, tags)
4. Organize contacts into groups for easier management

### 3. Create Templates

1. Go to the "Templates" tab
2. Click "New Template" to create message templates
3. Use variables like {{name}}, {{phone}}, {{email}} for dynamic content
4. Save templates for reuse in campaigns

### 4. Launch Campaigns

1. Go to the "Campaigns" tab
2. Click "New Campaign" to create a campaign
3. Select a template and recipients (contacts/groups)
4. Schedule the campaign or start immediately
5. Monitor campaign progress in real-time

## API Endpoints

### WhatsApp
- `GET /api/whatsapp/status` - Get connection status
- `POST /api/whatsapp/connect` - Initiate connection
- `POST /api/whatsapp/send` - Send individual message

### Contacts
- `GET /api/contacts` - List contacts with pagination
- `POST /api/contacts` - Create new contact
- `GET /api/contacts/[id]` - Get contact details
- `PUT /api/contacts/[id]` - Update contact
- `DELETE /api/contacts/[id]` - Delete contact

### Groups
- `GET /api/groups` - List groups
- `POST /api/groups` - Create new group

### Templates
- `GET /api/templates` - List templates
- `POST /api/templates` - Create new template

### Campaigns
- `GET /api/campaigns` - List campaigns
- `POST /api/campaigns` - Create new campaign
- `POST /api/campaigns/[id]/start` - Start campaign

## Database Schema

The application uses the following main entities:

- **User**: User accounts and WhatsApp sessions
- **Contact**: Contact information and metadata
- **Group**: Contact groups for organization
- **Template**: Message templates with variables
- **Campaign**: Messaging campaigns
- **BlastJob**: Individual message delivery jobs
- **Message**: Message history and tracking

## Development

### Database Management

```bash
# Create a new migration
npx prisma migrate dev --name migration_name

# Reset database
npx prisma migrate reset

# View database in Prisma Studio
npx prisma studio
```

### Code Structure

```
src/
├── app/                 # Next.js app directory
│   ├── api/            # API routes
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   └── ...            # Feature components
├── lib/               # Utility functions
│   ├── prisma.ts      # Database client
│   ├── whatsapp.ts    # WhatsApp service
│   └── utils.ts       # Helper functions
└── prisma/            # Database schema and migrations
```

## Deployment

### Production Setup

1. Set up a PostgreSQL database
2. Update `DATABASE_URL` in environment variables
3. Set `NODE_ENV=production`
4. Deploy to your preferred platform (Vercel, Railway, etc.)

### Environment Variables for Production

```env
DATABASE_URL="postgresql://username:password@localhost:5432/wa_blast"
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your-production-secret"
NODE_ENV="production"
```

## Security Considerations

- WhatsApp sessions are stored locally and encrypted
- Rate limiting should be implemented for production use
- Input validation and sanitization
- Secure environment variable management
- Regular security updates

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.

## Roadmap

- [ ] User authentication and authorization
- [ ] Advanced analytics and reporting
- [ ] Message scheduling and automation
- [ ] Multi-language support
- [ ] API rate limiting
- [ ] Webhook integration
- [ ] Mobile app
- [ ] Advanced template editor
- [ ] Contact import/export
- [ ] Campaign A/B testing