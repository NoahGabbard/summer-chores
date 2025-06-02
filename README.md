# Summer Chores

This project demonstrates how to manage asynchronous tasks in JavaScript using both callbacks and promises. The example simulates a sequence of summer chores, each taking a different amount of time to complete.

## Features

- Simulates a series of summer chores using asynchronous functions.
- Two implementations: one using callbacks ("callback hell") and one using Promises (with chaining).
- Each chore logs progress to the console.
- Demonstrates how callback nesting can lead to "callback hell" and how Promises can improve code readability.
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

Each function represents a chore and takes a person's name, a completion flag (for chores after mowing), and a callback function (callback version) or returns a Promise (promise version). When a chore is completed, it logs a message and calls the next callback or resolves the next Promise. If a chore is not completed, it logs a message indicating the person fell asleep.

### Callback Version

The `doSummerChores` function starts the sequence using callbacks:

```javascript
doSummerChores("Alex");
```

### Promise Version

The `doSummerChores` function starts the sequence using chained Promises:

```javascript
doSummerChores("Alex");
```

Both versions will output each step to the console, simulating the time taken for each chore.

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
2. Open `callbackVersion.js` or `promiseVersion.js` in your editor.
3. Run the desired file using Node.js:

   ```sh
   node callbackVersion.js
   ```
   or
   ```sh
   node promiseVersion.js
   ```

4. Observe the output in your terminal.

## License

This project is for educational purposes with Code:You.
