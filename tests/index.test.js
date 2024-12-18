const { getFormattedDate } = require('../src/index');

test('getFormattedDate returns string in format YYYY-MM-DD HH:MM:SS', () => {
    const date = getFormattedDate();
    const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
    expect(date).toMatch(regex);
});
