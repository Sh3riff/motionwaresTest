import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    list-style-type: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    outline: none;
    text-decoration: none;
    overflow-x: hidden;
    }    
`;

export const HeaderX = styled.header`
    background-color: ${props => props.init ? "rgba(169,169,169, 0.5)" : "white"};
    color: ${props => props.init ? "white" : "black"};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100vw;
    padding: 10px 3vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    @media (min-width: 1020px){
        background-color: rgba(169,169,169, 0.5);
        color: white;
    }
    nav{
        display: flex;
        svg{
            fill: ${props => props.init ? "white" : "black"};
            width: 7vw;
            max-width: 50px;
        }        
        ul{
            display: ${props => props.init ? "none" : "flex"};
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100vw;
            position: absolute;
            left: 0;
            top: 100px;
            li{
                background-color: ${props => props.init ? "transparent" : "white"};
                width: 100%;
                margin: 1px 0;
                padding: 25px 0;
                text-align: center;
                a{
                    color: ${props => props.init ? "white" : "black"};;
                }
            }
        }
        @media (min-width: 1020px){
            order: 2;
            svg{
                display: none;
                fill: white;
            }
            ul{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: space-between;
                position: static;
                width: fit-content;
                li{
                    height: 100%;
                    width: auto;
                    margin: 0 25px;
                    padding: 0 10px;
                    &:last-of-type{
                        display: none;
                    }
                    a{
                        color: white;
                    }                    
                }
            }
        }
    }
    div.cluster{
        div{
            display: flex;
            justify-content: center;
            margin: 0 0 5px;
            svg{
                fill: ${props => props.init ? "white" : "black"};
                width: 7vw;
                max-width: 25px;
                margin: 0 2px;
            }
        }
        @media (min-width: 1020px){
            order: 1;
            svg{
                fill: white;
            }
        }
    }
    div.others{
        span{
            display: none;
            cursor: pointer;
        }
        svg{
            transform: rotate(70deg);
            cursor: pointer;
        }
        @media (min-width: 1020px){
            order: 3;
            span{
                display: inline;
                margin:  0 5px;
                font-size: 13px;
            }
            svg{
                width: 13px;
            }
        }
    }
`;

export const ShowBox = styled.div`
    position: relative;
    video{
        height: 480px;
        width: 100vw;
        object-fit: cover;
    }
    .textOver{
        height: 480px;
        width: 100vw;
        z-index: 2;
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center; 
        align-items: center;
        color: white;
        font-weight: normal;
        h1{
            font-size: calc(.85 * (1.5rem + ((1vw - 3.2px) * 3)));
            margin-bottom: calc(.25 * (1.5rem + ((1vw - 3.2px) * 3)));
        }
        h3{
            font-size: calc(.5 * (1.5rem + ((1vw - 3.2px) * 3)));
            margin-bottom: calc(.25 * (1.5rem + ((1vw - 3.2px) * 3)));
            em{
                color: #FD7170;
            }
        }
        a{
            font-size: calc(.4 * (1.5rem + ((1vw - 3.2px) * 3)));
            color: white;
            background-color: #FD7170;
            padding: calc(.4 * (1.5rem + ((1vw - 3.2px) * 3))) calc(.6 * (1.5rem + ((1vw - 3.2px) * 3)));
            margin: 20px;
        }
    }
    @media (min-width: 480px){
        video, .textOver{
            height: 500px;
        }
    }
    @media (min-width: 1020px){
        video, .textOver{
            height: 540px;
        }
    }
    @media (min-width: 1920px){
        video, .textOver{
            height: 720px;
        }
    }
`;

export const BodyX = styled.main`
    background-color: #eee;
    width: 100vw;
    .intro{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5vmax 20px 5vw;
        &:before{
            content: ""
        }
        &:after{
            content: ""
        }
    }
    .container{
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            width: 86vw;
            height: 210px;
            border: 5px solid white;
            background-size: cover;
            margin: 20px 0;
            @media (min-width: 480px){
                height: 340px;
            }

        }
        p{
            width: 86vw;
        }
        .pixcomplement{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px 0;
            svg{
                fill: black;
                width: 12vw;
                max-width: 60px;
            }
            h3{
                margin: 40px 0;

            }
            div{
                width: 40px;
                border: 1px solid black;
            }
        }
        @media (min-width: 740px){
            margin: 0 0 10px;
            height: 420px;
            display: grid;
            grid-template-areas:
                "one one two two"
                "one one two two"
                "one one four four"
                "one one four four";
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(4, 100px);
            gap: 10px 3vw;
            img{
                grid-area: one;
                height: 40vw;
                border: 10px solid white;
                max-height:360px;
                justify-self: end;
                align-self: center;
                margin: 0;
            }
            p{
                grid-area: four;
                justify-self: start;
                font-size: calc(.35 * (1.5rem + ((1vw - 3.2px) * 3)));
                line-height: calc(.5 * (1.5rem + ((1vw - 3.2px) * 3)));
            }
            .pixcomplement{
                grid-area: two;
                padding: 0;
                justify-self: start;
                align-items: flex-start;
                margin: 50px 0 0;
                svg{
                    width: 6vw;
                    max-width: 40px;
                }
                h3{
                    margin: 40px 0;
                    font-size: calc(.6 * (1.5rem + ((1vw - 3.2px) * 3)));
                }
            }
            img, p, .pixcomplement{
                width: 45vw;
                max-width: 540px;
            }
            &:nth-child(3){
                grid-template-areas:
                "two two one one"
                "two two one one"
                "four four one one"
                "four four one one";
                img{
                    justify-self: start;
                }
                .pixcomplement, p{
                    justify-self: end;
                    align-items: flex-end;
                }                                       
            }



        }
    }
`;