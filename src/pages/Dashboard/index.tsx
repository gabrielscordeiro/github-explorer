import React from 'react';

import { Title, Form, Repositories } from './styles';

import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
/*
React.FC = React Function Component
*/

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="GitHub Explorer" />
            <Title>Explore repositórios no GitHub</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/8952285?v=4"
                        alt="Gabriel Schmidt Cordeiro"
                    />
                    <div>
                        <strong>gabrielscordeiro/gobarber-api</strong>
                        <p>
                            API desenvolvida para o o Projeto GoBarber do
                            Bootcamp GoStack da Rocketseat
                        </p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/8952285?v=4"
                        alt="Gabriel Schmidt Cordeiro"
                    />
                    <div>
                        <strong>gabrielscordeiro/gobarber-api</strong>
                        <p>
                            API desenvolvida para o o Projeto GoBarber do
                            Bootcamp GoStack da Rocketseat
                        </p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/8952285?v=4"
                        alt="Gabriel Schmidt Cordeiro"
                    />
                    <div>
                        <strong>gabrielscordeiro/gobarber-api</strong>
                        <p>
                            API desenvolvida para o o Projeto GoBarber do
                            Bootcamp GoStack da Rocketseat
                        </p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
