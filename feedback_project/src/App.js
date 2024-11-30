import { useState } from 'react';
import Header from './components/Header';

function App() {
    const title = 'Blog Post'
    const body = 'This is my blog post'
    const comments = [
        {id:1, text: 'Comment One'},
        {id:2, text: 'Comment Two'},
        {id:3, text: 'Comment Three'},
    ];

    const [showComments, setShowComments] = useState(false);

    const commentBlock = (
        <div className='comments'>
            <h3>Commnets ({comments.length})</h3>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment.text}</li>
                ))}
            </ul>
        </div>)

    return (

        <>
            <Header text='Hello World' />
            <div className="container">
                <h1>{title.toUpperCase}</h1>
                <p>{body}</p>

                <button onClick={() => setShowComments((prev) => !prev)}>
                    {showComments ? 'Hide Comments' : 'Show Comments'}
                </button>

                {showComments && commentBlock}

            </div>
        </>

    );
}
export default App;