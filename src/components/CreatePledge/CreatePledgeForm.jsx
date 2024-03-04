import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postPledge from "../../api/post-pledge.js";
import { useParams } from "react-router-dom";



function CreatePledgeForm() {
    const navigate = useNavigate();

    const {id} = useParams();

    const [pledgeData, setPledgeData] = useState({
        amount: 0,
        comment: "",
        anonymous: false,
        project: id,
    });

    const handleChange = (event) => {
        const { id, value, type, checked } = event.target;

        const newValue = type === 'checkbox' ? checked : value;
        
        setPledgeData((prevPledgeData) => ({
            ...prevPledgeData,
            [id]: newValue,
    }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
          if (pledgeData.amount > 0 && pledgeData.comment && pledgeData.anonymous) {
            postPledge(pledgeData)
              .then((response) => {
                // Handle the response if needed
                console.log('Pledge created successfully:', response);
                // Redirect the user to the project detail page or any desired location
                navigate(`/project/${id}`);
                // use location reload once the form is working properly.
                // location.reload(); 
              })
              
              .catch((error) => {
                // Handle errors, e.g., show an error message to the user
                console.error('Error creating pledge:', error);
                // create error page later
                // navigate(`/ErrorPage`)
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="amount">Amount:</label>
                <input type="number" id="amount" placeholder="Enter pledge amount" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="comment">Comment:</label>
                <textarea id="comment" placeholder="Leave a comment..." onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="anonymous">Is your pledge anonymous?</label>
                <input type="checkbox" id="anonymous" checked={pledgeData.anonymous} onChange={handleChange} />
            </div>
            <button type="submit">Submit Pledge</button>
      </form>
    );
}

export default CreatePledgeForm;