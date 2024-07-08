// Import the necessary packages and styles
import Image from 'next/image'
import Badges from '../../utils/badge.list.util'
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'
import career from '../../../styles/sections/index/career.module.scss'
import bgStyles from '../../../styles/sections/projects/featured.module.scss' // Import the background styles

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Education() {
	return (
		<Section classProp={`${career.section} ${bgStyles.hasBg}`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Education"
					preTitle="Academic Career"
					subTitle="I am currently studying Computer Science at the University of Texas at San Antonio, maintaining a 3.7 GPA, with an expected graduation date of December 2025."
				/>
				<section className={career.area}>
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>University of Texas at San Antonio</h3>
								<h4>Bachelor of Science, Computer Science</h4>
								<h4>Aug 2023 - Present</h4>
								<h5>San Antonio, Texas</h5>
							</span>
						</div>
					</article>
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>University of Texas at San Antonio</h3>
								<h4>Political Science, Politics & Law</h4>
								<h4>Aug 2021 - Aug 2023</h4>
								<h5>San Antonio, Texas</h5>
							</span>
						</div>
					</article>
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Texas Tech University</h3>
								<h4>Political Science, Politics & Law</h4>
								<h4>Aug 2021 - Aug 22</h4>
								<h5>Lubbock, Texas</h5>
							</span>
						</div>
					</article>
				</section>
			</Container>
			<div className={bgStyles.bgContainer}>
				<span className={bgStyles.orbitalBg}>
					<span className={`${bgStyles.bgSection}`}><span className={`${bgStyles.bgInner} ${bgStyles.heroLeft} ${bgStyles.heroOrbital}`}></span></span>
					<span className={`${bgStyles.bgSection}`}><span className={`${bgStyles.bgInner} ${bgStyles.heroCenter}`}></span></span>
					<span className={`${bgStyles.bgSection}`}><span className={`${bgStyles.bgInner} ${bgStyles.heroRight} ${bgStyles.heroOrbital}`}></span></span>
				</span>
				<span className={bgStyles.afterGlowBg}></span>
			</div>
		</Section>
	)
}
