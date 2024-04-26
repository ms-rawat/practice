import React, { useState } from 'react'

function useCopy() {
    const [copiedText, setcopiedText] = useState();

    const copy = async (text) => {
        if (!navigator?.clipboard) {
            console.log("Clipboard not supported");
            return false;
        }
        try {
            await navigator.clipboard.writeText(text);
            setcopiedText(text);

        } catch (error) {
            console.log("failed copying the text ${text}", error);
            setcopiedText(null)
        }
    }
    return [copy]
}

export default useCopy
