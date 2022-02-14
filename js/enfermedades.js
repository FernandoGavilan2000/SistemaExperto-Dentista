const Niveles = {
	Urgente: 'Urgente',
	Sospecha: 'Sospecha',
};

let enfermedades = {
	cariesInicial: {
		name: 'Urgente:Caries Estadio Inicial',
		image: 'https://dentalevamarcos.com/wp-content/uploads/2020/07/detectar-caries.jpg',
		description:
			'Las caries son zonas dañadas de forma permanente en la superficie de los dientes que se convierten en pequeñas aberturas u orificios. Las caries dentales son uno de los problemas de salud más frecuentes en el mundo.Si no se tratan, las caries pueden extenderse y afectar capas más profundas de los dientes. Pueden provocar dolor de muela intenso, infecciones y pérdida de dientes.',
		advices: ['Cepíllate los dientes al menos 2 veces al día.', 'Utiliza una pasta que contenga flúor.', 'No te olvides del hilo dental.'],
	},
	cariesAvanzado: {
		name: 'Urgente: Caries Estadio Avanzado',
		image: 'https://dentalevamarcos.com/wp-content/uploads/2020/07/detectar-caries.jpg',
		description:
			'Las caries son zonas dañadas de forma permanente en la superficie de los dientes que se convierten en pequeñas aberturas u orificios. Las caries dentales son uno de los problemas de salud más frecuentes en el mundo.Si no se tratan, las caries pueden extenderse y afectar capas más profundas de los dientes. Pueden provocar dolor de muela intenso, infecciones y pérdida de dientes.',
		advices: ['Cepíllate los dientes al menos 2 veces al día.', 'Utiliza una pasta que contenga flúor.', 'No te olvides del hilo dental.'],
	},
	cariesAdvertencia: {
		name: '⚠ Cuidado: Podrias estar desarrollando Caries',
		image: 'https://dentalevamarcos.com/wp-content/uploads/2020/07/detectar-caries.jpg',
		description:
			'Las caries son zonas dañadas de forma permanente en la superficie de los dientes que se convierten en pequeñas aberturas u orificios. Las caries dentales son uno de los problemas de salud más frecuentes en el mundo.Si no se tratan, las caries pueden extenderse y afectar capas más profundas de los dientes. Pueden provocar dolor de muela intenso, infecciones y pérdida de dientes.',
		advices: ['Cepíllate los dientes al menos 2 veces al día.', 'Utiliza una pasta que contenga flúor.', 'No te olvides del hilo dental.'],
	},
	gingivitis: {
		name: 'Gingivitis',
		image: 'https://eresmama.com/wp-content/uploads/2021/02/dibujo-dientes-gingivitis-2048x1821.jpg',
		description:
			'Es la inflamación en las encias, se produce por que el biofilm empieza a inflamar a las encias por falta de limpieza, tambien puede estar asociado a procesos hormonales, a madres gestantes o a la frecuencia de mal cepillado.',
		advices: ['Limpiezas dentales con un profesional.', 'Cepillarse los dientes 3 veces al dia', 'Usar cepillo de cerdas suaves si es que lo ocupa o necesita.'],
	},
	maloclusion: {
		name: 'Maloclusion',
		image: 'https://ortopalma.com/app/uploads/elementor/thumbs/imagen-destacada-p2eqyxrg26s2a0xerrms1aqnnojojkk3ks4f3ofn8w.png',
		description:
			'Es la incorrecta alineación de los dientes,el paciente presenta una diferencia de tamaño entre mandíbulas o entre mandíbula y diente.Hay casos en la cual el maxilar superior es muy pequeño para alvergar todos los dientes en las cuales deben ir en este tren superior.',
		advices: ['Ortodoncia interceptiva (niños)', 'Ortodoncia Correctiva(adultos)'],
	},
	maloclusion1: {
		name: 'Maloclusion Clase I',
		image: 'https://ortopalma.com/app/uploads/elementor/thumbs/imagen-destacada-p2eqyxrg26s2a0xerrms1aqnnojojkk3ks4f3ofn8w.png',
		description:
			'Es la incorrecta alineación de los dientes,el paciente presenta una diferencia de tamaño entre mandíbulas o entre mandíbula y diente.Hay casos en la cual el maxilar superior es muy pequeño para alvergar todos los dientes en las cuales deben ir en este tren superior.',
		advices: ['Ortodoncia interceptiva (niños)', 'Ortodoncia Correctiva(adultos)'],
	},
	maloclusion2: {
		name: 'Maloclusion Clase II',
		image: 'https://ortopalma.com/app/uploads/elementor/thumbs/imagen-destacada-p2eqyxrg26s2a0xerrms1aqnnojojkk3ks4f3ofn8w.png',
		description:
			'Es la incorrecta alineación de los dientes,el paciente presenta una diferencia de tamaño entre mandíbulas o entre mandíbula y diente.Hay casos en la cual el maxilar superior es muy pequeño para alvergar todos los dientes en las cuales deben ir en este tren superior.',
		advices: ['Ortodoncia interceptiva (niños)', 'Ortodoncia Correctiva(adultos)'],
	},
	maloclusion3: {
		name: 'Maloclusion Clase III',
		image: 'https://ortopalma.com/app/uploads/elementor/thumbs/imagen-destacada-p2eqyxrg26s2a0xerrms1aqnnojojkk3ks4f3ofn8w.png',
		description:
			'Es la incorrecta alineación de los dientes,el paciente presenta una diferencia de tamaño entre mandíbulas o entre mandíbula y diente.Hay casos en la cual el maxilar superior es muy pequeño para alvergar todos los dientes en las cuales deben ir en este tren superior.',
		advices: ['Ortodoncia interceptiva (niños)', 'Ortodoncia Correctiva(adultos)'],
	},
	periodontitis: {
		name: 'Periodontitis',
		image: 'https://www.medyclinic.es/blog/wp-content/uploads/2020/09/Disen%CC%83o-Blog-Medyclinic-Septiembre.-Periodontitis-1200x630-1-1024x538.jpg',
		description:
			'Se produce por la gingivitis sin atención médica, la acumulación de bacterias causada por esta se solidifica destruyendo el ligamento periodontal y con el tiempo el hueso alveolar al que se encuentra sujeto.',
		advices: ['Radiografía(para examinar el hueso en busca de desgaste del hueso o los ligamentos)'],
	},
	periodontitisAvanzada: {
		name: 'Periodontitis Avanzada',
		image: 'https://www.medyclinic.es/blog/wp-content/uploads/2020/09/Disen%CC%83o-Blog-Medyclinic-Septiembre.-Periodontitis-1200x630-1-1024x538.jpg',
		description:
			'Se produce por la gingivitis sin atención médica, la acumulación de bacterias causada por esta se solidifica destruyendo el ligamento periodontal y con el tiempo el hueso alveolar al que se encuentra sujeto.',
		advices: ['Radiografía(para examinar el hueso en busca de desgaste del hueso o los ligamentos)'],
	},
	absceso: {
		name: 'Absceso Dental',
		image: 'https://www.clinicadentalsalvadorgarcia.com/blog/wp-content/uploads/2020/04/Salvador-garci%CC%81a-blog-flemo%CC%81n.jpg',
		description:
			'Comienza con una lesión cariosa en esmalte, que por no ser tratada avanza a dentina y luego a la cámara pulpar, generando necrosis dentro del diente, y luego llegando a la raíz afectando el hueso',
		advices: ['Asistir a un centro médico para examinación', 'Eliminar el absceso a través de endodoncia'],
	},
	cancerBucal: {
		name: '⚠ Podrias estar desarrollando Cancer Bucal',
		image: 'https://msptucuman.gov.ar/wordpress/wp-content/uploads/2019/11/C%C3%A1ncer-Bucal-1024x612.jpg',
		description: 'Comienza a desarrollarse en las células planas de: la lengua el piso de la boca, los labios',
		advices: ['Personas con mayor riesgo:Fumadores', 'Se puede detectar a través de una biopsia'],
	},
	saludBucalExcelente: {
		name: '✅ Usted Presenta una Excelente Salud Bucal',
		image:
			'https://previews.123rf.com/images/creepycube/creepycube1610/creepycube161000035/67959448-%EA%B1%B4%EA%B0%95%ED%95%9C-%EC%B9%98%EC%95%84%EC%9D%98-%EA%B0%80%EC%9E%A5-%EC%B9%9C%ED%95%9C-%EC%B9%9C%EA%B5%AC-%EC%B9%98%EA%B3%BC-%EB%B0%8F-%EA%B5%AC%EA%B0%95-%EC%9C%84%EC%83%9D-%EA%B0%9C%EB%85%90%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%B9%98%EC%95%84-%EC%9A%A9%ED%92%88-%EC%9E%AC%EB%AF%B8-%EC%9E%88%EC%9D%80-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-.jpg',
		description:
			'La importancia de la prevención bucodental está en que nos permite mantener limpios y sanos a nuestras encías, dientes, lengua y boca en general con una buena higiene dental diaria.',
		advices: ['Uso de un buen cepillo adecuado a la estructura de la boca', 'Cambio de cepillo cada 3 meses'],
	},
	saludBucalBuena: {
		name: '✅ Usted Presenta una Buena Salud Bucal',
		image:
			'https://previews.123rf.com/images/creepycube/creepycube1610/creepycube161000035/67959448-%EA%B1%B4%EA%B0%95%ED%95%9C-%EC%B9%98%EC%95%84%EC%9D%98-%EA%B0%80%EC%9E%A5-%EC%B9%9C%ED%95%9C-%EC%B9%9C%EA%B5%AC-%EC%B9%98%EA%B3%BC-%EB%B0%8F-%EA%B5%AC%EA%B0%95-%EC%9C%84%EC%83%9D-%EA%B0%9C%EB%85%90%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%B9%98%EC%95%84-%EC%9A%A9%ED%92%88-%EC%9E%AC%EB%AF%B8-%EC%9E%88%EC%9D%80-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-.jpg',
		description:
			'La importancia de la prevención bucodental está en que nos permite mantener limpios y sanos a nuestras encías, dientes, lengua y boca en general con una buena higiene dental diaria.',
		advices: ['Uso de un buen cepillo adecuado a la estructura de la boca', 'Cambio de cepillo cada 3 meses'],
	},
};
