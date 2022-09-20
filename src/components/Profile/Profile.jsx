import defaultImage from './default.png';
import PropTypes from 'prop-types';

import {
  StatsList,
  StatsItem,
  StatsInfo,
  StatsOptions,
  Container,
  DescriptionContainer,
  UserImg,
  UserName,
  UserDescribe,
} from './Profile.styled';

export const Profile = ({
  username = 'vango',
  tag = 'luke',
  location = 'Kiev',
  avatar = defaultImage,
  stats,
}) => {
  return (
    <Container>
      <DescriptionContainer>
        <UserImg src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserDescribe>@{tag}</UserDescribe>
        <UserDescribe>{location}</UserDescribe>
      </DescriptionContainer>
      <StatsList>
        <StatsItem>
          <StatsOptions>Followers</StatsOptions>
          <StatsInfo>{stats.followers}</StatsInfo>
        </StatsItem>
        <StatsItem>
          <StatsOptions>Views</StatsOptions>
          <StatsInfo>{stats.views}</StatsInfo>
        </StatsItem>
        <StatsItem>
          <StatsOptions>Likes</StatsOptions>
          <StatsInfo>{stats.likes}</StatsInfo>
        </StatsItem>
      </StatsList>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
