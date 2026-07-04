import {describe, it, expect} from "@jest/globals";
import SlackMessageFormat from "@/app/Components/utils/SlackMessageFormat";
import {parseObj} from "./utils/parseObj";

describe('Testing Util Functions', () =>{
    const inputParams = {
        fullName: 'Jesus Salas',
        subject: 'opportunity',
        email: 'salasii.jesus@gmail.com',
        message: 'klsjdf;lsjdfl;asjf;las;dfsadf'
    }

    const expected_paths = [
        `blocks.elements.elements.text.${inputParams.fullName}`,
        `blocks.elements.elements.text.${inputParams.subject}`,
        `blocks.elements.elements.text.${inputParams.email}`,
        `blocks.elements.elements.text.${inputParams.message}`
    ]
    it('Test Slack Formatted Object', () =>{
            const messageObj = SlackMessageFormat.returnMessageObj(inputParams);

            const paths = parseObj(messageObj)

            expect(paths).toEqual(expect.arrayContaining(expected_paths));
    })
})
