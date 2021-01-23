import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Row, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

function Join(props) {
    
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Join Us</BreadcrumbItem>
                            </Breadcrumb>
                            <h2>Join Us</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-sm-12 col-xl-6">
                            <h3>Be Your Own Boss</h3>
                            <p>More freedom. More flexibility. A Gift Card independent buisness offers you a path filled with possibilities, all on your terms. It's a low-cost, low-risk way to start your own business. You supply the passion and hard work, we'll provide the training, support, and rewards.. be in buisness for yourself but not by yourself.</p>
                        </div>
                        <div className="col">
                            <Card className="bg-light mt-4 mb-3">
                                <CardBody>
                                    <blockquote className="blockquote">
                                        <p className="mb-0">There is no security on this earth; there is only opportunity.</p>
                                        <footer className="blockquote-footer">Douglas MacArthur,{' '}
                                            <cite title="Source Title">"Yes, You Can!" - 
                                            Sam Deep & Lyle Sussman, 1996</cite>
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm-12">
                            <Card className="mt-3 mb-4">
                                <CardHeader className="bg-primary text-white"><h3>Get To Know Us</h3></CardHeader>
                                <CardBody>
                                    <ul className="row">
                                        <li className="col-12">Launched in 1966, our family-owned company built a successful business model on the power of giving. Now, we are a global community with more than three thousand people building their own business in over 50 countries and territories.</li>
                                        <li className="col-12">Low-cost opportunity to start your own business with a 100% money-back guarantee in your first 60 days.</li>
                                        <li className="col-12">$50.2M in bonuses and incentives have been paid to Gift Card buisness owners worldwide since 1966.</li>
                                        <li className="col-12"><strong>Start Your Buisness Today.</strong></li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col mb-4">
                            <Table striped bordered hover>
                                <thead className="bg-primary text-white">
                                    <tr>
                                    <th>3 Ways To Make Money</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    <tr>
                                        <dt>1. Retail Margin</dt>
                                        <dd>Buy the products at a special price, sell them to customers at a price you determine- you keep the difference(the retail margin).</dd>
                                        <dt>2. Bonuses</dt>
                                        <dd>Earn performance points on products sold and, as your business gorws, ear points from products sold by those you sponsor.</dd>
                                        <dt>3. Incentives</dt>
                                        <dd>Elective Growth Incentives and rewards include Quick Incentive Program awards, rewards for key achievements in extraordinary growth and helping others succeed, along with one-time cash awards.</dd>
                                    </tr>
                                </tbody>
                            </Table>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9 mb-4">
                                <h3>How Much Can You Earn?</h3>
                                <p> That's up to you. Your earnings depend on your effort and productivity.
                                    Here are a few examples of very successful Gift Card Business Owners in North America in 2017:
                                </p> 
                                <Table striped bordered hover>
                                    <thead className="bg-primary text-light">
                                        <tr>
                                            <th>Annual Compensation:</th>
                                            <th>Average Income(USD)</th>
                                            <th>Highest Income(USD)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        <tr>
                                            <td>Z12 Silver Level</td>
                                            <td>$55,234</td>
                                            <td>$264.756</td>
                                        </tr>
                                        <tr>
                                            <td>Founders Onyx Level</td>
                                            <td>$225,098</td>
                                            <td>$365,098</td>
                                        </tr>
                                        <tr>
                                            <td>Founders Gold Level</td>
                                            <td>$987,067</td>
                                            <td>$7,345,876</td>
                                        </tr>
                                    </tbody>
                                    </Table>
                            </div>            
                        </div>                
                    </div>
                </div>
            </React.Fragment>
        );
    }   


export default Join;
