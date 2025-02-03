# Counter App

A simple JavaScript-based counter application with **Start**, **Pause**, and **Stop** functionalities.

## Features

- **Start Button**: Starts counting from 0 and increments every second.
- **Pause Button**: Pauses the counter without resetting it.
- **Stop Button**: Stops the counter and resets the value to 0.
- **Prevents multiple intervals**: Ensures that multiple timers are not created when the Start button is clicked multiple times.
- **Button state management**: Disables or enables buttons based on the current state for a better user experience.

## Technologies Used

- **HTML** - Structure of the web page.
- **CSS** - (Optional) You can style the buttons and layout.
- **JavaScript** - Implements counter logic using `setInterval` and `clearInterval`.

## Installation & Usage

1. **Download or Clone the Repository**

   ```sh
   git clone https://github.com/yourusername/counter-app.git
   cd counter-app
   ```

2. **Open the `index.html` File in a Browser**
   - You can double-click `index.html` or serve it using a local server.

## Code Explanation

### **JavaScript Logic**

- Uses `setInterval` to increment a counter every second.
- Uses `clearInterval` to stop or pause the counter.
- Prevents multiple intervals by checking if an interval is already running.
- Updates button states dynamically to enhance UX.

```javascript
start.addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(() => {
      val += 1;
      counter.textContent = val;
    }, 1000);
    start.disabled = true;
    pause.disabled = false;
    stop.disabled = false;
  }
});
```

## Future Enhancements

- Add CSS for a more appealing UI.
- Add sound effects when clicking buttons.
- Allow users to set a custom time interval.
