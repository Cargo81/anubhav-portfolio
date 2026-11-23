# Anubhav Yadav - Portfolio

Full stack developer portfolio with a blog, testimonials and a contact form.

**Live site:** https://anubhav-portfolio-pi.vercel.app

## Tech stack
- Frontend: React, Vite, Tailwind CSS, Framer Motion
- Backend: Django, Django REST Framework, PostgreSQL
- Hosting: Vercel (frontend), Render (backend)

## Features
- Blog and testimonials managed from the Django admin
- Contact form saved to the database
- Responsive design

## Run locally

### Backend
    cd backend
    python -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    python manage.py migrate
    python manage.py runserver

### Frontend
    cd frontend
    npm install
    npm run dev
