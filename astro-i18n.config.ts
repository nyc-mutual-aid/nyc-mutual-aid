import { defineAstroI18nConfig } from 'astro-i18n'

export default defineAstroI18nConfig({
	primaryLocale: 'en',
	secondaryLocales: ['es'],
	fallbackLocale: 'en',
	trailingSlash: 'never',
	run: 'client+server',
	showPrimaryLocale: true,
	translationLoadingRules: [],
	translationDirectory: {},
	translations: {
		common: {
			en: {
				site: {
					title: 'NYC Mutual Aid'
				},
				days: {
					monday: 'Monday',
					tuesday: 'Tuesday',
					wednesday: 'Wednesday',
					thursday: 'Thursday',
					friday: 'Friday',
					saturday: 'Saturday',
					sunday: 'Sunday',
				},
				resources: {
					charging: 'Charging',
					clothing: 'Clothing',
					food: 'Food',
					funding: 'Funding',
					hygiene: 'Hygiene',
					misc: 'Misc.',
					resources: 'Resources',
					rest: 'Rest',
					toiletries: 'Toiletries',
				},
			},
			es: {
				Organizations: 'Organizaciones',
				About: 'Sobre',
				Services: 'Servicios',
				'Accepted Donations': 'Donaciones aceptadas',
				Hours: 'Horas',
				days: {
					monday: 'Lunes',
					tuesday: 'Martes',
					wednesday: 'Miércoles',
					thursday: 'Jueves',
					friday: 'Viernes',
					saturday: 'Sábado',
					sunday: 'Domingo',
				},
				resources: {
					charging: 'cargando',
					clothing: 'ropa',
					food: 'alimento',
					funding: 'fondos',
					hygiene: 'higiene',
					misc: 'misceláneos',
					resources: 'recursos',
					rest: 'descansar',
					toiletries: 'artículos de aseo',
				},
				site: {
					title: 'NYC Mutual Aid'
				}
			},
		},
	},
	routes: {
		es: {
			about: 'sobre',
			organizations: 'organizaciones',
		},
	},
});