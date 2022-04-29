const PAGE_URL = `http://localhost:5000/`;

Feature('Create tasks to do');

Scenario('Test if I create a task', ({ I }) => {
    I.amOnPage(PAGE_URL);

    // ensure message creation works
    I.fillField('#newTODO', 'Nouvelle tache');
    
    I.click('#create-todo');

    // ensure we can see the messages
    I.waitForText('Nouvelle tache', '#todo-body');
});

Scenario('Test if I can delete a task', ({ I }) => {
    I.amOnPage(PAGE_URL);

    I.waitForText('Nouvelle tache', '#todo-body');

    I.click(".btn-sm")
    I.dontSee('Nouvelle tache', '#todo-body');
    I.see('Nouvelle tache', '#done-body')
});