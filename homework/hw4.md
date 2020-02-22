# HW#2: Cypress api tests

## :link: Prerequisites

1. HW3 should be finished.
2. You should have already created branch `api-surname`.
3. You should have already created test files in this branch from practical lesson.
4. You should have already committed and pushed all these files to your remote branch. 
If not, plz do it:
```
    git add .
    git commit -m "tests(api): add files from practical lections"
    git push origin api-surname
 ``` 
And check that your changes were committed:
```
    git status
    git log
    q
 ```
###### Note: `q` closes log view.

## :books: Tasks:

In this branch - rewrite login precondition using API calls. Need to do it only for Cypress tests using `cy.request()` method.

### :pencil: TestCase #1

**Preconditions:**
1. Log into the system through API call
2. Open [Profile page](https://www.freelancer.com/u/{username})
3. Switch to edit profile mode

**Steps:**


**Expected result:** 


----

## :mailbox_with_mail: Preparing and sending results:

1. Check yourself - run your tests, review your code.
2. Check that your changes are ready to commit:
```
    git status
```
3. Check that you're still on your branch:
```
    git branch
```
4. Commit your new tests with new commit:
```
    git add .
    git commit -m "tests(api): add api test - HW4"
    git push origin `api-surname`
```
5. Create Pull Request with your changes from `api-surname` to `cypress-surname` and add _'Ready for review'_ label.
6. Post update that you've finish your HW3 in [summarized table](https://docs.google.com/spreadsheets/d/1pIVFmzoo6lkchfcUjxpUFov7u7m09iY_4knNajdR9SU/edit?usp=sharing) and into the [#hw-review-request](https://valorsoftware-qa2020.slack.com/archives/CUC73SVC4) chat.
