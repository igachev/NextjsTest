import Image from "next/image"
import styled from "styled-components";

const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-image: url('/img/background.png');
background-size: 900px;
background-repeat: no-repeat;
background-position: 300px 190px;
font-family: Poppins;

@media (max-width: 1820px) {
    background-position: 260px 190px;
  }

  @media (max-width: 1780px) {
    background-position: 210px 190px;
  }

  @media (max-width: 1720px) {
    background-position: 180px 190px;
  }

  @media (max-width: 1640px) {
    background-position: 165px 190px;
  }

  @media (max-width: 1610px) {
    background-position: 150px 190px;
  }

  @media (max-width: 1580px) {
    background-position: 135px 190px;
  }

  @media (max-width: 1550px) {
    background-position: 120px 190px;
  }

  @media (max-width: 1520px) {
    background-position: 105px 190px;
  }

  @media (max-width: 1490px) {
    background-position: 90px 190px;
  }

  @media (max-width: 1460px) {
    background-position: 75px 190px;
  }

  @media (max-width: 1430px) {
    background-position: 60px 190px;
  }

  @media (max-width: 1400px) {
    background-position: 45px 190px;
  }

  @media (max-width: 1370px) {
    background-position: 30px 190px;
  }

  @media (max-width: 1340px) {
    background-position: 15px 190px;
  }

  @media (max-width: 1330px) {
    background-position: 0px 190px;
  }

  @media (max-width: 1300px) {
    background-position: -15px 190px;
  }

  @media (max-width: 1270px) {
    background-position: -30px 190px;
  }

  @media (max-width: 1240px) {
    background-position: -45px 190px;
  }

  @media (max-width: 1210px) {
    background-position: -60px 190px;
  }

  @media (max-width: 1180px) {
    background-position: -75px 190px;
  }

  @media (max-width: 1150px) {
    background-position: -90px 190px;
  }

  @media (max-width: 1120px) {
    background-position: -105px 190px;
  }

  @media (max-width: 1090px) {
    background-position: -120px 190px;
  }

  @media (max-width: 1024px) {
    background-position: 115px 190px;
  }

  @media (max-width: 1000px) {
    background-position: 100px 190px;
  }

  @media (max-width: 970px) {
    background-position: 85px 190px;
  }

  @media (max-width: 940px) {
    background-position: 70px 190px;
  }

  @media (max-width: 910px) {
    background-position: 55px 190px;
  }

  @media (max-width: 880px) {
    background-position: 40px 190px;
  }

  @media (max-width: 850px) {
    background-position: 25px 190px;
  }

  @media (max-width: 820px) {
    background-position: 10px 190px;
  }

  @media (max-width: 790px) {
    background-position: -5px 190px;
  }

  @media (max-width: 760px) {
    background-position: -20px 190px;
  }

  @media (max-width: 730px) {
    background-position: -35px 190px;
  }

  @media (max-width: 700px) {
    background-position: -50px 190px;
  }

  @media (max-width: 670px) {
    background-position: -65px 190px;
  }

  @media (max-width: 640px) {
    background-position: -80px 190px;
  }

`;

const ArticleContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
gap: 60px;

@media (max-width: 1024px) {
    flex-direction: column;
    
  }
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
align-items: center;
justify-content: space-around;
@media (max-width: 1024px) {
    gap: 20px;
  }
`;

const ImageBox = styled.div`
min-width: 150px;

`;

const Card = styled.div`
display: flex;
align-items: center;
background-color: gray;
border-radius: 0.4rem;
background-color: #DCDCDC;
&:last-child {
    border: 2px solid #6495ED;
    h4 {
        color: #6495ED;
        text-decoration: underline;
    }
  }
`;

const CardIcon = styled.div`
padding-left: 1rem;
`;

const CardDiv = styled.div`
max-width: 400px;
`;

const CardHeading = styled.h4`
margin-bottom: 0;
padding: 0 2rem;
font-size: 1.2rem;
`;

const CardParagraph = styled.p`
margin-top: 0;
font-size: 0.95rem;
width: 300px;
padding: 0 2rem;
text-align: left;
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
                        <CardIcon>
                        Icon Here
                        </CardIcon>

                        <CardDiv>
                        <CardHeading>Brief</CardHeading>
                        <CardParagraph>Complete <strong>brief writing or simple guidance</strong> on what to include,we've got you covered.</CardParagraph>
                        </CardDiv>

                    </Card>

                    <Card>
                        <CardIcon>
                        Icon Here
                        </CardIcon>

                        <CardDiv>
                        <CardHeading>Search</CardHeading>
                        <CardParagraph>In-depth agency search covering;<strong>criteria-matching</strong>,door knocking and due-dilligence vetting.</CardParagraph>
                        </CardDiv>

                    </Card>

                    <Card>
                        <CardIcon>
                        Icon Here
                        </CardIcon>

                        <CardDiv>
                        <CardHeading>Pitch</CardHeading>
                        <CardParagraph>Comprehensive <strong>pitch management</strong>,including comms,diary management and pitch hosting.</CardParagraph>
                        </CardDiv>

                    </Card>

                </Article>
            </ArticleContainer>
        </Section>
    )
}