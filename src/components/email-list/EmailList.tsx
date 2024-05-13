import { useQuery } from '@tanstack/react-query'
import parse from 'html-react-parser'
import { emailService } from '../../services/email.service'
import styles from './EmailList.module.scss'

export default function EmailList() {
	const { data } = useQuery({
		queryKey: ['email list'],
		queryFn: () => emailService.getEmails(),
	})

	return (
		<div className={styles.list}>
			{data?.map(email => (
				<div key={email.id}>{parse(email.text)}</div>
			))}
			<div>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at
				iusto accusamus sit quos, fugit assumenda reiciendis facilis. Ducimus
				itaque doloribus officiis sint eos quos harum saepe minus ipsa corporis,
				adipisci commodi iure libero veritatis deserunt earum nesciunt
				reiciendis neque?
			</div>
		</div>
	)
}
