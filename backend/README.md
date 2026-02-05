# Portfolio Contact Form Backend

A FastAPI backend for handling contact form submissions from your portfolio website.

## Setup

### 1. Install Dependencies

```bash
cd backend
pip install -r requirements.txt
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your email credentials:

```bash
cp .env.example .env
```

For Gmail, you need to:
1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password at https://myaccount.google.com/apppasswords
3. Use this App Password in your `.env` file

### 3. Run Locally

```bash
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`

### 4. Test the API

Visit `http://localhost:8000/docs` for the interactive API documentation.

## Deployment

### Deploy to Railway

1. Create a new project on [Railway](https://railway.app)
2. Connect your GitHub repository
3. Add the environment variables in Railway's settings
4. Railway will automatically detect the Python app and deploy it

### Deploy to Render

1. Create a new Web Service on [Render](https://render.com)
2. Connect your GitHub repository
3. Set the build command: `pip install -r requirements.txt`
4. Set the start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Add environment variables in Render's settings

## Update Frontend

After deploying, update your Next.js frontend:

1. Create `.env.local` in your portfolio root:
```
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

2. Or update the `Contact.js` file directly with your API URL.

## API Endpoints

- `GET /` - Health check
- `GET /health` - Health check
- `POST /api/contact` - Submit contact form

### Contact Form Payload

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'd like to discuss a project..."
}
```
