🌱 Green Habits Tracker

C346 – Mobile Application Development (CA2)

📌 Project Description

Green Habits Tracker is a full-stack mobile application built using React Native, Express.js, and MySQL.
The app encourages users to adopt and maintain eco-friendly daily habits aligned with the Singapore Green Plan 2030.

Users can log sustainable actions, categorise them, edit or delete entries, and track weekly progress through a clean, dashboard-style interface.

This project is developed as part of C346 – Mobile Application Development (CA2) at Republic Polytechnic.

🎯 Project Objectives

Promote environmentally sustainable daily habits

Encourage behavioural change through habit tracking

Apply mobile UI/UX best practices

Demonstrate full CRUD functionality

Implement RESTful API integration

Fulfil all CA2 technical and functional requirements

🇸🇬 Singapore Green Plan 2030 Alignment

The application supports the following Green Plan pillars:

🌿 Sustainable Living

Recycling

Reducing food waste

Using reusable items

Conscious daily lifestyle choices

⚡ Energy Reset

Turning off unused appliances

Saving electricity

Using public transport

💚 Green Economy (Behavioural Level)

Builds sustainability awareness

Encourages long-term eco-friendly routines

Reinforces positive environmental behaviour

📱 Application Features
🏠 Dashboard (Home Screen)

Displays all logged habits

Shows habit categories and dates

Allows quick navigation to:

Add Habit

Edit Habit

Statistics

User Guide

➕ Add Habit

Enter habit title

Select sustainability category

Choose completion date

Add optional reflection notes

Save habit to database

✏️ Edit Habit

Update existing habit details

Modify category, date, or notes

Save changes to database

🗑 Delete Habit

Delete unwanted habit entries

Confirmation modal prevents accidental deletion

📊 Statistics

Total habits logged

Weekly habit count

Top sustainability category

Weekly mini bar chart

📖 User Guide

Step-by-step explanation of app usage

Helps first-time users understand features

Improves usability and clarity

🧭 How to Use the App (User Guide)
1️⃣ Launch the App

App opens on the Dashboard

View all previously logged habits

2️⃣ Add a New Habit

Tap “+ Add Habit”

Enter a habit title (e.g. Used MRT instead of car)

Select a category (Energy, Transport, Recycling, etc.)

Pick a date

(Optional) Add notes

Tap Save Habit

3️⃣ Edit a Habit

Tap on an existing habit card

Update habit details

Tap Update Habit

4️⃣ Delete a Habit

Tap the delete icon on a habit card

Confirm deletion in the popup modal

5️⃣ View Statistics

Tap your avatar or Statistics screen

View weekly progress and insights

Monitor sustainability behaviour over time

6️⃣ Filter Habits by Category

Tap category chips on the Dashboard

View habits based on sustainability themes

🏗 System Architecture
[ React Native Mobile App ]
            ↓
[ Express.js REST API ]
            ↓
[ MySQL Database ]

Frontend communicates via Fetch API

Backend handles logic and database queries

MySQL stores persistent data

🔌 API Endpoints
Method	Endpoint	Description
GET	/habits	Fetch all habits
POST	/habits	Add new habit
PUT	/habits/:id	Update habit
DELETE	/habits/:id	Delete habit
GET	/categories	Fetch categories

All APIs follow RESTful design principles.

🗄 Database Design
📁 categories table
Field	Type	Description
id	INT (PK)	Category ID
name	VARCHAR	Category name
description	TEXT	Sustainability purpose
📁 habits table
Field	Type	Description
id	INT (PK)	Habit ID
title	VARCHAR	Habit title
category_id	INT (FK)	Linked category
date	DATE	Completion date
notes	TEXT	Optional notes
created_at	TIMESTAMP	Record timestamp
🧰 Technologies Used
Frontend

React Native

Expo

React Navigation

FlatList

Fetch API

Backend

Node.js

Express.js

mysql2 (promise)

Database

MySQL (Local / Aiven)

Version Control

Git

GitHub

⚙️ Installation & Setup
Backend (Server)
npm install
node server.js

Ensure .env file includes:

DB_HOST

DB_USER

DB_PASSWORD

DB_NAME

DB_PORT

Mobile App (Frontend)
npm install
npx expo start

Scan QR code using Expo Go

Or run on Android emulator

👥 Team Contribution

This project is a solo project.

Name	Contribution
Weijie	UI/UX design
Weijie	React Native frontend development
Weijie	Backend API (Express.js)
Weijie	MySQL database design
Weijie	API integration
Weijie	Testing & debugging
Weijie	Documentation

All components were designed, implemented, and tested by the author.

✅ CA2 Requirement Mapping
CA2 Requirement	Implementation
Mobile App	React Native
Backend API	Express.js
Database	MySQL
CRUD	Full CRUD on habits
Navigation	React Navigation
Real-world context	Singapore Green Plan 2030
🚀 Future Enhancements

Habit streak tracking

Weekly sustainability goals

Push notifications

User authentication

Cloud-based user accounts

👤 Author Information

Name: Weijie
Module: C346 – Mobile Application Development
Institution: Republic Polytechnic
Academic Year: AY2025/2026
