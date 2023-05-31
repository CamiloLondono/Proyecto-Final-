from rest_framework.viewsets import ModelViewSet
from peliculas.api.serializer import PeliculasSerializer
from peliculas.models import Peliculas


class PeliculasApiSet(ModelViewSet):
    serializer_class = PeliculasSerializer
    queryset = Peliculas.objects.all()