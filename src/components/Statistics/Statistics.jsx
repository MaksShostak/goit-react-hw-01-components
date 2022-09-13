import PropTypes from "prop-types";
import{getRandomHexColor} from "./RandomColor"
import { Section, Title, StatList, StatItem } from "./Statistics.styled"
export const Statistics = ({stats,title} ) => {
return <Section>
  {title && <Title>{title}</Title>}
  <StatList>
        {stats.map(stat => (
        <StatItem key={stat.id} color={getRandomHexColor()}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </StatItem>
        ))}
  </StatList>
</Section>    
  
}



Statistics.propTypes = {
    title:PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }),)
}