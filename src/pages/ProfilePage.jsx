import { useParams } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";

function ProfilePage() {
    // Extract the user ID from the URL parameters
    const { id } = useParams();

    return (
    <div>
        {/* Pass userID to the Profilecard */}
        <ProfileCard userId={id}/>
    </div>
    )
}

export default ProfilePage;