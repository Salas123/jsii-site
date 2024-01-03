const returnMessageObj = (data) =>{
    /**
     *  Data:
     *    - fullName
     *    - subject
     *    - email
     *    - message
     * */
    return {
        "blocks":[
            {
                "type": "header",
                "text": {
                    "type": "plain_text",
                    "text": ":memo: Message from JSII Site :memo:",
                    "emoji": true
                }
            },
            {
                "type": "rich_text",
                "elements": [
                    {
                        "type": "rich_text_section",
                        "elements": [
                            {
                                "type": "text",
                                "text": "Name: "
                            },
                            {
                                "type": "text",
                                "text": data.fullName,
                                "style": {
                                    "bold": true
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "rich_text",
                "elements":[{
                    "type": "rich_text_section",
                    "elements":[
                        {
                            "type": "text",
                            "text": "Email: "
                        },
                        {
                            "type": "text",
                            "text": data.email,
                            "style":{
                                "bold": true
                            }
                        }
                    ]
                }]
            },
            {
                "type": "rich_text",
                "elements":[{
                    "type": "rich_text_section",
                    "elements":[
                        {
                            "type": "text",
                            "text": "Subject: "
                        },
                        {
                            "type": "text",
                            "text": data.subject,
                            "style":{
                                "bold": true
                            }
                        }
                    ]
                }]
            },
            {
                "type": "rich_text",
                "elements":[{
                    "type": "rich_text_section",
                    "elements":[
                        {
                            "type": "text",
                            "text": "Message: "
                        },
                        {
                            "type": "text",
                            "text": data.message,
                            "style":{
                                "bold": true
                            }
                        }
                    ]
                }]
            }
        ]
    }
}

export default {returnMessageObj};
