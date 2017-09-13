/**
 * Imobiliaria.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	schema: true,
	connection: "mongo",

	attributes: {
		name: {
			type:'string',
			required: true,
			unique: true
		},
		razaosoc: {
			type: 'string',
			required: true,
			unique: true
		},
		reduzido : {
			type:'string',
			required: true,
			unique: true
		},
		cnpj: {
			type:'string',
			required: true,
			unique: true
		},
		active: {
			type:'boolean',
			default:true
		},
		avatar: {
			model:'foto',
			unique: true
		}
	}
};

