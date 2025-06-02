# Summer Chores (Callback Version)

This project demonstrates how to manage asynchronous tasks in JavaScript using callbacks, often referred to as "callback hell." The example simulates a sequence of summer chores, each taking a different amount of time to complete.

## Features

- Simulates a series of summer chores using asynchronous functions and callbacks.
- Each chore logs progress to the console.
- Demonstrates how callback nesting can lead to "callback hell."
- Each chore has a realistic simulated duration using `setTimeout`.

## Chores and Their Durations

| Chore                | Duration (ms) |
|----------------------|---------------|
| Mow the yard         | 2000          |
| Weed eat the yard    | 1500          |
| Trim the hedges      | 1000          |
| Collect wood         | 2500          |
| Water the garden     | 500           |

## How It Works

Each function represents a chore and takes a person's name, a completion flag (for chores after mowing), and a callback function. When a chore is completed, it logs a message and calls the next callback. If a chore is not completed, it logs a message indicating the person fell asleep.

The `doSummerChores` function starts the sequence:

```javascript
doSummerChores("Alex");
```

This will output each step to the console, simulating the time taken for each chore.

## Example Output

```
Alex mowed the yard.
Alex finished using the weed eater.
Alex finished trimming the hedges.
Alex finished collecting wood.
Alex finished watering the garden.
Alex finished all their chores!
```

## Usage

1. Clone this repository.
2. Open `callbackVersion.js` in your editor.
3. Run the file using Node.js:

   ```sh
   node callbackVersion.js
   ```

4. Observe the output in your terminal.

## License

This project is for educational purposes with Code:You.