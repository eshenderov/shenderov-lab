## Getting Started

- Make sure [Node.js](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads) are installed by running `node -v` and `git --version` in the terminal. Install if command not found.
- `cd` into your preferred directory
- Run `git clone https://github.com/alexbluo/shenderov-lab.git`
- `cd shenderov-lab`
- Run `npm i -g yarn` to install the Yarn package manager
- Run `yarn` to install the project dependencies
- Run `yarn dev` to start the local development server
- Open localhost:3000

## Editing Research Section Content

## Adding a Team Member

TODO: include details about aspect ratio after testing

- Add the team member's picture to the `public` directory
- Navigate to `components/TeamSection.tsx`
- Add the team member with `<TeamMember name={name} position={position} src={/NAME_OF_PICTURE_FILE} />`

## Adding Slides to the Lab Gallery

TODO: extra slides into component and test black bars for non 16/9 aspect ratio, update details

- Add the image to the `public` directory
- Navigate to components/Gallery.tsx
- 

## Creating a News Block

- Navigate to `components/NewsSection.tsx`
- Add the news block with `<NewsBlock headline={headline} date={date}>{body text here}</NewsBlock>`
- Delete the least recent news block in order to keep it at 6

## Publishing Changes
