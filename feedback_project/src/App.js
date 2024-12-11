import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import FeedbackData from './data/FeedbackData'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import Card from './components/shared/Card'
import Post from './components/Post'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route path='/' element= {
                    <>
                        <FeedbackForm handleAdd={addFeedback}/>
                        <FeedbackStats feedback={feedback} />
                        <FeedbackList feedback={feedback} 
                        handleDelete={deleteFeedback} />
                    </> }
                    Route/>
                    
                    <Route path='/about' Component={AboutPage}/>
                    <Route path='/post/:id/:name' element={<Post />} />
                </Routes>
                        

                <Card>
                    <NavLink to ='/' activeClassName='active'>
                        Home
                    </NavLink>

                    <NavLink to ='/about' activeClassName='active'>
                        About
                    </NavLink>
                </Card>


            </div>
        </Router>
    )
}
export default App;