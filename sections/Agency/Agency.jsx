import Image from "next/image"
import {
  Section,
  ArticleContainer,
  Title,
  SubTitle,
  Article,
  ImageBox,
  Card,
  CardIcon,
  CardDiv,
  CardHeading,
  CardParagraph
} from "./elements"

export const Agency = ({
  title,
  subtitle,
  backgroundImage,
  image,
  cardHeading1,
  cardParagraph1,
  cardHeading2,
  cardParagraph2,
  cardHeading3,
  cardParagraph3
}) => {

    return (
        <Section backgroundImage={backgroundImage}>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
            <ArticleContainer>

                <Article>
                    <ImageBox>
                    <Image src={image}  width={300} height={500} />
                    </ImageBox>
                </Article>

                <Article>

                    <Card>
                        <CardIcon>
                        Icon Here
                        </CardIcon>

                        <CardDiv>
                        <CardHeading>{cardHeading1}</CardHeading>
                        <CardParagraph dangerouslySetInnerHTML={{ __html: cardParagraph1 }}></CardParagraph>
                        </CardDiv>

                    </Card>

                    <Card>
                        <CardIcon>
                        Icon Here
                        </CardIcon>

                        <CardDiv>
                        <CardHeading>{cardHeading2}</CardHeading>
                        <CardParagraph dangerouslySetInnerHTML={{__html: cardParagraph2}}></CardParagraph>
                        </CardDiv>

                    </Card>

                    <Card>
                        <CardIcon>
                        Icon Here
                        </CardIcon>

                        <CardDiv>
                        <CardHeading>{cardHeading3}</CardHeading>
                        <CardParagraph dangerouslySetInnerHTML={{__html: cardParagraph3}}></CardParagraph>
                        </CardDiv>

                    </Card>

                </Article>
            </ArticleContainer>
        </Section>
    )
}