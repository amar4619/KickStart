import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css'
import { Card, Button } from "semantic-ui-react"
import factory from '../ethereum/factory';
import { Link } from "../routes";
import Layout from '../components/Layout'

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns };
    }
    // async componentDidMount() {
    //     const campaigns = await factory.methods.getDeployedCampaigns().call();
    //     console.log("hi" + campaigns[0]);
    //     //  return {campaigns};
    // }
    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true,

            }
        });
        return <Card.Group items={items} />;
    }
    render() {
        return (
            <Layout>
                <div>
                    <link
                        async
                        rel="stylesheet"
                        href="//cdn.jsdelivr.net/npm/semantic-ui@${props.versions.sui}/dist/semantic.min.css"
                    />
                    <h3>Open tags</h3>
                    
                    <Button floated='right'
                        content="Create Campaign"
                        icon="add circle"
                        primary
                    />
                    {this.renderCampaigns()}
                </div>
            </Layout>
        )
    }
}


export default CampaignIndex;