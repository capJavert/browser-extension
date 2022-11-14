// add/modify your background worker logic here

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.type) {
        case 'ping': {
            return sendResponse({
                type: 'pong',
                payload: {
                    message: 'Howdy!'
                }
            })
        }
        // add cases for message types as needed
        default:
            break
    }
})
