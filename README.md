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

- Add the team member's picture to the `public` directory
- Images without a square aspect ratio will be clipped; manually clip the image if it doesn't show up centered
- Navigate to components/TeamSection.tsx
- Add the team member with `<TeamMember name={name} position={position} src={/NAME_OF_FILE} />`

## Adding Slides to the Lab Gallery

- Add the image to the public directory
- Images without a 16/9 aspect ratio will face the black bars of doom
- Navigate to components/Gallery.tsx
- Add the slide with `<Slide src={/NAME_OF_FILE} alt={DESCRIPTION_OF_IMAGE} />`

## Creating a News Block

- Navigate to components/NewsSection.tsx
- Add the news block with `<NewsBlock headline={headline} date={date}>{body text here}</NewsBlock>`
- Keep the number of NewsBlocks at a maximum of 6 by deleting the least recent one

## Publishing Changes
