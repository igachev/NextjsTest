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
background-position: 300px 480px;
font-family: Poppins;

@media (max-width: 1820px) {
    background-position: 250px 480px;
  }

  @media (max-width: 1780px) {
    background-position: 200px 480px;
  }

  @media (max-width: 1720px) {
    background-position: 170px 480px;
  }

  @media (max-width: 1640px) {
    background-position: 155px 480px;
  }

  @media (max-width: 1610px) {
    background-position: 140px 480px;
  }

  @media (max-width: 1580px) {
    background-position: 125px 480px;
  }

  @media (max-width: 1550px) {
    background-position: 110px 480px;
  }

  @media (max-width: 1520px) {
    background-position: 95px 480px;
  }

  @media (max-width: 1490px) {
    background-position: 80px 480px;
  }

  @media (max-width: 1460px) {
    background-position: 65px 480px;
  }

  @media (max-width: 1430px) {
    background-position: 50px 480px;
  }

  @media (max-width: 1400px) {
    background-position: 35px 480px;
  }

  @media (max-width: 1370px) {
    background-position: 20px 480px;
  }

  @media (max-width: 1340px) {
    background-position: 5px 480px;
  }

  @media (max-width: 1330px) {
    background-position: -10px 480px;
  }

  @media (max-width: 1300px) {
    background-position: -25px 480px;
  }

  @media (max-width: 1270px) {
    background-position: -40px 480px;
  }

  @media (max-width: 1240px) {
    background-position: -55px 480px;
  }

  @media (max-width: 1210px) {
    background-position: -70px 480px;
  }

  @media (max-width: 1180px) {
    background-position: -85px 480px;
  }

  @media (max-width: 1150px) {
    background-position: -100px 480px;
  }

  @media (max-width: 1120px) {
    background-position: -115px 480px;
  }

  @media (max-width: 1090px) {
    background-position: -130px 480px;
  }

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

const ImageBox = styled.div`
min-width: 150px;

`;


export const Agency = () => {

    return (
        <Section>
            <Title>Managed agency selection</Title>
            <SubTitle>strengthen your onboarding process</SubTitle>
            <ArticleContainer>

                <Article>
                    <ImageBox>
                    <Image src="/img/video.png"  width={300} height={500} />
                    </ImageBox>
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