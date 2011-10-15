class ArrayUtil
	@find:(source, search, by_property)->
		if by_property is null
			for v, k in source
				return {item: v, index: k} if v == search
		else
			by_property = [].concat by_property
			for v, k in source
				for p in by_property
					return {item: v, index: k} if search == v[p]
		return null
	
	@find_all:(source, search, by_property, regexp)->
		_output = []

		if by_property is null
			for v, k in source
				if regexp
					if search.test v
						_output.push {item: v, index: k}
				else
					if search == v
						_output.push {item: v, index: k}
		else
			by_property = [].concat by_property
			for v, k in source
				for p in by_property
					if regexp
						if search.test v[p]
							_output.push {item: v, index: k}
					else
						if search == v[p]
							_output.push {item: v, index: k}
		
		return if _output.length then _output else null
	


	@diff:(a, b, by_property)->
		diff = []
		
		for item in a
			search = if by_property? then item[by_property] else item
			if !ArrayUtil.has b, search, by_property
				diff.push {item:item, action:"deleted"}
		
		for item in b
			search = if by_property? then item[by_property] else item
			if !ArrayUtil.has a, search, by_property
				diff.push {item:item, action:"created"}
		
		diff
	
	@has:(source, search, by_property)->
		return ArrayUtil.find( source, search, by_property )?