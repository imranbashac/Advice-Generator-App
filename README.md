# Advice Generator App

This is a simple **Advice Generator App** that fetches random pieces of advice from an API and displays them to the user. The app is built using **HTML**, **CSS**, and **JavaScript**.

## Features

- Fetches random advice from the [Advice Slip API](https://api.adviceslip.com/).
- Displays the advice along with its unique ID.
- Interactive dice button to generate a new piece of advice.
- Smooth "loading" message while fetching advice.
- Fully responsive design using basic CSS styling.

---

## Demo

You can view the live demo of the app [here](https://imranbashac.github.io/Advice-Generator-App/).

![App Preview](./preview-image.png)

---

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

---

## Setup Instructions

Follow these steps to set up and run the app locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/advice-generator-app.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd advice-generator-app
   ```

3. **Open the Project in Your Browser:**
   Simply open the `index.html` file in your favorite browser. No additional setup is required.

---

## How It Works

1. When the page loads, it fetches a random piece of advice using the [Advice Slip API](https://api.adviceslip.com/).
2. The advice is displayed along with its unique ID.
3. When the user clicks the dice button, a new piece of advice is fetched and displayed.
4. If the API call fails, an error message is shown to the user.

---

## Project Structure

```
|-- advice-generator-app
    |-- index.html          # Main HTML file
    |-- styles.css          # Styling for the app
    |-- script.js           # JavaScript logic for fetching advice
    |-- images/             # Icons and images (e.g., dice icon)
    |-- README.md           # Project documentation
```

---

## API Reference

The app uses the **Advice Slip API** to fetch random advice.

- **Endpoint:** `https://api.adviceslip.com/advice`
- **Response Format:**
  ```json
  {
    "slip": {
      "id": 117,
      "advice": "Don’t give up on your dreams."
    }
  }
  ```

---

## Customization

You can customize the app by:

1. Changing the **color scheme** in `styles.css`.
2. Adding new features, like saving favorite advice or sharing on social media.

---

## Screenshots

![App Screenshot](./screenshot1.png)

---

## Future Enhancements

Some ideas for future improvements include:

- Adding a "favorites" feature to save advice.
- Allowing users to share advice on social media platforms.
- Improving the user interface using **Bootstrap** or **Tailwind CSS**.

---

## Contribution

Contributions are welcome! If you’d like to contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Thanks to [Frontend Mentor](https://www.frontendmentor.io/) for inspiring this project.
- Special thanks to the creators of the [Advice Slip API](https://api.adviceslip.com/).

