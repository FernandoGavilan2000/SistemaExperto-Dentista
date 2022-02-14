const Niveles = {
	Urgente: 'Urgente',
	Sospecha: 'Sospecha',
};

let enfermedades = {
	cariesInicial: {
		name: 'Urgente:Caries Estadio Inicial',
		image: './images/diagnosticos/caries.jpg',
		description:
			'Las caries son zonas dañadas de forma permanente en la superficie de los dientes que se convierten en pequeñas aberturas u orificios. Las caries dentales son uno de los problemas de salud más frecuentes en el mundo.Si no se tratan, las caries pueden extenderse y afectar capas más profundas de los dientes. Pueden provocar dolor de muela intenso, infecciones y pérdida de dientes.',
		advices: ['Cepíllate los dientes al menos 2 veces al día.', 'Utiliza una pasta que contenga flúor.', 'No te olvides del hilo dental.'],
	},
	cariesAvanzado: {
		name: 'Urgente: Caries Estadio Avanzado',
		image: './images/diagnosticos/caries.jpg',
		description:
			'Las caries son zonas dañadas de forma permanente en la superficie de los dientes que se convierten en pequeñas aberturas u orificios. Las caries dentales son uno de los problemas de salud más frecuentes en el mundo.Si no se tratan, las caries pueden extenderse y afectar capas más profundas de los dientes. Pueden provocar dolor de muela intenso, infecciones y pérdida de dientes.',
		advices: ['Cepíllate los dientes al menos 2 veces al día.', 'Utiliza una pasta que contenga flúor.', 'No te olvides del hilo dental.'],
	},
	cariesAdvertencia: {
		name: '⚠ Cuidado: Podrias estar desarrollando Caries',
		image: './images/diagnosticos/caries.jpg',
		description:
			'Las caries son zonas dañadas de forma permanente en la superficie de los dientes que se convierten en pequeñas aberturas u orificios. Las caries dentales son uno de los problemas de salud más frecuentes en el mundo.Si no se tratan, las caries pueden extenderse y afectar capas más profundas de los dientes. Pueden provocar dolor de muela intenso, infecciones y pérdida de dientes.',
		advices: ['Cepíllate los dientes al menos 2 veces al día.', 'Utiliza una pasta que contenga flúor.', 'No te olvides del hilo dental.'],
	},
	gingivitis: {
		name: 'Gingivitis',
		image: './images/diagnosticos/gingivitis.jpg',
		description:
			'Es la inflamación en las encias, se produce por que el biofilm empieza a inflamar a las encias por falta de limpieza, tambien puede estar asociado a procesos hormonales, a madres gestantes o a la frecuencia de mal cepillado.',
		advices: ['Limpiezas dentales con un profesional.', 'Cepillarse los dientes 3 veces al dia', 'Usar cepillo de cerdas suaves si es que lo ocupa o necesita.'],
	},
	maloclusion: {
		name: 'Maloclusion',
		image: './images/diagnosticos/maloclusion.jpg',
		description:
			'Es la incorrecta alineación de los dientes,el paciente presenta una diferencia de tamaño entre mandíbulas o entre mandíbula y diente.Hay casos en la cual el maxilar superior es muy pequeño para alvergar todos los dientes en las cuales deben ir en este tren superior.',
		advices: ['Ortodoncia interceptiva (niños)', 'Ortodoncia Correctiva(adultos)'],
	},
	maloclusion1: {
		name: 'Maloclusion Clase I',
		image: './images/diagnosticos/maloclusion.jpg',
		description:
			'Es la incorrecta alineación de los dientes,el paciente presenta una diferencia de tamaño entre mandíbulas o entre mandíbula y diente.Hay casos en la cual el maxilar superior es muy pequeño para alvergar todos los dientes en las cuales deben ir en este tren superior.',
		advices: ['Ortodoncia interceptiva (niños)', 'Ortodoncia Correctiva(adultos)'],
	},
	maloclusion2: {
		name: 'Maloclusion Clase II',
		image: './images/diagnosticos/maloclusion.jpg',
		description:
			'Es la incorrecta alineación de los dientes,el paciente presenta una diferencia de tamaño entre mandíbulas o entre mandíbula y diente.Hay casos en la cual el maxilar superior es muy pequeño para alvergar todos los dientes en las cuales deben ir en este tren superior.',
		advices: ['Ortodoncia interceptiva (niños)', 'Ortodoncia Correctiva(adultos)'],
	},
	maloclusion3: {
		name: 'Maloclusion Clase III',
		image: './images/diagnosticos/maloclusion.jpg',
		description:
			'Es la incorrecta alineación de los dientes,el paciente presenta una diferencia de tamaño entre mandíbulas o entre mandíbula y diente.Hay casos en la cual el maxilar superior es muy pequeño para alvergar todos los dientes en las cuales deben ir en este tren superior.',
		advices: ['Ortodoncia interceptiva (niños)', 'Ortodoncia Correctiva(adultos)'],
	},
	periodontitis: {
		name: 'Periodontitis',
		image: './images/diagnosticos/periodintitis.jpg',
		description:
			'Se produce por la gingivitis sin atención médica, la acumulación de bacterias causada por esta se solidifica destruyendo el ligamento periodontal y con el tiempo el hueso alveolar al que se encuentra sujeto.',
		advices: ['Radiografía(para examinar el hueso en busca de desgaste del hueso o los ligamentos)'],
	},
	periodontitisAvanzada: {
		name: 'Periodontitis Avanzada',
		image: './images/diagnosticos/periodintitis.jpg',
		description:
			'Se produce por la gingivitis sin atención médica, la acumulación de bacterias causada por esta se solidifica destruyendo el ligamento periodontal y con el tiempo el hueso alveolar al que se encuentra sujeto.',
		advices: ['Radiografía(para examinar el hueso en busca de desgaste del hueso o los ligamentos)'],
	},
	absceso: {
		name: 'Absceso Dental',
		image: './images/diagnosticos/abceso.jpg',
		description:
			'Comienza con una lesión cariosa en esmalte, que por no ser tratada avanza a dentina y luego a la cámara pulpar, generando necrosis dentro del diente, y luego llegando a la raíz afectando el hueso',
		advices: ['Asistir a un centro médico para examinación', 'Eliminar el absceso a través de endodoncia'],
	},
	cancerBucal: {
		name: '⚠ Podrias estar desarrollando Cancer Bucal',
		image: './images/diagnosticos/cancerbucal.jpg',
		description: 'Comienza a desarrollarse en las células planas de: la lengua el piso de la boca, los labios',
		advices: ['Personas con mayor riesgo:Fumadores', 'Se puede detectar a través de una biopsia'],
	},
	saludBucalExcelente: {
		name: '✅ Usted Presenta una Excelente Salud Bucal',
		image: './images/diagnosticos/buenasalud.jpg',
		description:
			'La importancia de la prevención bucodental está en que nos permite mantener limpios y sanos a nuestras encías, dientes, lengua y boca en general con una buena higiene dental diaria.',
		advices: ['Uso de un buen cepillo adecuado a la estructura de la boca', 'Cambio de cepillo cada 3 meses'],
	},
	saludBucalBuena: {
		name: '✅ Usted Presenta una Buena Salud Bucal',
		image: './images/diagnosticos/buenasalud.jpg',
		description:
			'La importancia de la prevención bucodental está en que nos permite mantener limpios y sanos a nuestras encías, dientes, lengua y boca en general con una buena higiene dental diaria.',
		advices: ['Uso de un buen cepillo adecuado a la estructura de la boca', 'Cambio de cepillo cada 3 meses'],
	},
};
