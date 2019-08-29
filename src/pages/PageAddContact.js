import React, { Component } from 'react'
import api from '../apis/api'
import { Container } from 'react-bootstrap';

export default class PageAddContact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contactName: '',
            contactEmail: ''
        }
    }

    onChangeContactName = (event) => {
        this.setState({ contactName: event.target.value })
    }

    onChangeContactEmail = (event) => {
        this.setState({ contactEmail: event.target.value })
    }

    onSubmit = async (event) => {
        event.preventDefault()

        var data = {
            "name": this.state.contactName,
            "email": this.state.contactEmail
        }

        await api.post('contacts', data)

        this.props.history.push(`/home`)
    }

    render() {
        return (<div>
            <Container>
                <div>
                    <h3>Adicionar contato</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.setState.contactName}
                                onChange={this.onChangeContactName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.setState.contactEmail}
                                onChange={this.onChangeContactEmail}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-primary" value="Cadastrar contato" />
                            <input type="button" onClick={() => this.props.history.push(`/home`)} className="btn btn-secondary" value="Voltar" />
                        </div>
                    </form>
                </div>
            </Container>
        </div>
        )
    }
}