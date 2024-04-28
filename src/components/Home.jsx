import React from 'react'
import './Home.css'
import { Card } from 'antd';
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className="Homepage-container">
            <section className="first-section">
                <div></div>
                <aside className="first-section-info">
                    <div className="first-section-info-text">
                        <h2>Welcome to UpSkill</h2>
                        <p>Path to Success</p>
                        <Link to='/feed'><Button color="info">Browse Courses</Button>{' '}</Link>
                    </div>
                </aside>
            </section>
            <section className="second-section">
                <div className='second-section-info'>
                    <p></p>
                </div>
            </section>
            <section className="third-section">
                <div className="cards-info">
                    <Card
                        style={{ height: 200 }}
                        hoverable
                        cover={<img className="third-section-images" alt="example" src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />}
                    >
                    </Card>
                </div>
                <div className="cards-info">
                    <Card
                        style={{ height: 200 }}
                        hoverable
                        cover={<img  className="third-section-images" alt="example" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />}
                    >
                    </Card>
                </div>
                <div className="cards-info">
                    <Card
                        style={{ height: 200 }}
                        hoverable
                        cover={<img className="third-section-images" alt="example" src="https://images.unsplash.com/photo-1513135065346-a098a63a71ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80" />}
                    >
                    </Card>
                </div>
            </section>
            <section className="fourth-section">
                    <aside className="fourth-section-info">
                        <div className="fourth-section-info-text">
                            <h2>Upload to Upskill</h2>
                            <p>Path to Success</p>
                            <Link to='/uploadCourse'><Button style={{ width : '150px', padding : '10px' }} color='info'>Upload</Button>{' '}</Link>
                        </div>
                    </aside>
                <div className="illustrated-image">
                    <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/video_upload_3d4u.svg" alt=""/>
                </div>
            </section>
            <footer className="footer-section">
                <div className="footer-section-info">
                    <p></p>
                    <p></p>
                </div>
            </footer>
        </div>
    )
}

export default Homepage