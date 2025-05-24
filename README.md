# User Account Management Application

This project demonstrates a simple user authentication and profile management flow using Next.js with client-side localStorage. It includes:

- A Home page
- User Signup (Create Account)
- User Login
- User Dashboard with Account Settings
- Profile Picture Upload and display from localStorage

---

## Table of Contents

- [Home Page](#home-page)
- [Create Account](#create-account)
- [Login](#login)
- [User Dashboard](#user-dashboard)
- [Profile Picture Upload](#profile-picture-upload)
- [How it Works](#how-it-works)
- [Screenshots](#screenshots)

---

## Home Page

The home page is the first screen users see. It provides navigation to either login or create a new account.

![Home Page](/screenshots/home.png)

---

## Create Account

Users can create an account by filling out a form with their name, email, password, and optionally upload a profile picture.

- Once the form is submitted, the user data (including profile pic as a base64 string) is stored in `localStorage` under the key `loggedInUser`.
- After successful account creation, users are redirected to the login page.

![Create Account](/screenshots/signup.png)

---

## Login

Users can log in with their registered email and password.

- If credentials match the stored user in `localStorage`, login is successful.
- The user is redirected to the user dashboard after login.

![Login](/screenshots/login.png)

---

## User Dashboard

After logging in, the user lands on the dashboard which displays their account information:

- Full name
- Email
- Profile picture (retrieved from localStorage)
- A message welcoming the user by their first name

Users can also update their profile picture here.

![User Dashboard](/screenshots/user-dashboard.png)

---

## Profile Picture Upload

Users can upload a new profile picture from their device.

- The selected image is converted to a base64 string and stored inside the user object in `localStorage`.
- The dashboard automatically updates to show the new profile picture.

![Profile Picture Upload](/screenshots/profile-pic-upload.png)

---

## How It Works

1. **Storage**:  
   User data is stored entirely on the client side using browser `localStorage`. The profile picture is stored as a base64 encoded string.

2. **Routing and Redirects**:  
   - After account creation, redirect to login.  
   - After login, redirect to dashboard.  
   - If a user tries to access dashboard without login, redirect to login.

3. **Image Handling**:  
   - Profile pictures are displayed using Next.js `<Image>` with `fill` and `objectFit` styles.  
   - Base64 images are used for easy client-side storage and retrieval.

4. **UI Components**:  
   - Responsive and clean UI styled with Tailwind CSS.  
   - Clear visual feedback for loading states and user actions.

---

## Screenshots

| Home Page          | Create Account      | Login              |
|--------------------|---------------------|--------------------|
| ![Home](/screenshots/home.png) | ![Create](/screenshots/signup.png) | ![Login](/screenshots/login.png) |

| User Dashboard     | Profile Pic Upload  |
|--------------------|--------------------|
| ![Dashboard](/screenshots/user-dashboard.png) | ![Upload](/screenshots/profile-pic-upload.png) |

---

## How to Run Locally

1. Clone the repo  
2. Install dependencies:  
   ```bash
   npm install
3. Run the development server:
   npm run dev
4. Open http://localhost:3000 in your browser.
