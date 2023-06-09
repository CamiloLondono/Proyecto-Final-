from rest_framework.routers import DefaultRouter
from peliculas.api.views import PeliculasApiSet

router_peliculas = DefaultRouter()
router_peliculas.register(prefix='peliculas', basename='peliculas', viewset=PeliculasApiSet)
