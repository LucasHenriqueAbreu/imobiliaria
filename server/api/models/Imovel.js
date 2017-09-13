/**
 * Imovel.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	schema: true,
	connection: "mongo",

	attributes: {
		name: {
			type: 'string',
			required: true,
			unique: true
		},
		decricao: {
			type: 'string'
		},
		photos: {
			collection: 'foto'
		},
		type_buisness: {
			type: 'string',
			enum: ['VENDA', 'ALUGUEL'],
			required: "true",
		},
		type: {
			type: 'string',
			enum: ['QUITINETE', 'FATS', 'ESTUDIO', 'LOFTS', 'APARTAMENTO', 'COBERTURA', 'MANSAO', 'CASA', 'CASA_FERIAS', 'SALA', 'ANDAR', 'DEPÓSITO', 'CHACARA', 'FAZENDA'],
			required: "true",
		},
		comodos: {
			collection: 'comodos'
		},
		areautil: {
			type: 'number'
		},
		areatotal: {
			type: 'number'
		},
		valor: {
			type: 'number',
			required: true
		},
		city: {
			type: 'string'
		},
		address: {
			type: 'string'
		},
		number: {
			type: 'integer'
		},
		postal_code: {
			type: 'string'
		},
		lat: {
			type: 'string'
		},
		log: {
			type: 'string'
		}
	}
};

