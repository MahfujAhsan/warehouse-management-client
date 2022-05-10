import React from 'react';

const Blogs = () => {
    return (
        <div className='container px-3'>
            <div className='row d-flex flex-column'>

                <div className='col-12 border border-2 border-dark p-0 d-flex align-items-center bg-light mb-4 rounded'>
                    <div className='p-3 p-md-5 row'>
                        <div className='col-md-6'>
                            <h3 className='text-center'>JavaScript</h3>
                            <hr />
                            <p>1. Javascript is a programming language that is used for writing scripts on the website.</p>
                            <p>2. Javascript can only be run in the browsers..</p>
                            <p>3. It is basically used on the client-side.</p>
                            <p>5. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </p>
                            <p>5. 	Some of the javascript frameworks are RamdaJS, TypedJS, etc. </p>
                        </div>
                        <div className='col-12 col-md-6'>
                            <h3 className='text-center'>NodeJS</h3>
                            <hr />
                            <p>1. It is mostly used on the server-side.</p>
                            <p>2. Nodejs does not have capability to add HTML tags.</p>
                            <p>3. V8 is the Javascript engine inside of node.js that parses and runs Javascript. </p>
                            <p>5. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.</p>
                        </div>
                    </div>
                </div>


                <div className='col-12 border border-2 border-dark p-0 d-flex align-items-center bg-light mb-4 p-3 rounded'>
                    <div className="p-3 p-md-5 row">
                        <div className='col-md-6'>
                            <h3 className='text-center'>SQL</h3>
                            <hr />
                            <p>1. RELATIONAL DATABASE MANAGEMENT SYSTEM</p>
                            <p>2. These databases have fixed or static or predefined schema</p>
                            <p>3. These databases are not suited for hierarchical data storage.</p>
                            <p>4. These databases are best suited for complex queries</p>
                            <p>4. Vertically Scalable</p>
                        </div>
                        <div className='col-md-6'>
                            <h3 className='text-center'>NoSQL</h3>
                            <hr />
                            <p>1. Non-relational or distributed database system.</p>
                            <p>2. They have dynamic schema</p>
                            <p>3. These databases are best suited for hierarchical data storage.</p>
                            <p>4. These databases are not so good for complex queries</p>
                            <p>5. Horizontally scalable</p>
                        </div>
                    </div>
                </div>
                <div className='col-12 border border-2 border-dark p-0 d-flex align-items-center bg-light p-3 p-md-5 rounded'>
                    <div>
                        <h3>What is JWT?</h3>
                        <p>JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it's an encoded JSON containing a set of claims and a signature. It's usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It's also a popular way to authenticate/authorize users in a microservice architecture.</p>
                        <h3>How Does it Work?</h3>
                        <p>1. A user logs in to an application with a username and password, or otherwise proves her identity.</p>
                        <p>2. The server confirms her identity and sends back an access token containing a reference to her identity.</p>
                        <p>3. The client then includes this access token with every request to the server.</p>
                        <p>4. For protected routes, REST API authentication middleware asserts the presence of a valid access token. The server can further use the identity asserted by the validated token to implement more granular permissions, such as acting on resources belonging to that particular user.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;