// import { } from '@testing-library/dom';
import 'jest-dom/extend-expect';
import main from './main';

test('It has click me text', async () => {
    const btn = main();
    const txt = btn.textContent;
    expect(txt).toBe('click me');
});
