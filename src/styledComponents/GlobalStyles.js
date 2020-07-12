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
    background-color: ${props => props.init ? "rgba(169,169,169,0.5)" : "white"};
    color: ${props => props.init ? "white" : "black"};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100vw;
    padding: 10px 3vw;
    z-index: 10;
    position: absolute;	
    top: 0;	
    left: 0;
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
            border-top: 1px solid rgba(169,169,169, 1);
            border-bottom: 1px solid rgba(169,169,169, 1);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: fit-content;
            position: fixed;
            left: 0;
            top: 80px;
            li{
                background-color: ${props => props.init ? "transparent" : "white"};
                height: 60px;
                width: 100%;
                padding: 25px 0;
                text-align: center;
                a{
                    color: ${props => props.init ? "white" : "black"};
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
                border: 0px;
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
                stroke: ${props => props.init ? "white" : "black"};
                stroke-width: 1px;
                fill: none;
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
                fill: none;
                stroke-width: 1px;
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

export const Board = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100vw;
    min-height: 520px;
    padding: 100px 0 0;
    @media (min-width: 740px){
        min-height: 550px;
    }
    div.texty{
        height: fit-content;
        width: 100vw;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: center; 
        align-items: center;
        color: white;
        font-weight: normal;
        h1{
            font-size: calc(.85 * (1.5rem + ((1vw - 3.2px) * 3)));
            margin: 0 0 3vh;
            text-align: center;
        }
        h3{
            font-size: calc(.4 * (1.5rem + ((1vw - 3.2px) * 3)));
            line-height: calc(.6 * (1.5rem + ((1vw - 3.2px) * 3)));
            margin-bottom: 3vh;
            text-align: center;
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
        div.iconers{
            display: flex;
            justify-content: center; 
            align-items: center;
            margin: 20px 0;
            div{
                width: 200px;
                height: 200px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                svg{
                    width: 50px;
                    stroke-width: 1px;
                    margin: 0 0 25px;
                }
                p{
                    font-weight: bold;
                    position: relative;
                    top: -15px;
                }
            }
            @media (max-width: 640px){
                div:nth-child(n+2){
                    display: none;
                }
            }
        }
        div.dummyform{
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid white;
            height: 60px;
            input[type=text]{
                background-color: transparent;
                color: white;
                height: 56px;
                width: 215px;
                font-size: 20px;
                padding: 0 15px;
                &::placeholder{
                    color: white;
                }
                @media (min-width: 640px){
                    width: 280px;
                }
            }
            span{
                height: 56px;
                width: 56px;
                padding: 1px 6px;
                background-color: white;
                border: none;
                cursor: pointer;
                svg{
                    stroke: black;
                    width: 30px;
                    margin: 12.5px 0 0 7.5px;
                    &:hover{
                        transform: rotate(45deg);
                    }
                }
            }
        }
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    @media (min-width: 640px){
        max-width: 750px;
    }
    @media (min-width: 1020px){
        max-width: 1279px;
    }
    h1{
        text-align: center;
        margin: 40px 0;
    }
    section{
        overflow: hidden;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        grid-template-rows: auto;
        justify-content: center;
    }
    section.twolines{
        @media (max-width: 1019px){
            div:nth-of-type(n+5){
                display: none;
            }
        }
        @media (max-width: 639px){
            div:nth-of-type(n+3){
                display: none;
            }
        }
    }   
    section.oneline{
        @media (max-width: 1019px){
            div:nth-of-type(n+3){
                display: none;
            }
        }
        @media (max-width: 639px){
            div:nth-of-type(n+2){
                display: none;
            }
        }
    }   

    div.newplus{
        position: relative;
        margin: 20px auto;
        background-color: skyblue;
        height: 40px;
        width: 92%;
        display: flex;
        align-items: center;
        justify-content: center;
        a{
            color: white;
        }
        svg{
            width: 20px;
            stroke: white;
            position: absolute;
            right: 15px;
        }
        @media (min-width: 480px){
            width: fit-content;
            margin: 20px 40px 20px auto;
            a{
                margin: 0 55px 0 25px;
            }
        }
    }
`; 

export const SubContainer = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 92%;
    height: 65vw;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    color: white;
    @media (min-width: 640px){
        height: 270px;
    }
    .first{
        display: flex;
        margin: 0 0 1vw 2vw;
        img{
            width: 80px;
            height: 80px;
            border: 3px solid white; 
        }
        p{
            margin: 0 0 0 1vw;
        }
    }
    .second{
        margin: 0 2vw 1vw 0;
        p{
            text-align: right;
        }
    }
`;

export const SubContainerText = styled.div`
    width: 92%;
    h3{
        margin: 25px 0 5px;
        em{
            color: skyblue;
        }
    }
`;

export const SubContainerWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0;
`;