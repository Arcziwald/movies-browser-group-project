import {
  Wrapper,
  Poster,
  Title,
  Year,
  GenreBox,
  GenreTile,
  RatingBox,
  Rating,
  StarImage,
  Votes,
  DescriptionBox,
  PosterIMG,
} from "./styled";
import { genres } from "../genreIds";
import { IMG_URL } from "../../codesAPI";
import whenNoPoster from "../../images/whenNoPoster.png";

const MovieTile = ({ posterPath, title, year, tag, rating, votes }) => {
  const fullUrl = posterPath ? IMG_URL + posterPath : whenNoPoster;

  return (
    tag && (
      <Wrapper>
        <Poster>
          <PosterIMG src={fullUrl} />
        </Poster>
        <DescriptionBox>
          <Title> {title}</Title>
          <Year>{!isNaN(year) ? year : "Unknown"}</Year>
          <GenreBox>
            {tag.map((element) => {
              const matchingGenre = genres.find(
                (genreElement) => element === genreElement.id
              );
              if (matchingGenre) {
                return (
                  <GenreTile key={matchingGenre.id}>
                    {matchingGenre.name}
                  </GenreTile>
                );
              }
              return null;
            })}
          </GenreBox>
        </DescriptionBox>
        <RatingBox>
          <StarImage></StarImage>
          <Rating>{rating.toFixed(1).replace(".", ",")}</Rating>
          <Votes>{votes} votes</Votes>
        </RatingBox>
      </Wrapper>
    )
  );
};

export default MovieTile;
