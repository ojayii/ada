import styled, { keyframes } from 'styled-components';

const slideLoop = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-200px * 2));
    }
`;

export const MainContent = styled.body`
    padding: clamp(1rem, 6.944vw, 6.25rem) 7% 0 7%;
`;

export const SectionOne = styled.section`
    text-align: left;
    margin-bottom: clamp(2rem, 4.444vw, 4rem);

    h2 {
        font-size: clamp(2rem, 3.333vw, 3rem);
        line-height: clamp(2.4rem, 3.868vw, 3.481rem);
        margin-bottom: clamp(0.9rem, 2.4vw, 35px);
        max-width: 725px;
    }

    p {
        font-size: clamp(1rem, 1.25vw, 1.125);
        line-height: 1.663;
        margin-bottom: clamp(1.5rem, 2.4vw, 35px);
        max-width: 480px;
        font-weight: 300;
    }

    img {
        max-width: 100%;
    }
`;

export const SectionOneLinks = styled.div`
    margin: 0;
    width: 100%;
    justify-content: flex-start;
    gap: 10px;

    @media(max-width: 47.8em) {
        margin-bottom: 2rem;
    }
`;

export const AchievementsContainer = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;

    &::before,
    &::after {
        content: "";
        height: 100%;
        position: absolute;
        width: 170px;
        z-index: 2;
    }

    &::after {
        right: 0;
        top: 0;
        transform: rotateZ(180deg);
    }

    &::before {
        left: 0;
        top: 0;
    }
`;

export const Achievements = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 6rem;
    min-width: calc(200px * 4);

    @media(max-width: 47.8em) {
        justify-content: flex-start;
        gap: 4vw;
        animation: ${slideLoop} 10s linear infinite;
    }
`;

export const AchievementBox = styled.div`
    text-align: center;
    min-width: 200px;
    width: 23%;
    flex-grow: 1;
    padding: clamp(1rem, 2.7vw, 39px) clamp(1rem, 2.2vw, 32px);
    background: linear-gradient(135deg, rgba(27, 30, 35, 0.5) 0%, rgba(22, 25, 29, 0.5) 100%);
    border: 0.96875px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0px 19.375px 24.2188px -4.84375px rgba(0, 0, 0, 0.1), 0px 7.75px 9.6875px -5.8125px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.8125px);
    border-radius: 12px;

    p {
        font-weight: 300;

        &:nth-of-type(1) {
            font-size: 1.4rem;
            font-weight: 500;
        }
    }
