define ['backbone', 'cs!./nav/nav'], (BB, Nav) ->
	start: ()->
		nav = new Nav({
			el : $ ".container"
		})
		nav.render()
		console.log "started"
