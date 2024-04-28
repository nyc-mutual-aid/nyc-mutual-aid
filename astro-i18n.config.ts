import { defineAstroI18nConfig } from 'astro-i18n'

export const localeLabels = {
	ar: 'العربية',
	en: 'English',
	es: 'Español',
	fr: 'Français',
} as const;

export default defineAstroI18nConfig({
	primaryLocale: 'en',
	secondaryLocales: ['es', 'ar', 'fr'],
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
					title: 'NYC Mutual Aid',
					description: 'Find mutual aid resources around New York City.'
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
				Language: 'Idioma',
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
					charging: 'Cargando',
					clothing: 'Ropa',
					food: 'Alimento',
					funding: 'Fondos',
					hygiene: 'Higiene',
					misc: 'Misceláneos',
					resources: 'Recursos',
					rest: 'Descansar',
					toiletries: 'Artículos de Aseo',
				},
				site: {
					title: 'NYC Mutual Aid'
				}
			},
			ar: {
				Organizations: 'المنظمات',
				About: 'عن',
				Language: 'لغة',
				Services: 'خدمات',
				'Accepted Donations': 'التبرعات المقبولة',
				Hours: 'ساعات',
				days: {
					monday: 'الاثنين',
					tuesday: 'يوم الثلاثاء',
					wednesday: 'الأربعاء',
					thursday: 'يوم الخميس',
					friday: 'جمعة',
					saturday: 'السبت',
					sunday: 'الأحد',
				},
				resources: {
					charging: 'الشحن',
					clothing: 'ملابس',
					food: 'طعام',
					funding: 'التمويل',
					hygiene: 'صحة',
					misc: 'متنوع',
					resources: 'موارد',
					rest: 'استراحة',
					toiletries: 'مستلزمات المرحاض',
				},
				site: {
					title: 'مدينة نيويورك للمساعدات المتبادلة'
				},
			},
			fr: {
				Organizations: 'Organisations',
				About: 'À Propos',
				Language: 'Langue',
				Services: 'Services',
				'Accepted Donations': 'Dons Acceptés',
				Hours: 'Heures',
				days: {
					monday: 'Lundi',
					tuesday: 'Mardi',
					wednesday: 'Mercredi',
					thursday: 'Jeudi',
					friday: 'Vendredi',
					saturday: 'Samedi',
					sunday: 'Dimanche',
				},
				resources: {
					charging: 'Station de Recharge',
					clothing: 'Vêtements',
					food: 'Nourriture',
					funding: 'Financement',
					hygiene: 'hygiène',
					misc: 'Divers',
					resources: 'Ressources',
					rest: 'Repos',
					toiletries: 'Articles de Toilette',
				},
				site: {
					title: 'Entraide de NYC'
				},
			},
		},
	},
	routes: {
		es: {
			about: 'sobre',
			organizations: 'organizaciones',
		},
		ar: {
			about: 'about',
			organizations: 'organizations',
		},
		fr: {
			about: 'a-propos',
			organizations: 'organisations',
		},
	},
});
