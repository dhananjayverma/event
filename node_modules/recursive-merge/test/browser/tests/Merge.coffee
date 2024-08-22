merge = require '/lib/Merge'

describe 'Merge', ->

	it 'should throw error if objects are not of the same type', ->
		expect( -> merge([], {})).to.throw(Error, 'Can not merge [object Array] with [object Object].')

	it 'should throw error if objects are not arrays or objects', ->
		expect( -> merge('', '')).to.throw(Error, 'Can not merge scalar objects.')
		expect( -> merge(1, 1)).to.throw(Error, 'Can not merge scalar objects.')
		expect( -> merge(true, true)).to.throw(Error, 'Can not merge scalar objects.')

	it 'should return merged simple arrays', ->
		expect(merge(
			[1, 1, 2, 3],
			[3, 4, 4, 5],
			[10, 9, 8, 1]
		)).to.be.eql([1, 1, 2, 3, 3, 4, 4, 5, 10, 9, 8, 1])

	it 'should return merged advanced arrays', ->
		expect(merge(
			[[1, 2, 3], [4, 5, 6]]
			[[7, 8, 9], [10, 11, 12]]
		)).to.be.eql([[1, 2, 3, 7, 8, 9], [4, 5, 6, 10, 11, 12]])

	it 'should return merged more than two arrays', ->
		expect(merge(
			[1, 2, 3]
			[4, 5, 6]
			[7, 8, 9]
			[10, 11, 12]
		)).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

	it 'should return merged arrays with objects', ->
		expect(merge(
			[one: 1, two: 2, three: 3]
			[four: 4, five: 5, six: 6]
			[7, 8, 9]
			[10, 11, 12]
		)).to.be.eql([one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, 7, 8, 9, 10, 11, 12])

	it 'should return merged simple objects', ->
		expect(merge(
			{hello: 'world'}
			{world: 'hello'}
		)).to.be.eql(hello: 'world', world: 'hello')

	it 'should return merged advanced objects', ->
		expect(merge(
			{one: {two: 2, three: 3}, four: {five: 5, six: 6}}
			{seven: {eight: 8, nine: 9}, one: {ten: 10, eleven: 11}}
		)).to.be.eql(one: {two: 2, three: 3, ten: 10, eleven: 11}, four: {five: 5, six: 6}, seven: {eight: 8, nine: 9})

	it 'should return merged more than two objects', ->
		expect(merge(
			{one: 1}
			{two: 2}
			{three: 3}
			{four: 4}
		)).to.be.eql(one: 1, two: 2, three: 3, four: 4)

	it 'should return merged objects with arrays', ->
		expect(merge(
			{one: [1]}
			{two: [2]}
			{three: [3]}
			{four: [4]}
		)).to.be.eql(one: [1], two: [2], three: [3], four: [4])