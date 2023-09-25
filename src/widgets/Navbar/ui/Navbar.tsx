import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = props => {
  const { className } = props
  const { t } = useTranslation()
  return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink className={cls.mainLink} theme={AppLinkTheme.PRIMARY} to={'/'}>
					{t('Main')}
				</AppLink>
				<AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>
					{t('About')}
				</AppLink>
			</div>
		</div>
  )
}
