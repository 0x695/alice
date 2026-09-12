# Alice IRC Bot

An old, simple IRC bot written in **Node.js** using the [`irc`](https://www.npmjs.com/package/irc) package.

This repository is preserved as an **archive of an old project**. It is not actively maintained and may no longer work with modern Node.js versions or IRC servers.

## About

Alice was a small IRC bot designed to:

* Connect to an IRC server and channel
* Announce users joining the channel
* Welcome new users
* Respond to messages containing the word `morning`
* Report the current date and time when responding

The bot was intentionally very simple and appears to have been an early Node.js/IRC experiment.

## Features

### Welcome messages

When someone joins the configured IRC channel, Alice responds with:

```text
Hello <username>, welcome to <channel>.
```

The bot ignores users whose names are included in its configured bot-name list.

### Morning response

When a channel message contains `morning`, Alice responds with:

```text
Good morning <username>, today is <current date/time>.
```

The date and time are generated using JavaScript's built-in `Date()` function.

## Requirements

The original project requires:

* Node.js
* The [`irc`](https://www.npmjs.com/package/irc) Node.js package

Install the dependency with:

```bash
npm install irc
```

## Configuration

The original configuration is contained directly in `index.js`:

```javascript
const IRC_CHANEL = '#channel';
const IRC_HOST = 'irc.server.ndd';
const IRC_USER = 'Alice';

const botNames = ['alice','s'];
```

These values would need to be replaced with the appropriate IRC server, channel, nickname, and bot names.

## Running

With the dependency installed:

```bash
node index.js
```

The bot connects to the configured IRC server and joins the configured channel.

## Project Status

**Archived / Discontinued**

This is an old project preserved for historical purposes.

There are no plans to modernize, maintain, or extend it. The code is kept largely as it was so the repository represents the original project.

## Notes

The code uses the Node.js [`irc`](https://www.npmjs.com/package/irc) library and an older event-listener style API.

The repository should therefore be considered **legacy code** rather than a current example of Node.js or IRC bot development.

## License

No license was specified in the original project.

Unless a license is added, the repository should be treated as **all rights reserved**.
