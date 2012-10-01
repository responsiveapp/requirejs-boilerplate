define ['jquery','underscore', 'backbone', 'tpl!./nav.html'], ($, _, bb, tmpl) ->
	console.log "navigation"
	class NavigationBar extends bb.View
		events:
			"click #about": -> @about()
			"click #home": -> 
				console.log "home"
		initialize: ->
		render: ->
			console.log "render"
			$(@el).html tmpl()
			@
		about: ->
			console.log "view: about"
