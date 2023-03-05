import { DogIcon } from "assets";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { StyledMainPage, MainText, Text, SubText, Btn, DogImage, Picture } from "./styles";

export const MainPage = () => {
  return (
    <StyledMainPage>
      <MainText>
        <Text>Your new friend will be delivered directly to home </Text>
        <SubText>Online pet shop will present you a new friend just via a little of clicks</SubText>
        <Link to={ROUTE.FRIENDS}>
          <Btn>See pets</Btn>
        </Link>
      </MainText>

      <DogImage>
        <Picture src={DogIcon} alt="dog-icon" />
      </DogImage>
    </StyledMainPage>
  );
};
