const main = async () => {
    // add/modify your content script logic here

    // example of how to send a message to background worker
    const response = await chrome.runtime.sendMessage(chrome.runtime.id, { type: 'ping' })

    if (response.type === 'pong') {
        console.log(`Browser extensions says: "${response.payload.message}"`)
    }
}

main()
