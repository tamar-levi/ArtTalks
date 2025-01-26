
# ART TALKS 🎨💬

**ART TALKS** is an innovative platform for art lovers and creators to connect and discuss artworks. The site showcases an image gallery featuring various pieces of art, each accompanied by a brief description and the artist’s name. By clicking on any image, users can view it in full size and join a live chat to discuss the piece in real-time.

## Key Features 🖼️💬

- **Image Gallery**: View a collection of artworks, each card containing the image, artist's name, and a brief description.
- **Search Functionality**: Filter images by their title or the artist's name to easily find what you're looking for.
- **Picture Discussion Page**: Clicking on an image will open it in full size along with details and an integrated chat panel.
- **Real-Time Chat**: Engage in live conversations about the artwork using WebSockets to send and receive messages instantly.

## Detailed Features ⚡

### 1. Gallery Homepage
- **Hardcoded List of Pictures**: The homepage displays image cards, each featuring:
  - The image.
  - The artist's name.
  - A brief description (Lorem Ipsum).
  
- **Search Functionality**: Users can search for artworks by entering keywords related to the artwork’s name or the artist’s name.

### 2. Picture Discussion Page
- **Image Display**: When a user clicks on an image, the page will display:
  - The image in full size.
  - The artist’s name and artwork title.
  
- **Chat Interface**: A chat panel appears on the right side of the image, where users can:
  - Type and submit messages.
  - Discuss the artwork with other users in real time via WebSockets.

### Bonus Features (Optional) 🎁

- **Backend Integration**: Fetch the image list from the backend and display it on the frontend using an HTTP client.
- **Image Details on Mouseover**: Show additional information about each image (e.g., resolution, file size) when hovering over the image.

## Technologies Used 💻🚀

- **React**: Used to build the interactive user interface.
- **WebSocket**: Enables real-time chat functionality.
- **Node.js**: Server-side backend for handling communication and data.
- **CSS**: Styles the layout and presentation of the site.
- **HTTP Client (Optional)**: Fetch data from the backend (e.g., Axios, Fetch API).

## Installation Instructions 🚀

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/art-talks.git
Install dependencies: Navigate to the project directory and install the necessary packages:

npm install
Start the project: Launch the development server:


npm start
The application will be available at http://localhost:3000.

Contributing 🤝
We welcome contributions to improve this project! If you'd like to contribute, fork the repository and submit a pull request. If you encounter any issues, please open an issue in the GitHub repository.

