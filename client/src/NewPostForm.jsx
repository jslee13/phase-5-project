import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';

function NewPostForm() {
    const navigate = useNavigate()
    const params = useParams()
    const [formValues, setForumValues] = useState({
        title: "",
        body: "",
        forum_id: params.id
    })

function handleSubmit(e) {
    e.preventDefault();


    fetch("/api/posts", {
        method: "POST",
        headers: {
            "content-type": "Application/json",
        },
        body: JSON.stringify(formValues),
    })
    .then((res) => {
        if (res.ok) {
            navigate(`/groups/${params.id}/forum`);
        } else {
            throw new Error('Failed to submit the form')
        }
    })
    .catch(error => {
        console.error('Error', error);
})
}

return (
    <div className="new-post-form">
        <h2>New Post</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                title="title"
                placeholder="Post Title"
                value={formValues.title}
                onChange={(e) => setForumValues({...formValues, title:e.target.value})}
            />
            <input
                type="text"
                body="body"
                placeholder="Body"
                value={formValues.body}
                onChange={(e) => setForumValues({...formValues, body:e.target.value})}
            />
            <button id="create" type="submit">Add Post</button>
        </form>

    </div>
)
}

export default NewPostForm