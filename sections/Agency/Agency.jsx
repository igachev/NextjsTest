import Image from "next/image"
import styled from "styled-components";

const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
background-image: url('/img/background.png');
background-size: 900px;
background-attachment: fixed;
background-repeat: no-repeat;
background-position: 300px 500px;
font-family: Poppins;

`;

const ArticleContainer = styled.div`
display: flex;
justify-content: center;
`;

const Title = styled.h1`
font-size: 3rem;
margin-bottom: 0;
`;

const SubTitle = styled.h3`
    margin-top: 0;
    font-weight: 300;
`;

const Article = styled.article`
display: flex;
flex-direction: column;
justify-content: space-around;
flex-wrap: nowrap;
margin: 0 20px;
`;

const Card = styled.div`
display: flex;
align-items: center;
background-color: gray;
border-radius: 0.4rem;
width: 500px;
min-width: 500px;
`;



export const Agency = () => {

    return (
        <Section>
            <Title>Managed agency selection</Title>
            <SubTitle>strengthen your onboarding process</SubTitle>
            <ArticleContainer>

                <Article>
                    <Image src="/img/video.png"  width={300} height={500} />
                </Article>

                <Article>

                    <Card>
                        <div>
                        Icon Here
                        </div>

                        <div>
                        <h4>Brief</h4>
                        <p>Complete brief writing or simple guidance on what to include,we've got you covered.</p>
                        </div>

                    </Card>

                    <Card>
                        <div>
                        Icon Here
                        </div>

                        <div>
                        <h4>Search</h4>
                        <p>In-depth agency search covering;criteria-matching,door knocking and due-dilligence vetting.</p>
                        </div>

                    </Card>

                    <Card>
                        <div>
                        Icon Here
                        </div>

                        <div>
                        <h4>Pitch</h4>
                        <p>Comprehensive pitch management,including comms,diary management and pitch hosting.</p>
                        </div>

                    </Card>

                </Article>
            </ArticleContainer>
        </Section>
    )
}