import './info.css'

const Information = () => {
    return ( 
        <>
        <div className="info">
            <h3>Steps to use the scanner.</h3>
            <ul>
                <li>Take a picture of the visiting card that you wish to scan.</li>
                <li>Upload the image by clicking the "Choose file" button.</li>
                <li>After you see the uploaded image, click "Convert to text" button.</li>
                <li>And voila! you're good to go!</li>
            </ul>
            <p>Upcoming features include auto detecting email and phone number from the scanned visiting card and being at ready for your use in the clipboard. So, Stay Tuned!</p>
        </div>
        </>
     );
}
 
export default Information;