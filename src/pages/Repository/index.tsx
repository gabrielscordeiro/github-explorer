import React from 'react';
import { useMatch, Link } from 'react-router-dom';

import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

//React.FC = React Function Component
const Repository: React.FC = () => {
    const params = useMatch('/:repository/*');
    const repoParam = params?.pathname.split('/repository/')[1];

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img
                        src="https://avatars.githubusercontent.com/u/8952285?v=4"
                        alt="Gabriel"
                    />
                    <div>
                        <strong>gabrielscordeiro/teste</strong>
                        <p>Descrição do repositório</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1080</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to="aaaaa">
                    <div>
                        <strong>repository.full_name</strong>
                        <p>repository.description</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
};

export default Repository;
