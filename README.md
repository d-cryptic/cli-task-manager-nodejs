# Global Digital Corps - Software Engineering Test Problem | Priority list

## How to run

### Installation and Setup

1. Install `node.js`
2. Go to the project folder and run `npm install`
3. Create Create symbolic link to the executable file
   **Command Prompt:**

```
> mklink task task.bat
```

**Powershell:**

```
> cmd /c mklink task task.bat
```

#### On \*nix:

Run the following command in your shell:

```
$ ln -s task.sh task
```

4. Try running tests.

Now run `npm test` and you will see all the tests failing. As you fill in each functionality, you can re-run the tests to see them passing one by one.

### Run and Steps

1. Run the app with `./task`
2. Open the help menu by `./task` or `./task help`
3. Add task by `./task add 5 "Study Networks"`
   - It is in the form of `./task add priority "task"`
4. List task by `./task ls`
5. Mark your task done using `./task done 5`
   - Form: `./task done taskNumber`
6. Delete your task: `./task del 5`
   - Form: `./task del taskNumber`
7. Show report `./task report`

## File and Code Structure

1. All the command functions are called via `task.js`
2. Pending tasks are stored in `task.txt` and completed task are stored in `completed.txt`
3. In `commands` folder:
   - `add.js` : Add task
   - `delete.js` : Delete task
   - `doneTask.js` : Done task
   - `help.js` : Help menu
   - `listTask.js` : List tasks
   - `reportTask.js` : Shows report
4. In `utils` folder: (all the side functions)
   - `appendTask.js` : appends the entered task in the file
   - `readTask.js` : reads tasks data from file
   - `writeData.js` : writes and updates data in the file with sorted value
   - `splitData.js` : Splits the data read from txt file and forms a javascript object array
     - `splitDataByLine.js`
     - `splitDataBySpace.js`
     - `sortData.js`
     - `sortTask.js`
     - `convertToNumber.js`

## Technology used:

1. `Javascript`
2. `NodeJs` for file manipulation

## For more info, read the official readme

- [Official Readme](./README-official.md)

#### Submitted by `Barun Debnath`

- [Email](barundebnath91@gmail.com)
- [Twitter](https://twitter.com/dcryptic_)
- [Github](https://github.com/d-cryptic)
- [Linkedin](https://linkedin.com/in/barundebnath)
