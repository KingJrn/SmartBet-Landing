import { useEffect } from "react";
function TawkTo() {
    useEffect(() => {
        // Create the script element dynamically
        const script = document.createElement("script");
        script.src = "https://embed.tawk.to/65b592098d261e1b5f58ace9/1hl6k505i"; // Replace with your actual widget ID
        script.async = true;
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");

        // Append the script to the body
        document.body.appendChild(script);

        // Optional cleanup function to handle potential component unmounting
        return () => {
            // Remove the script if the component unmounts
            document.body.removeChild(script);
        };
    }, []); // Empty dependency array to run the effect only once

    return null; // No need to render anything
}
export default TawkTo;