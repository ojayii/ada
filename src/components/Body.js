import marchitecture_web from '../images/marchitecture_web.png.svg';
import picture_voice_web from '../images/picture_voice_web.png.svg';
import tango from '../images/tango.svg';
import digicel from '../images/digicel.svg';
import moka from '../images/moka.svg';
import mc_row3_vector from '../images/mc_row3_vector.svg';
import testimonial_bayley from '../images/testimonial_bayley.jpg.svg';
import airasia from '../images/airasia.svg.svg';
import chevron2 from '../images/chevron2.svg';
import {
    MainContent,
    SectionOne,
    SectionOneLinks,
    AchievementsContainer,
    Achievements,
    AchievementBox,
    TrophyImg,
    SectionTwo,
    SectionTwoLeft,
    SectionTwoRight,
    BottomContent,
    BottomRow1,
    GridContainer,
    GridBox,
    BottomRow2,
    BottomRow3,
    BottomRow3Left,
    BottomRow3Right,
    Col1,
    Col2
} from './Body.styles';

const Body = () => {
    return (
        <MainContent>
            <SectionOne>
                <h2>Basic chatbots have no business
                    representing your business</h2>
                <p>Ditch code-heavy, old school scripted chatbots. Integrate Ada with
                    your existing business systems to resolve complex customer
                    inquiries in record time.</p>
                <SectionOneLinks class="header__btn-container">
                    <a href='' class="btn btn__bg-purple">See Ada in action</a>
                    <a href='' class="btn">Learn more</a>
                </SectionOneLinks>
                <img src={marchitecture_web} />
            </SectionOne>
            <AchievementsContainer>
                <Achievements>
                    <AchievementBox>
                        <TrophyImg />
                        <p>Forrester</p>
                        <p>Conversational AI Wave
                            Challenger</p>
                    </AchievementBox>
                    <AchievementBox>
                        <TrophyImg />
                        <p>G2</p>
                        <p>High Performer Fall 2023</p>
                    </AchievementBox>
                    <AchievementBox>
                        <TrophyImg />
                        <p>ITRG</p>
                        <p>Top Rated 2023</p>
                    </AchievementBox>
                    <AchievementBox>
                        <TrophyImg />
                        <p>Globe & Mail</p>
                        <p>Top Growing Companies</p>
                    </AchievementBox>
                </Achievements>
            </AchievementsContainer>
            <SectionTwo>
                <SectionTwoLeft src={picture_voice_web} />
                <SectionTwoRight>
                    <h3>Resolve more phone calls with voice AI</h3>
                    <p>Your customers are waiting — and they have been for some time — for the seamless experience only Ada's platform can provide. Add intelligent phone automation using the same knowledge content in Ada's easy-to-use platform.</p>
                    <a href='' className='btn btn__bg-purple'>Learn More About Ada Voice</a>
                </SectionTwoRight>
            </SectionTwo>
            <BottomContent>
                <BottomRow1>
                    <h4>
                        <span>4,272,090,866</span>
                        <span>conversations automated</span>
                    </h4>
                    <GridContainer>
                        <div>
                            <GridBox className='grid-one'>
                                <span>Up to</span>
                                <span>77%</span>
                                <span>of customer service interactions
                                    resolved through automation</span>
                            </GridBox>
                            <GridBox className='grid-two'>
                                <span>50+</span>
                                <span>languages supported instantly</span>
                            </GridBox>
                        </div>
                        <div>
                            <GridBox className='grid-three'>
                                <img src={tango} />
                                <span>6.7x ROI in year 1</span>
                            </GridBox>
                            <GridBox className='grid-four'>
                                <img src={digicel} />
                                <span>$750k savings / year</span>
                            </GridBox>
                            <GridBox className='grid-five'>
                                <img src={moka} />
                                <span>95% recognition rate</span>
                            </GridBox>
                        </div>
                    </GridContainer>
                </BottomRow1>
                <BottomRow2>
                    <img src={mc_row3_vector} />
                    <h5>Automate your customer
                        service with Ada</h5>
                    <a href='' className='btn btn__bg-purple'>Request a Demo</a>
                </BottomRow2>
                <BottomRow3>
                    <BottomRow3Left>
                        <h6>AI-powered
                            automation built
                            for CX teams</h6>
                        <a href='' className='btn btn__bg-purple'>View all Case Studies</a>
                    </BottomRow3Left>
                    <BottomRow3Right>
                        <Col1>
                            <img src={airasia} />
                            <div>
                                <span>75%</span>
                                <span>inquiries resolved</span>
                            </div>
                            <div>
                                <span>11</span>
                                <span>languages supported</span>
                            </div>
                            <div>
                                <span>8x</span>
                                <span>increase in product
                                    upsell</span>
                            </div>
                        </Col1>
                        <Col2>
                            <a href=''>Read the Air Asia Case Study
                                <img src={chevron2} />
                            </a>
                            <p>"Ada has supported our customer's agents to contribute to the overall
                                ancillary income through our Customer Happiness contact channels by
                                selling eight times more ancillary products compared with 12 months
                                ago."</p>
                            <figure>
                                <img src={testimonial_bayley} />
                                <figcaption>
                                    <span>Bayley Clark</span>
                                    <span>Head of Customer Support Strategy</span>
                                </figcaption>
                            </figure>
                        </Col2>
                    </BottomRow3Right>
                </BottomRow3>
            </BottomContent>
        </MainContent>
    )
}

export default Body;