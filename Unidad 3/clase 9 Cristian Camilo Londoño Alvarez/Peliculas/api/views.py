from rest_framework.viewsets import ModelViewSet
from peliculas.api.serializer import PeliculasSerializer
from peliculas.models import Peliculas

class PeliculasApiSet(ModelViewSet):
    serializer_class = PeliculasSerializer
    def get_queryset(self):
        queryset = Peliculas.objects.all()
        titulo = self.request.query_params.get('titulo')
        genero = self.request.query_params.get('genero')
        if titulo is not None:
            queryset =queryset.filter(titulo=titulo)
        if genero is not None:
            queryset =queryset.filter(genero=genero)
        return queryset