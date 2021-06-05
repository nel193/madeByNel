### Constant Force Behaviour ###
{Behaviour} = require './Behaviour.coffee'

class exports.ConstantForce extends Behaviour

	constructor: (@force = new Vector()) ->

		super

	apply: (p, dt,index) ->

		#super p, dt, index

		p.acc.add @force