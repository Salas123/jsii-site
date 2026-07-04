import { render, screen} from "@testing-library/react";
import {describe, it, expect} from "@jest/globals";
import Home from '../src/app/page'

describe('Page.js: Component Rendering', () => {

    const expectedSectionHeaders =['Interests', 'Projects', 'Contact Me' ]
    it('Test All Expected Section Headers', () => {
        render(<Home/>)

        const headers = screen.getAllByRole('heading',{
            level:1
        })

        const elementTextVals = headers.map((element) => {
           return element.innerHTML
        });

        expect(elementTextVals).toEqual(expect.arrayContaining(expectedSectionHeaders))
    });
});
