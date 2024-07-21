# Gulp.js Modern Web Starter Kit

This project aims to facilitate modern web development by automating tasks such as Sass compilation, asset management through copying jQuery, images, and JS files, and BrowserSync integration using Gulp.

Existing Gulp starter kits on GitHub often face compatibility issues with the latest Node.js versions. This project was created to help overcome those issues. You can customize this project by adding libraries and modifying it to suit your needs.

## Tools and Libraries Used

* Gulp: Automation tool
* gulp-sass: Sass compiler
* browser-sync: Development server and browser sync
* jQuery: jQuery library

## Installation

Before running the project, you need to install the dependencies using the following command:

```bash
npm install
```

## Running the Project

To run the project, use the following commands:

* `gulp` or `npm start`: Executes all Gulp tasks.
* `gulp sass`: Compiles Sass files and saves the output in `dist/assets/css`.
* `gulp jquery`: Copies the jQuery library to `dist/assets/js`.
* `gulp images`: Copies image files to `dist/assets/images`.
* `gulp js`: Copies JS files to `dist/assets/js`.
* `gulp browser-sync`: Initializes BrowserSync and starts the development live server.

When you run the `gulp` command, resources in the `src` directory will be built and moved to the `dist` directory.

## Notes and Considerations

* All resources used in the project should be located within the `src` directory.
* Changes will be reflected in the browser in real-time as tasks are executed.

## Deployment

After completing the final coding, deploy the built `dist` directory in your desired format.
