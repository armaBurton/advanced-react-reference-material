# Alche-Meet-Me! w/ React Testing Library

## Learning Objectives

- Use the RTL big 3: `screen`, `render`, `expect`
- Accessible Testing with React Testing Library

## Live Example

https://alchemeetme-testing.netlify.app/

### Description

For this deliverable, you will be writing tests for our Alche-Meet-Me profile viewer. Our application currently displays a header with an image and some text greeting the current user (me!). It also displays a card with some things about the user.

Your task is to write tests that ensure our app displays all of the correct elements for both the header and user profile. A more detailed list of things to test for is in the acceptance criteria.

Modify the files `App.test.jsx` for the Header and `Home.test.jsx` for the Profile

Use the [template](https://github.com/alchemycodelab/adv-react-alchemeetme-testing) to start your project.

### Acceptance Criteria

- Tests ensure the header is displaying properly by testing for:
  - header image
  - profile name
  - Background Color (stretch)
- Tests ensure the Profile is displaying properly by testing for:
  - name
  - motto
  - interests heading
  - avatar
  - header image
  - list of user likes
- (Stretch) You can also write tests that ensures the `user` object received as a prop to the `Home` component has the following shape:
  - id
  - name
  - avatar
  - header
  - likes
  - motto
  - color

### Rubric

| Tasks                                                                    | Points |
| :----------------------------------------------------------------------- | -----: |
| Tests wrote for user profile |      4 |
| Tests wrote for the header        |      4 |
| Successful netlify deployment                      |      2 |

---
### Optional
The api sending my profile information is from a supabase db (`'src/services/user.js'`), and you can see my credentials in the `.env` file. This is def a bad practice, but a necessary evil. You can replace my supabase url and key in the `.env` file with your own credentials to display your own data.

You will need to create a new `users` table in supabase with fields for:
  - name
  - avatar
  - header
  - likes (this field requires the array option in supabase)
  - motto
  - color

These fields are currently required for display with no code changes. Feel free to add any more fields you desire, and make the required code changes to display the field.
