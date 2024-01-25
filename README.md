<span></span>

# 🎄<span style="color: lightgreen">Advent Moments</span> <span style="font-size: 20px">Webapp Documentation 📃</span>

## Overview

"Advent Moments" is a web application designed to provide users with a sustainable and personalized way to celebrate the advent season. Unlike traditional physical advent calendars, "Advent Moments" offers an eco-friendly digital alternative, allowing users to create and share custom advent calendars with loved ones. The app is tailored for individuals looking for a creative and sustainable way to count down to Christmas, offering a unique, personalized experience.

## Getting Started

### Setting Up the Environment ⚙️

1. **Clone the Repository**: Begin by cloning the repository to your local machine.
2. **Install Node.js**: Ensure that Node.js is installed on your system to handle the backend services.

### Installing Dependencies 🧩

1. **Install Packages**: Run `npm install` in the project directory to install required packages.
2. **Environment Variables (.env)**: The app uses database, and in order to use it's features then you would follow the following steps: - If you don't have MongoDB already on your machine, then Download and Install MongoDB and setup your DB - In the app root folder, create .env file and put inside your db URL/URI
   That should be suffecient to make thinks work smoothly.
3. **Running The App**: From the project folder using the Terminal, type `npm run dev` and enjoy <span style="color: lightgreen; font-weight: 600">Advent Moments</span>

## Usage 🔌

### Navigating the App 🧭

- **Home Page**: Start by navigating to the home page where you're greeted with an introduction to "Advent Moments".
- **Creating a Calendar**: Click on 'Start' to create a new advent calendar. Fill in details such as the calendar title and your name.
- **Personalizing Days**: Add personal messages, images, or links for each day of your advent calendar.
- **Sharing**: Once your calendar is ready, share it with friends and family using a unique link.

### Visual Guidance 👁️👁️

- **App Demo**: Feel free to watch the Demo for this project by visiting this
[Link](https://www.youtube.com/watch?v=CPnP36TiBUc)

## API

Note: "Advent Moments" currently does not provide external API access. This section will be updated with API endpoints and their functionalities when such features become available.

## Troubleshooting/FAQs 💡

- **Common Issues**:

  - _Problem_: Difficulty in saving changes.
    - _Solution_: Ensure you click 'Save' after editing each day and wait for the confirmation message.
  - _Problem_: Shared link not accessible.
    - _Solution_: Check if the calendar is set to 'Public' in settings.

- **FAQs**:
  - _Q: Can I edit my calendar after sharing?_
    - A: Yes, changes can be made until the set deadline.
  - _Q: Is there a limit to the number of calendars I can create?_
    - A: No, you can create as many as you like.

## Tech Stack Used 💻

### Frontend:

| React                                                                                                                        | NextJS                                                                                                                                     | TailwindCSS                                                                                                | Material-UI components                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width="150" height="auto" alt="Image" /> | <img src="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png" width="150" height="auto" alt="Image" /> | <img src="https://files.raycast.com/nwt9ncojkvwmjfkaada8upafvpnu" width="150" height="auto" alt="Image" /> | <img src="https://seeklogo.com/images/M/material-ui-logo-88EC9AE3DB-seeklogo.com.png" width="150" height="auto" alt="Image" />

### Backend:

| NextJS                                                                                                                                     | MongoDB                                                                                                                    | Mongoose                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png" width="150" height="auto" alt="Image" /> | <img src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" width="150" height="auto" alt="Image" /> | <img src="https://miro.medium.com/v2/resize:fit:1400/1*rL8Buu7o6jnG-TYV1WubeQ.png" width="150" height="auto" alt="Image" />

## Contribution Guidelines

- **Contributing**: If you're interested in contributing to the project, start by forking the repository and making your changes.
- **Coding Standards**: Adhere to the coding standards and guidelines provided in the repository's `CONTRIBUTING.md` file.
- **Pull Requests**: Submit a pull request with a clear list of what you've done. Include screenshots if you've changed any UI.

## Contact Information

- **Support and Feedback**: For support, feedback, or suggestions, please contact Diana@adventmoments.com
- **Issue Tracker**: Found a bug? Report it on our [issue tracker](https://github.com/diankita/advent-moments/issues/new).
