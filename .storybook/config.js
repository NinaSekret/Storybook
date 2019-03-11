import { configure, setAddon } from '@storybook/react';

const req = require.context('../components/', true, /.jsx$/);

function loadStories() {
    req.keys().forEach((fileName) => req(fileName));
}

configure(loadStories, module);