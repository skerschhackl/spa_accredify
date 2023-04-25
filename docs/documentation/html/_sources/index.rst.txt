.. spa documentation master file, created by
   sphinx-quickstart on Mon Apr 24 23:32:56 2023.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

SPA Accredify documentation!
===============================

.. toctree::
   :maxdepth: 2
   :caption: Contents:

The purpose of this documentation is to provide a short overview of the project's structure, design considerations, and utilized libraries.

Component Overview
---------------------

Features are modularised and organised based on their domain. 
This approach helps to keep the codebase organized and maintainable by ensuring that each module or directory contains only the code related to a specific feature. It also makes it easier to add or modify features without affecting other parts of the application.


Organisation src folder 
---------------------

* App.vue
* assets contains style files and images
* components
   * shared UI components, eg. ``NavBar`` and ``UtilityNavBar`` 
   *  **__tests__** unit test files use the same naming convention as its corresponding component, eg the test file for ``./src/views/UserView.vue`` can be found in ``./src/__tests__/views/UserView.spec.ts``

   * **constants**

   * **icons** svg icon components

   * **widgets** reusable small ui components such as ``LoadingSpinner`` or ``Notification`` can serve as a foundation for building a UI design system library

* types
   * models
   * validator 

* utils 
   * utility functions 
   * separate folder ``errorUtils`` for error handling

* views 
   the folder structure should be logically organized to separate different parts of the app. For example, components related to the "Login" or "Signup" functionality should have their own dedicated folders.
   * user
      * main user view file that wraps components used for User
      * user specific components for listing documents, career goals and greeting


Express JS server folder
---------------------

Each REST API endpoint is defined in the ``constants/urlConstants`` file and its corresponding fetch call can be found in ``index.js``. For this project, the API is served with JSON files, and examples of the responses are located in the ``exampleResponse/`` directory.

Cypress
---------------------

The ``cypress`` folder located in the top-level directory contains the end-to-end testing files and their output. Since the project is in its early stages, the included tests are basic smoke tests with limited interaction. 
Please refer to the ``README.md`` file for instructions on how to execute the tests.


Design
---------------------

**base.css**

The reason for having a ``base.css`` file is to define CSS variables that can be used consistently throughout the app. Ideally, this file should have a counterpart in Figma so that designer and developer can work on the same foundation. For instance, defining a color scheme will simplify future replacements or modifications and also make implementing features like dark mode more straightforward. It also adds consistency to UI components.

**main.css**

This file is utilized for resetting and styling primary HTML elements such as links. It includes styles for components such as headers, footers, and content sections.


Libraries
---------------------

* Unit testing: `vitest <https://vitest.dev/>`_
* E2e testing: `cypress <https://www.cypress.io/>`_
* JSON schema validatior: `Ajv <https://ajv.js.org/>`_
* Donut chart: `vue-css-donut-chart <https://www.npmjs.com/package/vue-css-donut-chart>`_
* JS date formatting: `date-fns <https://date-fns.org/>`_