`;

export const TrophyImg = styled.div`
    background: url(../images/SVG_margin.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 2rem;
    width: 2rem;
    text-align: center;
    width: 100%;
`;

export const SectionTwo = styled.section`
    display: flex;
    gap: 4%;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
`;

export const SectionTwoLeft = styled.img`
    max-width: 100%;
    width: 48%;
    min-width: 300px;
    flex-grow: 1;
    margin-bottom: 1rem;
`;

export const SectionTwoRight = styled.div`
    width: 48%;
    min-width: 300px;
    flex-grow: 1;

    h3 {
        font-size: clamp(2rem, 3.333vw, 3rem);
        margin-bottom: clamp(0.5rem, 2.4vw, 35px);
    }

    p {
        margin-bottom: 30px;
        max-width: 540px;
        font-weight: 300;
    }
`;

export const BottomContent = styled.div`
    
`;

export const BottomRow1 = styled.section`
    h4 {
        span:nth-of-type(1) {
            text-align: center;
            display: block;
            font-size: clamp(2rem, 3.333vw, 3rem);
            margin-block: clamp(4rem, 11.111vw, 10rem) 7.2px;
        }

        span:nth-of-type(2) {
            text-align: center;
            display: block;
            margin-bottom: clamp(2rem, 5.555vw, 5rem);
        }
    }
`;

export const GridContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-flow: row wrap;
    height: auto;

    > div {
        width: calc(50% - 0.5rem);
        min-width: 300px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
    }
`;

export const GridBox = styled.div`
    padding: clamp(2rem, 3.6vw, 52.72px) clamp(2rem, 2.8vw, 41px);
    background: linear-gradient(135deg, rgba(27, 30, 35, 0.5) 0%, rgba(22, 25, 29, 0.5) 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    border-radius: 10px;
    text-align: left;
    flex-grow: 1;

    img {
        width: 31%;
    }

    &.grid-three,
    &.grid-four,
    &.grid-five {
        display: flex;
        gap: clamp(1rem, 2.22vw, 2rem);
        align-items: center;
        height: 30%;

        span {
            margin-block: auto;
            align-items: center;
            justify-content: flex-start;
            gap: 1rem;
            font-weight: 300;
        }
    }

    &.grid-one {
        span:nth-of-type(2) {
            font-size: clamp(2rem, 3.33vw, 3rem);
            font-weight: 700;
            line-height: 1;
            margin-bottom: 4px;
            display: block;
        }

        span:nth-of-type(3) {
            font-size: clamp(1.15rem, 1.6vw, 1.5rem);
            font-weight: 300;
        }
    }

    &.grid-two {
        span:nth-of-type(1) {
            font-size: clamp(2rem, 3.33vw, 3rem);
            font-weight: 700;
            line-height: 1;
            margin-bottom: 4px;
            display: block;
        }

        span:nth-of-type(2) {
            font-size: clamp(1.15rem, 1.6vw, 1.5rem);
            font-weight: 300;
        }
    }
`;

export const BottomRow2 = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: min(2rem) min(1rem);
    width: 100vw;
    margin-left: -7vw;
    margin-bottom: 2rem;
    min-height: 100vh;
    position: relative;
    background: radial-gradient(80% 50% at 50% 50%, rgba(54, 62, 74, 0.5) 0%, #1B1E23 100%);
    text-align: center;
    overflow: hidden;
    z-index: 1;

    img {
        position: absolute;
        top: 0;
        bottom: 0px;
        opacity: 0.4;
        top: 50%;
        transform: translateY(-50%);
        z-index: -1;
    }

    h5 {
        font-size: clamp(2rem, 3.33vw, 3rem);
        max-width: 544px;
    }
`;

export const BottomRow3 = styled.section`
    display: flex;
    gap: 2.5%;
    gap: min(1rem);
    flex-flow: row wrap;
    margin-bottom: 3rem;

    > div {
        display: flex;
        padding: clamp(2rem, 2.8vw, 41px);
        min-width: 300px;
        background: linear-gradient(135deg, rgba(27, 30, 35, 0.5) 0%, rgba(22, 25, 29, 0.5) 100%);
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(6px);
        border-radius: 10px;
        flex-grow: 1;
    }
`;

export const BottomRow3Left = styled.div`
    width: 36.75%;
    flex-direction: column;
    justify-content: center;

    h6 {
        font-size: clamp(1.5rem, 2.2vw, 2rem);
        margin-bottom: clamp(1.5rem, 2.2vw, 2rem);
    }
`;

export const BottomRow3Right = styled.div`
    width: 60.75%;
    gap: 3%;
    flex-flow: row wrap;

    span {
        display: block;
    }
`;

export const Col1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-weight: 300;
    width: 20%;
    min-width: 100px;
    flex-grow: 1;

    img {
        max-width: 300px;
    }

    span:nth-child(1) {
        font-size: 2rem;
        font-weight: 700;
    }
`;

export const Col2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 68.5%;
    min-width: 100px;
    flex-grow: 1;
    gap: min(1rem);

    a {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-top: 1rem;
        gap: 10px;
        color: #9977D4;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    p {
        font-weight: 300;
    }

    figure {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        font-weight: 300;

        span:nth-child(1) {
            font-size: 1.2rem;
            font-weight: 700;
        }
    }
`;