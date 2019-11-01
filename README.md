# TogglForGoogleAppsScript

This is a library for handling [Toggl](https://toggl.com/) API with Google Apps Script

The following APIs are currently supported:

- Time entries
  - start a time entry
  - stop a time entry
  - get running time entry
- Users
  - get current user data and time entries
- Workspaces
  - get user workspaces

## How to add a library

1. Open the script editor.
1. Select a library from the resource menu.
1. Enter `MOTMJ6sZlZFwTl19-YkEtnR2gcmNGzY4e` in the input field of "Add a library".
1. Click the "Add" button.
1. Select the latest version.
1. Click the "Save" button.

## Usage

First, get toggl object with API token.

```javascript
const toggl = Toggl.getToggl('toggl api token');

```

### Time entries

#### Start time entry

Calling the startTimeEntry function with a TimeEntry object as an argument starts measurement.

Time Entry properties required for this function:

- description
  - Details of measurement target.
- created_with
  - the name of your client app

```javascript

const timeEntries = {
    description: 'time entry sample',
    created_with: 'your client app'
};

toggl.startTimeEntry(timeEntries);

```

#### Stop time entry

```javascript

toggl.stopTimeEntry();

```

#### Get running time entry

```javascript

const runningTimeEntry = toggl.getRunningTimeEntry();

```

### Users

#### Get current user data and time entries

```javascript

const currentUser = toggl.getCurrentUser();

```

### Workspaces

#### Get user workspaces

```javascript

const workspaces = toggl.getAllWorkspaces();

```

## AUTHER

[namahu](https://github.com/namahu)

## LICENSE

MIT
