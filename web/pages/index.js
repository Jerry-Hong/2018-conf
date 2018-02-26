import { map } from 'ramda'

import styled from 'styled-components'
import Burger from '../components/Burger'
import CallForSpeakers from '../components/CallForSpeakers'
import BuyTicket from '../components/BuyTicket'

import Logo from '../components/Logo'
import Year from '../components/Year'
import Fedc from '../components/Fedc'

import Date from '../components/Date'
import Location from '../components/Location'
import Sponsor from '../components/Sponsor'

const sponsor = [
	'icon_sponsor_appier.png',
	'icon_sponsor_hotjar.png',
	'icon_sponsor_kkbox.png',
	'icon_sponsor_trend.png'
]

const Row1 = styled.div`
	display: flex;
	justify-content: space-between;
`

const Buttons = styled.div`
	& > *:not(:last-child) {
		margin-right: 20px;
	}
`

const Row2 = styled.div`
	margin-top: 180px;
	/* margin-top: 12vh; */
	position: relative;
`

const LogoContainer = styled.div`
	width: 400px;
	margin: 0 auto;
`

const YearContainer = styled.div`
	position: absolute;
	bottom: 100%;
	left: 50%;
	transform: translate(23.5px, -4.43px);
`

const FedcContainer = styled.div`
	position: absolute;
	top: 200px;
	right: 50%;
	transform: translateX(-22.5px);
`

const Row3 = styled.div`
	margin-top: 404px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Bar = styled.div`
	height: 100%;
	background: #594a9d;
	border-radius: 2px;
	width: 3px;
	height: 100%;
	margin-left: ${({ left }) => left || 0}px;
	margin-right: ${({ right }) => right || 0}px;
`

const Index = ({ className }) => (
	<div className={className}>
		<Row1>
			<Burger href="menu" />
			<Buttons>
				<CallForSpeakers />
				<BuyTicket />
			</Buttons>
		</Row1>
		<Row2>
			<LogoContainer>
				<Logo />
			</LogoContainer>
			<YearContainer>
				<Year />
			</YearContainer>
			<FedcContainer>
				<Fedc />
			</FedcContainer>
		</Row2>
		<Row3>
			<Bar right={22} />
			<Date />
			<Bar left={49} right={19} />
			<Location />
			<Bar left={53} />
			{map(src => <Sponsor src={`/static/icon/${src}`} key={src} />, sponsor)}
		</Row3>
	</div>
)

export default styled(Index)`
	width: 100%;
	min-height: 100vh;
	padding: 30px;
`
