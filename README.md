# 🌍 Travel Journal (React)

This is a **learning-oriented React project** where I practiced building interactive UI components, handling API requests, managing state, and implementing simple filtering logic.
The application displays a list of travel entries, each with images, location data, Google Maps links, trip dates, and expandable descriptions.

In addition to the basic layout, the project includes two extra features implemented during learning:
* **Country filter dropdown**
* **Live country information fetched from an external API (REST Countries API)**

## ✨ Features

* 🗂️ **Travel Entries Rendered from Data** <br>
All entries are dynamically loaded from ```data.js```.

* 📖 **Read More / Show Less Toggle** <br>
Long descriptions expand and collapse smoothly.

* 🌍 **Google Maps Link** <br>
Each entry includes a link to its exact location.

* 📌 **Country Filter** <br>
Users can filter entries by country using a simple dropdown.
Implemented using React state and dynamic filtering logic.

* 🧭 **Country Info Panel (API Integration)** <br>
Clicking Country info fetches live data from RESTCountries API and displays:
  * Capital
  * Region / Subregion
  * Population
  * Area
  * Flag
All shown in a card positioned next to the journal entry.

* 📱 **Responsive Layout** <br>
Works well on small screens thanks to responsive CSS rules.
<img width="1792" height="381" alt="mainvieww" src="https://github.com/user-attachments/assets/9feebede-561a-4a16-8650-bbdcb41c76ee" />



## 🧠 About This Project
This project was created to practice:
* Structuring React components
* Passing props and rendering dynamic lists
* Managing local state with ```useState```
* Making API calls inside components
* Conditional rendering
* Styling custom components (cards, filters, buttons)
* Implementing interactive UI behaviors <br>

It is intentionally kept simple, focusing on **learning React fundamentals step-by-step** rather than building a production-level application.

## 🗂️ Project Structure
```bash
src/
 ├── App.jsx         # Main component with filtering logic
 ├── App.css         # Component and layout styling
 ├── index.css       # Global styles
 ├── main.jsx        # App entry point (ReactDOM) 
 ├── data.js         # Static travel data
 └── assets/         # Images and icons
```
Key files include:

* **App.jsx** — handles the country dropdown, filtering logic, rendering JournalEntry components, and API calls for country info.
* **data.js** — contains all travel entries with local images.
* **App.css** — includes styling for layout, filters, country info card, and responsive behavior.

## ⭐ Final Notes

This project was built as part of my learning journey with React. <br>
I plan to improve it over time by experimenting with new features, API integrations, and UI enhancements. <br>
Feedback, suggestions, or contributions are always welcome!

