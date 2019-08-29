import React, { Component } from 'react'
import { Container } from 'react-bootstrap';

export default class PageSobre extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (<div>
            <Container>
                <h1>Esse é um trabalho prático de Arquitetura de Java Script para o IGTI</h1>
                <h2>Integrantes do grupo:</h2>
                <ul>
                    <li>Vinícius Batista Barreira</li>
                    <li>Paulo Augusto Künzel</li>
                    <li>Felipe Andrade Gouvêa Tintori</li>
                    <li>Alex Abdeneve Salazar Tancara</li>
                    <li>Jorsi Ramos</li>
                </ul>
            </Container>
        </div>
        );
    }
}