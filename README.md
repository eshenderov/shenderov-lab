## Getting Started

### Installation

- Install [Node.js](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads)
- Install [Visual Studio Code](https://code.visualstudio.com/download)
- In your terminal, `cd` into your preferred directory
- Run `git clone https://github.com/alexbluo/shenderov-lab.git`
- `cd shenderov-lab`
- Run `npm i -g yarn` to install the Yarn package manager

### Running Locally

- Open the project directory in your code editor and make sure the command line is currently in the project root (PATH/.../shenderov-lab)
- Some notable VS Code commands are:
  - `` ctr/cmd + `  `` to open the command line
  - `code -r PATH_TO_PROJECT_DIRECTORY` (can copy from the top of File Explorer)` to open the project in VS Code
- Run `yarn` to install the newest project dependencies
- Run `yarn dev` to start the local development server
- Open `localhost:3000` in your browser to view the development page. Changes in the code will be automatically reflected in localhost but won't be publicly visible until pushed to GitHub

### Pushing Changes

- After making changes (instructions below), double check to make sure you are inside the root directory
- In the command line, enter:
- `git add .`
- `git commit -m "MESSAGE_DESCRIBING_CHANGES"`
- `git pull`
- `git push`
- Check the live website to make sure changes went through (takes a minute)

## Editing Research Section Content

### Adding Images

- Add the image to the `public` directory
- Images without a 16/9 aspect ratio will face the black bars of doom
- Navigate to `components/ResearchSection.tsx`
- Add the image path and description to the researchImages array
- `researchImages = [{src: "/NAME_OF_FILE", alt: "DESCRIPTION_OF_IMAGE", ...]`

### Adding Text

- Navigate to components/ResearchSection.tsx
- Add a text block with `<ResearchText>{BODY_TEXT}</ResearchText>`

## Adding a Team Member

- Add the team member's picture to the `public` directory
- Images without a square aspect ratio will be clipped; manually clip the image if it doesn't show up centered
- Navigate to components/TeamSection.tsx
- Add the team member with `<TeamMember name="name" position="position" src="/NAME_OF_FILE" />`

## Adding Slides to the Lab Gallery

- Add the image to the `public` directory
- Navigate to components/Gallery.tsx
- Add the slide with `<Slide src="/NAME_OF_FILE" alt="DESCRIPTION_OF_IMAGE" />`

## Creating a News Block

- Navigate to `components/NewsSection.tsx`
- Add the news block with `<NewsBlock headline="HEADLINE" date="DATE">{BODY_TEXT}</NewsBlock>`
- Keep the number of News blocks at a maximum of 6
