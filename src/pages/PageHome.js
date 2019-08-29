import React, { Component } from 'react'
import api from '../apis/api'
import { Container, Button } from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

export default class PageHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: []
        };
    }

    async componentDidMount() {
        await api.get('contacts')
            .then(response => { this.setState({ contacts: response.data.contacts }) })
            .catch((error) => console.log('Erro ao recuperar os dados ' + error))
    }

    handleDelete = async id => {
        await api.delete(`contacts/${id}`)

        this.componentDidMount();
    }

    buttonDelete(cell, row) {
        return (
            <Button variant="link" onClick={() => this.handleDelete(row.id)}>
                Excluir
            </Button>
        )
    }

    render() {
        return (<div>
            <Container>
                <h1>Contatos</h1>
                <BootstrapTable
                    data={this.state.contacts}
                    striped
                    search>
                    <TableHeaderColumn dataField="id" isKey hidden />
                    <TableHeaderColumn dataField="name">Nome</TableHeaderColumn>
                    <TableHeaderColumn dataField="email">Email</TableHeaderColumn>
                    <TableHeaderColumn dataField="avatarURL">URL da imagem</TableHeaderColumn>
                    <TableHeaderColumn dataField="button"
                        dataFormat={this.buttonDelete.bind(this)}>
                    </TableHeaderColumn>
                </BootstrapTable>
            </Container >
        </div>
        )
    }
}