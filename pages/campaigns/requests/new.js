import React, { Component } from 'react';
import { Button, Input, Label, Form } from 'semantic-ui-react';
import Layout from '../../../components/Layout'

class RequestNew extends Component {
    state = {
        value: '',
        description: '',
        recipient: ''
    }

    static async getInitialProps(props) {
        const { address } = props.query;
        return {address};
    }
    render() {
        return (
            <Layout>
                <h3>Create a request</h3>
            <Form>
                <Form.Field>
                    <label>Value in Ether</label>
                    <Input value={this.state.value} onChange={event => this.setState({ value: event.this.value })} />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <Input value={this.state.description} onChange={event => this.setState({ value: event.this.description })} />
                </Form.Field>
                <Form.Field>
                    <label>Recipient</label>
                    <Input value={this.state.recipient} onChange={event => this.setState({ value: event.this.recipient })} />
                </Form.Field>

                <Button primary>Create!!</Button>
            </Form>
            </Layout>
        )

    }}
    export default RequestNew;