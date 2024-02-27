import { useState, useEffect } from "react";

function ProfileCard({ userId }) {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUserProfile(userId);
    }, [userId]); // Fetch data when the user ID changes

    const fetchUserProfile = async (userId) => {
        try {
            const response = await fetch(`your-api-url/user/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user profile');
            }
            const profileData = await response.json();
            setProfile(profileData);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {/* Display user profile data */}
            <h1>User Profile</h1>
            {profile && (
                <div>
                    <p>User ID: {profile.userId}</p>
                    <p>Name: {profile.name}</p>
                    <p>Email: {profile.email}</p>
                    {/* Add other profile fields as needed */}
                </div>
            )}
        </div>
    );
}

export default ProfileCard;