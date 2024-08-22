_type = Object.prototype.toString


isScalar = (variable) ->
	return _type.call(variable) not in ['[object Array]', '[object Object]'] || variable == null


isObject = (variable) ->
	return variable != null && _type.call(variable) == '[object Object]'


isArray = (variable) ->
	return _type.call(variable) == '[object Array]'


merge = (left, right) ->
	if isScalar(left) || isScalar(right)
		throw new Error 'Can not merge scalar objects.'

	leftType = _type.call(left)
	rightType = _type.call(right)

	if leftType != rightType
		throw new Error 'Can not merge ' + leftType + ' with ' + rightType + '.'

	switch leftType
		when '[object Array]'
			return mergeArray(left, right)

		when '[object Object]'
			return mergeObject(left, right)

		else
			throw new Error 'Can not merge ' + leftType + ' objects.'


mergeArray = (left, right) ->
	add = []

	for rightValue, i in right
		leftValue = left[i]

		if (isObject(leftValue) && isObject(rightValue)) || (isArray(leftValue) && isArray(rightValue))
			left[i] = merge(leftValue, rightValue)

		else if isObject(rightValue)
			add.push(merge({}, rightValue))

		else if isArray(rightValue)
			add.push(merge([], rightValue))

		else
			add.push(rightValue)

	for value in add
		left.push(value)

	return left


mergeObject = (left, right) ->
	for key, value of right
		if right.hasOwnProperty(key) && key not in ['__proto__']
			if isScalar(value)
				if !left.hasOwnProperty(key)
					left[key] = value

			else
				if left.hasOwnProperty(key)
					left[key] = merge(left[key], value)

				else
					mergeWith = if isObject(value) then {} else []
					left[key] = merge(mergeWith, value)

	return left


module.exports = (left, right...) ->
	for r in right
		left = merge(left, r)

	return left