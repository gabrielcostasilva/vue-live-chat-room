# Vue Live Chatroom
This project is based on the second project developed by [The Net Ninja (Shaun Pelling)](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg) on his excelent [Udemy course](https://www.udemy.com/course/build-web-apps-with-vuejs-firebase).

## Project Overview

### Login Screen

<img src="./pics/LoginScreen.png" />

To use the app, one must authenticate. The authentication is based on email and password. There is no client-side validation for email and/or password values. There are submitted to Firebase straightaway as informed by the user.

### Signup Screen

<img src="./pics/SignupScreen.png" />

If the user has no account, they can create one by signing up. The signup screen is accessed via a link, available on the bottom of the login screen. There is no e-mail and/or password validation on the client side. However, as Firebase is used, it may validate according to their rules.

### Chatroom

<img src="./pics/Chatroom.png" />

Once the user logs in, they are redirected to the chatroom. At the top of the screen, one can see the user's display name and e-mail. At the top left-hand corner, there is the logout button. 

At the center, one can find the messages exchanged by users. The app considers one single chatroom. In practice, it means that all messages are visible to all users.

Finally, at the bottom, there is an input for the message. The message is submitted when the user hits the `<Enter>` key.

## Views, Components & Composables Overview

<img src="./pics/ComponentTree.png" />

The project consists of two main _views_: `Welcome` and `Chatroom` (`.vue`). The `App.vue` only uses the `router-view` to load the views. The `Welcome` _view_ consists of two components: `SignupForm` and `LoginForm`, which respectively represents the signup and login screen. The signup and login logic is in the `useSignup` and `useLogin` composables, respectively.

The `Chatroom` _view_ consists of three components. The `Navbar` component represents the top of the chatroom screen. It uses the `getUser` composable to identify the user currently logged in. It also uses the `useLogout` composable to log the current user out. The `Chatwindow` component represents the central part of the chatroom screen. It uses the `getCollection` composable to retrieve messages in real time. Finally, the `NewChatForm` _view_ represents the bottom of the chatroom screen. It uses the `getUser` composable to identify the message author. It also uses the `useCollection` composable to send the message to Firestore.

## Views, Components & Composables Details

This project extensively uses two of Vue 3 new features: the composition API and composables.

### Views
- `Welcome` is the main _view_. It uses a boolean property to switch between login and signup screens. Whereas the login screen is controlled by the `LoginForm` component, the signup screen is controlled by the `SignupForm`. Both components fire an event when their tasks are successfully completed. On this event, the `Welcome` _view_ invokes the router to send the user to the `Chatroom` _view_.

- `Chatroom` is the place where users exchange messages. This _view_ constantly _watches_ the currently logged user. In case of logout, the router sends the user back to the `Welcome` _view_. The logout is managed by the `Navbar` component. In addition to the `Navbar`, this _view_ also groups the `ChatWindow` and the `NewChatForm`. The _view_ has no further logic and/or components.

### Components

- `LoginForm` is responsible for receiving the user login data, and passing them to the `useLogin` composable. It exposes an error object in case of login issues. It also fires a `login` event in case of success.

- `SignupForm` is responsible for receiving the user signup data, and passing them to the `useSignup` composable. Like the `LoginForm`, this component also exposes an error object and fires an event (`signup`) when there is a signup error and a successfull signup, respectivelly.

- `Navbar`

- `ChatWindow`

- `NewChatForm`

### Composables

- `useLogin`

- `useSignup`

- `useLogout`

- `getCollection`

- `useCollection`

- `getUser`

## Communication Flow

## File Structure

<img src="./pics/FileStructure.png" />

## Dependencies

## Data

## Running the Project Locally
