import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px ;
`;

export const Form = styled.form`
    display: flex;
    margin-top: 40px;
    max-width: 715px;

    input{
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;

        &::placeholder{
            color: #a8a8b3
        }
    }

    button{
        width: 210px;
        height: 70px;
        background: #04D361;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: #fff;
        font-weight: 500;
        transition: background-color 0.2s ;

        &:hover{
            background: ${shade(0.2, '#04D361')};
        }
    }
`;

export const Repositories = styled.div`
    max-width: 715px;
    margin-top: 80px;

    a{
        display: flex;
        align-items: center;
        width: 100%;
        background: #fff;
        border-radius: 5px;
        padding: 24px;
        text-decoration:  none;
        transition: transform 0.2s;

        & + a{
            margin-top: 16px;
        }

        &:hover{
            transform: translateX(10px);
        }

        img{
            width: 54px;
            height: 54px;
            border-radius: 50%;
        }

        div{
            margin-left: 16px;

            strong{
                font-size: 20px;
                color: #3d3d4d;
            }

            p{
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }
        }

        svg{
            margin-left: auto;
            color: #C9C9D4;
        }
    }
`
